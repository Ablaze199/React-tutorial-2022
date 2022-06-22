import React, { useState} from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
const [firstName, setFirstName] = useState('')
const [email, setEmail] = useState('')
const [people, setPeople] = useState([]);

  const handlerSubmit =(e) => { 
  e.preventDefault();
  if (firstName && email) {
    const person ={ id: new Date().getTime().toString(),
      firstName, email}
    setPeople(()=>{
    return [...people, person];
    });
    setFirstName('')
    setEmail('')
  } else {
    console.log('empty value')
  }
  console.log(firstName, email);
}
  return <>
  <article>
    <form className='form' onSubmit={handlerSubmit}>
      <div className='form-control'>
        <label htmlFor='firstName'>Name : </label>
        <input type='text' id='firstName' name='firstName' 
        value={firstName}
         onChange={(e)=> setFirstName(e.target.value)}></input>
      </div> 
       <div className='form-control'>
        <label htmlFor='email'>Email : </label>
        <input type='text' id='email' name='email' value={email}
         onChange={(e)=> setEmail(e.target.value)}></input>
      </div>
      <button type='submit'>add person</button>
    </form>
     {people.map((person, index) => {
        const {id, firstName, email} = person;
        return (
        <div className='item' key={id}>
          <h4>{firstName}</h4>
          <p>{email}</p>
        </div>
       )
      })}
  </article>
  </>;
};

export default ControlledInputs;
