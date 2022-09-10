import React,{useEffect, useState} from 'react'

function App() {
  const [data,setData]=useState(1);
  const [value,setValue]=useState("");
  useEffect(() => {
    console.log("Sürekli devreye gir");
  })
  useEffect(() => {console.log("Data devreye girme");},[data])
  useEffect(() => {console.log("Value devreye girme");},[value])
  useEffect(() => {console.log("Data veya value devreye girme");},[data,value])
  return (
    <div>
      use Effect
      <input value={data} onChange={(e)=>setData(e.target.value)}/>
      <br/>
      <button onClick={()=>setValue(value+2)}>Value değiştir</button><br/>
      value:{value}<br/>
      data:{data}
    </div>
  )
}

export default App