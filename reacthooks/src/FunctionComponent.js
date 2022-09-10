import React,{useEffect, useState} from 'react'

//useState
/*const  FunctionComponent = () => {
  const [counter,setCounter]=useState(0);
  const increase =()=>{
    setCounter(counter+1);
  }
  
  return (
    <div className="box">
        
        <h2>FunctionComponent</h2>
        <p>Counter : {counter}</p>
        <button onClick={()=>increase()}>Increase</button>

    </div>
  )
}*/

//useEffect
const  FunctionComponent = () => {
    const [counter,setCounter]=useState(0);
    const [counter1,setCounter1]=useState(0);
    const [timer,setTimer]=useState(0);
    useEffect(() => {
      console.log("useEffect worked");
    },[counter,counter1])
    useEffect(() => {
      const myTimer=setInterval(() =>{
        setTimer(timer=>timer+1)
      },1000)
      return () =>clearInterval(myTimer)
    },[])
    /*useEffect(() => {
      console.log("Timer :",timer);}
    )*/
    const increase =()=>{
      setCounter(counter+1);
    }
    
    return (
      <div className="box">
          
          <h2>FunctionComponent</h2>
          <p>Counter : {counter}</p>
          <p>Counter1 : {counter1}</p>
          <button onClick={()=>increase()}>Increase</button>
          <button onClick={()=>setCounter1(counter1+1)}>Increase Counter 1</button>

      </div>
    )
}

export default FunctionComponent