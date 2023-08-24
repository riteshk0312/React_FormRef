import React from 'react'
import {useRef} from 'react'

const Myform1 = () => {

    const nameRef= useRef();
    const emailRef=useRef();

    const handleForm=(e)=>{
        e.preventDefault();
        console.log("Input name is:",nameRef.current.value);
        console.log("Input name is:",emailRef.current.value);
    }

  return (
    <>
    <h1>Form using useRef Hook</h1>
    <form onSubmit={handleForm}>
        <label htmlFor='name'> Name:   </label>
        <input type='text' id='name' ref={nameRef} placeholder='Enter first name'/> <br></br><br></br>

        <label htmlFor='mail'> Email:   </label>
        <input type='text' id='mail' ref={emailRef} placeholder='Enter Email'/><br></br><br></br>

        <button type='submit'>Submit</button>

    </form>
    </>
  )
}

export default Myform1