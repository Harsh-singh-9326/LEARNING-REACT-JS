import React from 'react'

const register = () => {
    function handleregister(e)  {
      console.log("hello world")
    }
     
  return (
    <div>
      <Input type ="email" placeholder = "enter email"></Input>
      <button onClick={handleregister}>submit </button>
    </div>
  )
}

export default register
