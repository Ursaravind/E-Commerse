const mongoose = require('mongoose')
const RegisterUser = new mongoose.Schema(
    {
        username:{type:String,required:true},
        email:{type:String,required:true, unique:true},
        password:{type:String,required:true, unique:true},
        confirmpassword:{type:String,required:true},
        profilepic:{type:String,default:""}
    }
)
module.exports = mongoose.model('RegisterUser',RegisterUser)
