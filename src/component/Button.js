
export const Button = (props) =>{

  

    const {btnClass, label, handelOnClick} = props
 

    

    return(
       <>

       <div className={`btn ${btnClass}`} onClick={(e)=>handelOnClick(e)}>{label}</div>

   
   
       
       </>
    )
}