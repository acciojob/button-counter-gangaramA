
import React, { useState } from "react"

function App() {

  const[count,setCount]=useState(0);

  const onAdd=()=>{
    setCount(count+1)
  }

  return (
    
    <reactFragment>
      <p>Button clicked {count} times</p>
      <button onClick={onAdd}>Click Me</button>
    </reactFragment>
    
  )
}
