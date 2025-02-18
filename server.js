const express= require('express');
const app=express();
app.use(express.json());
app.post('/signup',(req,res) => {
    const{userName,email,password,dob}=req.body;
    if(!userName || !email || !password ||!dob){
        res.status(400).json({message:"All fields are required"});
    }
    if(password.length()<8 || password.length()>16){
        res.status(400).json({message: "Password length should be greater than 8 or less than or equal to 16"});
    }
    if(!userName){
        res.status(400).json({message:"Username cannot be empty"})
    }
    if(!email){
        res.status(400).json({message:"Email cannot be empty"})
    }
    if(!/\S+@\S\,\S+/.test(email)){
        res.status(400).json({message:"Invalid Email"})
    }
    if(userName && email && password && dob){
        res.status(201).json({message: "User created"})
    }
});
app.listen(3000, ()=> {
   console.log("Server is running on http//:localhost:3000");
});