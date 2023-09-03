import React, { useEffect, useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import axios from 'axios'


const User = () => {
const [users,setUsers]=useState([])

useEffect(()=>{
  axios.get('http://localhost:3000')
  .then(result => setUsers(result.data))
  .catch(err => console.log(err))

},[])


const handleDelete =(id)=>{
axios.delete('http://localhost:3000/delete/'+id)
.then(res => {console.log(res)
window.location.reload()})
.catch(err =>console.log(err))
}
  return (
    
        <div className='table-container'>
          <Link to="/create" className='user-link'><button className='add-btn'>ADD USER</button></Link>
            <div className='main-container'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>AGE</th>
                        <th>PLACE</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    users.map((user)=>{
                    return <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>{user.place}</td>
                            
                            <td>
                              <Link to={`/update/${user._id}`}>
                            <button className='edit-btn'>EDIT</button>
                            </Link>
                            <button className='delete-btn' onClick={(e)=>handleDelete(user._id)}>DELETE</button></td>
                        </tr>
                    })
                  }
                </tbody>
            </table>
            </div>
        </div>



  
  )
}

export default User