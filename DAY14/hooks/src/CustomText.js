import React,{memo} from 'react'

function CustomText() {
    console.log("Özel metin devrede")
  return (
    <div>CustomText</div>
  )
}

export default memo(CustomText)