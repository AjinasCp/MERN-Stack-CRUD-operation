import React ,{useState,useEffect}from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../App.css'

 const Update = ()=> {
    const {id} = useParams()
    const [name,setName] = useState('');
    const [email,setEmail] = useState('')
    const [age,setAge] = useState('')
    const [place,setPlace] = useState('')
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:3000/getUser/'+id)
        .then(result => {const userData=result.data
            
           setName(userData.name)
           setEmail(userData.email) 
           setAge(userData.age)
           setPlace(userData.place)

        })
        .catch(err => console.log(err))
      }, [id])

      const handleUpdate = async (e) => {  
        e.preventDefault();
    
         
          axios.put("http://localhost:3000/update/"+id, { name, email, age ,place })
          .then(result =>{
            console.log("axioossss updatee",result)
            navigate('/')
          })
          .catch(err => console.log(err))
          
      }
 
  return (
    <div className='update-container'> 
        <form onSubmit={handleUpdate}>
            <h2>EDIT USER</h2>
            <div className='form-container'>
                <label>Name</label>
            <input type='text' placeholder='enter name...' className='form-control' value={name} required="true" onChange={(e)=> setName(e.target.value)}/>
        
                <label>Email</label>
            <input type='email' placeholder='enter email...' className='form-control' value={email} required="true" onChange={(e)=> setEmail(e.target.value)}/>
            
                <label>Age</label>
            <input type='text' placeholder='your age' className='form-control' value={age} required="true" onChange={(e)=> setAge(e.target.value)}/>
            
            <label>Place</label>
            <input type='text' placeholder='your Place' className='form-control' value={place}  required="true" onChange={(e)=> setPlace(e.target.value)}/>


            <button className='submit-btn' type='submit'>UPDATE</button>

            </div>
        </form>
    </div> 
  )
}

export default Update 