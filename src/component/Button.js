
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

           // come to this logic 

            const lastElm = initialVal[initialVal.length - 1]
           
         
            
            if(operators.includes(lastElm)){

                const slicedOperator = initialVal.slice(0,-1)
                return setInitialVal(slicedOperator.concat(val))
                
            }


            
        }

        // handel for dot 

        if(val === '.'){
           
            // console.log(initialVal);

            const checkedClicked = initialVal.indexOf(val)
            console.log(checkedClicked);
            if(checkedClicked !== -1){
                const slicedStr = initialVal.slice(checkedClicked);
                for(const elm of slicedStr){
                    console.log(slicedStr);
                   console.log(elm);
                    // console.log(operators.includes(elm));
                    // if(operators.includes(elm)){
                    //     console.log(elm);
                    // // return setInitialVal(initialVal.concat(val))
                        
                    // }  else{
                    //     return
                    // }
                }
               
            }
            
           
           
           
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