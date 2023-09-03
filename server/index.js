const express =require('express')
const mongoose = require("mongoose")
const cors = require('cors')
const userModel =require('./models/UserModel')


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/crud")
.then(()=>{
    console.log("Database connected");
})
.catch((err)=>{
    console.log(err);
})


app.get('/',(req,res)=>{
    userModel.find({})
    .then(users => res.json(users))
    .catch(err => console.log(err))
})

app.get('/getUser/:id',(req,res)=>{
    const id =req.params.id;
    userModel.findById(id)
    .then(user => res.json(user))
    .catch(err => console.log(err))
})

app.put('/update/:id',(req,res)=>{
    console.log("recieved update request");
    const id =req.params.id;
    userModel.findByIdAndUpdate({_id:id},{name:req.body.name,email:req.body.email,age:req.body.age})
    .then(users => res.json(users))
    .catch(err =>console.log(err))
})

app.delete('/delete/:id',(req,res)=>{
    console.log("recieved delete request")
    const id =req.params.id
    userModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err =>res.json(err))
})
 
app.post("/create", (req, res) => {
  console.log("Received POST request to /create");
  userModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => console.log(err))
});

app.listen(3000,()=>{
    console.log("server is running in 3000")
}) 