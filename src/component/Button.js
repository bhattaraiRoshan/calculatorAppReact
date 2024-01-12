
export const Button = (props) =>{

  

    const {btnClass, label, setInitialVal, initialVal} = props
    const operators = ['+', '-', '*', '/', '%']


    const handelOnClick = (val) =>{

        // handel for AC
        if(val === 'AC'){
            return setInitialVal('0.00');
        }


        // handel for C 

        if(val === "C"){

            if(initialVal === '0.00'){
                return
            }

            
            const slicedInitialVal = initialVal.slice(0, -1)

          return slicedInitialVal.length <=0 ? setInitialVal('0.00') : setInitialVal(slicedInitialVal)

        }

        // handel for operators 

        if(operators.includes(val)){


            const lastElm = initialVal[initialVal.length - 1]
           
         
            
            if(operators.includes(lastElm)){

                const slicedOperator = initialVal.slice(0,-1)
                return setInitialVal(slicedOperator.concat(val))
                
            }


            
        }

        // handel for dot 

        if(val === '.'){
           
          

            const checkedClicked = initialVal.lastIndexOf(val)
            
            
            if(checkedClicked !== -1){
                const slicedString = initialVal.slice(checkedClicked)

                
                
                for(const elm of slicedString){
                    
                    if(operators.includes(elm)){
                       return setInitialVal(initialVal.concat(val))
                    }
                }

                if(slicedString.includes('.')){
                   return
                }

            }
            
           
           
           
        }

        // handel of answer 

        if(val === "="){

            const ans = String(eval(initialVal))
            return setInitialVal(ans)
            
        }


        










       const output =  initialVal === '0.00' ?  val : initialVal.concat(val);
       setInitialVal(output)


    }
 

    

    return(
       <>

       <div className={`btn ${btnClass}`} onClick={()=>handelOnClick(label)}>{label}</div>

   
   
       
       </>
    )
}