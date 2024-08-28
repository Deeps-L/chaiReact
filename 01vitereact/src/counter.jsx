import { useState } from "react";

function Counter (){
// let counter = 5

let[counter, setCounter] = useState(5)
 const addValue = () => {
    console.log("clicked", counter);
    
   if(counter < 20){
    setCounter(counter + 1)
   }
 }

 const decreaseValue = () => {
    console.log("clicked", counter);
    
   if(counter > 0 ){
    setCounter(counter - 1)
   } 
 }

    return(
        <>
        <h1>This is basic counter</h1>
        <p>Counter value is : {counter}</p>
        <button onClick={addValue}>Add</button>
        <br />
        <button onClick={decreaseValue}>Decrease</button>
        </>
    )
}
export default Counter