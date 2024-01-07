
import { useState } from 'react';
import './App.css';
import { Button } from './component/Button';

const operators = ['+', '-', '*', '/', '%']

const buttons = [

  {buttonClass: 'btn-ac', label: 'AC'},
  {buttonClass: 'btn-c', label: 'C'},
  {buttonClass: 'btn-per', label: '%'},
  {buttonClass: 'btn-divide', label: '/'},
  {buttonClass: 'btn-7', label: '7'},
  {buttonClass: 'btn-8', label: '8'},
  {buttonClass: 'btn-9', label: '9'},
  {buttonClass: 'btn-X', label: '*'},
  {buttonClass: 'btn-4', label: '4'},
  {buttonClass: 'btn-5', label: '5'},
  {buttonClass: 'btn-6', label: '6'},
  {buttonClass: 'btn-minus', label: '-'},
  {buttonClass: 'btn-1', label: '1'},
  {buttonClass: 'btn-2', label: '2'},
  {buttonClass: 'btn-3', label: '3'},
  {buttonClass: 'btn-plus', label: '+'},
  {buttonClass: 'btn-0', label: '0'},
  {buttonClass: 'btn-dot', label: '.'},
  {buttonClass: 'btn-equal', label: '='},
]


function App() {

 const [dispalyValue, setDispalyValue] = useState('0.00')

 const doNotUpdate = dispalyValue === '0.00';

 const handelOnClick = (label) =>{

if(label === 'AC'){
  let val = '0.00'
  return setDispalyValue(val)
}



// logic of C


if(label === 'C'){

 const clearedValue = dispalyValue.slice(0,-1)
 return setDispalyValue(doNotUpdate ? '0.00' : clearedValue ? clearedValue : '0.00')
}

// logic for operator 

if(operators.includes(label)){


  const lastValue = dispalyValue[dispalyValue.length -1]
  

  if(operators.includes(lastValue)){

    const newVale = dispalyValue.slice(0,-1).concat(label)
    return setDispalyValue(newVale)
  }


  // return setDispalyValue(dispalyValue.concat(label))


 
}


if(label === '.'){
  
  const lastValue = dispalyValue[dispalyValue.length - 1]
  let dotClicked = dispalyValue.includes('.')

  if(dotClicked){
    return;
  } else if(operators.includes(lastValue)){
    
  }

 

 
}

// logic for equal

if(label === '='){

  return setDispalyValue(eval(dispalyValue))
}


 setDispalyValue(doNotUpdate ? label : dispalyValue.concat(label))

 }



  return (
   <>

   <div className='App'>

     <div className="wrapper">

        <div className="Calculator">
         <div className=" display">{dispalyValue}</div>

    
        {buttons.map((btn, i)=>{
          
         return <Button 
         btnClass={btn.buttonClass} 
         label = {btn.label} 
         key={i}
         handelOnClick={handelOnClick} 
         />
        })}
       </div>

      </div>

    </div>
   
   </>
  );
}

export default App;
