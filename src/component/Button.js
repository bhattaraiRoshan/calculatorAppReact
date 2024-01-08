
export const Button = (props) =>{

  

    const {btnClass, label} = props


    const handelOnClick = (val) =>{

        console.log(val);


    }
 

    

    return(
       <>

       <div className={`btn ${btnClass}`} onClick={()=>handelOnClick(label)}>{label}</div>

   
   
       
       </>
    )
}