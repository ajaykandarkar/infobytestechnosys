import React from 'react'
import { useRef,useEffect,useState } from 'react'
export const Form = () => {

const inputRefs = useRef([]);
const [currentInput, setCurrentInput] = useState(0);

useEffect(()=>{
  inputRefs.current[0].focus();
},[])

const handleNext = () =>{
  const nextInput = (currentInput + 1) % inputRefs.current.length;
 if (nextInput < inputRefs.current.length) {
  setCurrentInput(nextInput);
  inputRefs.current[nextInput].focus();
}
}

const fieldData = [{
  id : "name",
  name : "name",
  placeholder : "Enter Name",
  type : "text",
  label : "Name"
},
{
  id : "email",
  name : "email",
  placeholder : "Enter Email",
  type : "email",
  label : "Email"
},
{
  id : "age",
  name : "age",
  placeholder : "Enter age",
  type : "number",
  label : "Age"
},
{
  id : "phone",
  name : "phone",
  placeholder : "Enter phone",
  type : "number",
  label : "Phone"
},
{
  id : "adress",
  name : "adress",
  placeholder : "Enter adress",
  type : "text",
  label : "adress"
}]

  return (
    <>
      <form className='container w-50 border p-3 mt-5 shadow-lg'>
      <button className='btn btn-primary mb-2' type='button' onClick={handleNext}> Next</button>
        {
          fieldData.map((field, index) => (
            <div className="mb-3" key={index}>
              <label htmlFor={field.id} class="form-label">{field.label}</label>
              <input
                type={field.type}
                className="form-control"
                placeholder={field.placeholder}
                id={field.id}
                ref={(el) => (inputRefs.current[index] = el)}
              />
            </div>
          ))
        }
      </form>
    </>
  )
}
