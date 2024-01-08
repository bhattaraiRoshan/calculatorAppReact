

import './App.css';
import { Button } from './component/Button';
import { Dispaly } from './component/Dispaly';



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





  return (
   <>

   <div className='App'>

     <div className="wrapper">

        <div className="Calculator">
        <Dispaly/>

    
        {buttons.map((btn, i)=>{
          
         return <Button 
         btnClass={btn.buttonClass} 
         label = {btn.label} 
         key={i}
      
         />
        })}
       </div>

      </div>

    </div>
   
   </>
  );
}

export default App;
