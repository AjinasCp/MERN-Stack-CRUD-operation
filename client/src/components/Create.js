import '../App.css'
import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'



const Create = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [place, setPlace] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) => {  
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/create", { name, email, age ,place });
      console.log("Result", response.data)
      navigate('/')
    } catch (error) {
      console.error("Axios error", error); 
    }
  };

  return (
    <div className='create-container'>
      <form onSubmit={handleSubmit}>
        <h4>ADD USER</h4>
        <div className='form-container'>
          <label>Name</label>
          <input type='text' placeholder='enter name...' className='form-control' onChange={(e) => setName(e.target.value)} />

          <label>Email</label>
          <input type='email' placeholder='enter email...' className='form-control' onChange={(e) => setEmail(e.target.value)} />

          <label>Age</label>
          <input type='text' placeholder='your age' className='form-control' onChange={(e) => setAge(e.target.value)} />
          
          
          <label>Place</label>
          <input type='text' placeholder='your Place' className='form-control' onChange={(e) => setPlace(e.target.value)} />

          
          <button className='submit-btn' type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default Create;
