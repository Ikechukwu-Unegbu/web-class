import React from "react";
import classes from './Form.module.css';

import { useState } from "react";


function Form(){
  const [enteredFullname, setFullname] = useState('');
  const [enteredAge, setAge] = useState('');
  const [enteredCareer, setCareer] = useState('');

  const [fullnameIsValid, setFullnameValid] = useState(true);
  const [ageValid, setAgeValid] = useState(true);

  const fullnameChangeHandler=(event)=>{
    setFullname(event.target.value);
    
  }

  const ageChangeHandler=(event)=>{
    setAge(event.target.value)
  }

  const careerChangeHandler=(event)=>{
    setCareer(event.target.value)
  }

  const ageMouseHandler =(event)=>{
    setAge(event.target.value)
    if(enteredAge.trim().length ===0){
      setAgeValid(false)
      return;
    }
    setAgeValid(true)
  }

  const submitHandler =(event)=>{
    event.preventDefault();
    const userInput ={
      fullname:enteredFullname,
      age:enteredAge,
      career:enteredCareer
    }
    if(enteredFullname.trim().length ===0){
      setFullnameValid(false)
      return;
    }
    setFullnameValid(true)
    console.log(userInput)
  }


  return (
    <div>
      <form onSubmit={submitHandler} className={`${classes.form}`}>
        <input type='text'
                style={{borderColor:!fullnameIsValid?'red':'black'}}
                onChange={fullnameChangeHandler} placeholder='Fullname'/>
        <input type='text'
        
          onChange={ageChangeHandler} placeholder='age'/>
        <input type='text' onChange={careerChangeHandler} placeholder='profession'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form;