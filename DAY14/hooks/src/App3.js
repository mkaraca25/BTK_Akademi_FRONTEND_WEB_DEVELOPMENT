import React, { useState } from 'react'
import CustomText from './CustomText'

function App() {
  const [text,setText]=useState("")
  return (
    <div>
      memo Hooks<br/>
      <input type="text" value={text} onChange={(e)=>{setText(e.target.value);}} />
      <CustomText/>
    </div>
  )
}

export default App