import React, { useMemo, useState } from 'react'
import CustomText from './CustomText'

function App() {
  const [text,setText]=useState("")
  const [data,setData]=useState("Melik")
  const memoData=useMemo(()=>{
    return data
  },[text])
  return (
    <div>
      memo Hooks<br/>
      <input type="text" value={text} onChange={(e)=>{setText(e.target.value);}} />
      text Değeri :{text}
      <hr/>
      <div>
        <button onClick={()=>setData("e"+data)}>Data Güncelle</button>
        <br/>
        useSate data değeri:{data}
      </div>
      <div>
        memo değeri:{memoData}
      </div>

    </div>
  )
}

export default App