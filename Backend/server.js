const express = require('express')
const app = express()
const mongoose = require('mongoose')
const jwt = require("jsonwebtoken")
const RegisterUser = require('./models')
const middleware = require('./middleware')
const cors = require("cors")
const bcrypt = require("bcrypt")

// aravindkumartirunagiri03
// 9YMp6FM7utBDC6Pi
mongoose.connect("mongodb+srv://aravindkumartirunagiri03:9YMp6FM7utBDC6Pi@cluster0.up5pq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(
    ()=>console.log("db connectede")
)
app.use(express.json())
app.use(cors({
    origin:"*"
}))

app.post("/register",async (req,res)=>{
    try{
        const {username,email,password,confirmpassword} = req.body;
        let exist = await RegisterUser.findOne({email});
        if(exist){
            return res.status(400).send("User already existed")
        }
        if(password!==confirmpassword){
            return res.status(400).send("Passwords are not matching")
        }

        const hashedPassword = await bcrypt.hash(password,10) //salt rounds

        const newUser = new RegisterUser ({
            username,
            email,
            password:hashedPassword,
            confirmpassword:hashedPassword
        });
        await newUser.save();
        res.status(200).send("Registered Successfully")
    }
    catch(err){
        console.log(err);
        return res.status(500).send("internal server error");

    }
});
app.post("/login",async (req,res)=>{
    try{
        const {email,password} = req.body;
        let exist = await RegisterUser.findOne({email});
        if(!exist){
            return res.status(400).send("user not Found")

        }
        const isMatch = await bcrypt.compare(password,exist.password)
        if(!isMatch){
            return res.status(400).send("Inavalid Password ,Enter a valid password")
        }
        // 
        let payload = {
            user:{
                id:exist.id
            }
        }
        jwt.sign(payload,'jwtSecret',{expiresIn:'1h'},(err,token)=>{
            if(err) throw err;
            return res.json({token})
        })

    }
    catch(err){
        console.log(err);
        return res.status(500).send("server errorr");
    }
})

app.get("/myprofile",middleware,async(req,res)=>{
    try{
        let exist = await RegisterUser.findById(req.user.id)
        if(!exist){
            return res.status(400).send("User not Found")
        }
        res.json(exist);
    }
    catch(err){
        console.log(err)
        return res.status(500).send("server error")
    }
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});