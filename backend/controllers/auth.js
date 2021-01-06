//Auth controller
const bcrypt = require('bcrypt')
User = require('../models/User') //asking for a model
passport = require('../config/passport')


//SIGN UP CONTROL-------------------------------------------------------------------
exports.signupProcessUser = async (req,res)=>{
  try {
    const{ email,password,name} = req.body
    if(!email || !password){
      return res.status(403).json({message: "Please provide an email and a password"})
      //validates data being written or not ^
    }
    const user= await User.findOne({
      email,
    })
    if(user){
      return res.status(401).json({message:'user already exists'})
    }
    const salt= bcrypt.genSaltSync(12)//HASHING PASSWORD LENGTH
    const hashPass = bcrypt.hashSync(password,salt)
    const newUser= await User.create({
      email,
      password: hashPass,
      name,
    })

    if(newUser) res.status(201).json(newUser)
    //if the user is geniune,we're good to go
  }catch(e) {
    console.log(e)
    res.status(401).json({message: e})
  }finally {
    console.log('CONTROLLER signupProcessUser')
  }
}

//LOGIN CONTROL-------------------------------------------------------
