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
exports.loginProcess = async(req,res,next)=> {
  passport.authenticate('local',(err, failure, failureDetails)=>{
    if(err){
      return res.status(500).json({message:err})
    }
    if(!user){
      return res.status(401).json({message: 'no user with that credentials'})
    }
    req.login(user, (err)=>{
      if(err){
        return res.status(500).json({message: err})
      }
      user.password = null
      res.status(200).json(user)
    })
  })(req,res,next)
}

    //---logout---
exports.logout =(req,res)=>{
  req.session.destroy()
  req.logout()
  res.status(200).json({message: 'logged out'})
}


//VIEW PROFILE-----------------------------

exports.profileView = async (req,res)=>{
  try{
    const id = req.session.passport.user
    const user = await.User.findById(id)
    res.send('profile',user)
  }catch(e){
    console.error(e)
    res.status(401).json({message:e})
  }
}

//EDIT PROFILE------------------------------

export.editProfile= async(req,res)=> {
  try {
    //traemos la info del form
    const {email,password,name} = req.body
    //obtenemos el USER ID
    const userId =req.session.passport.user

    //actualizamos el email
    if (email){
      const user = await.User.findByIdAndUpdate(
        userId,
        {
          email,
        },
        {
          new:true
        }
      )
      res.status(202).json(user)
    }

    //Actualizamos el nombre
    if(name){
      const user = await User.findByIdAndUpdate(
        userId,
        {
          name: name,
        },
        {
          new:true,
        }
      )
      res.status(202).json(user)
    }

//Update PASSWORD
if(password){
  const salt = bcrypt.genSaltSync(12)
  const hashPass = bcrypt.hashSync(password,salt)
  const user = await.User.findByIdAndUpdate(
    userId,
    {
      password: hashPass,
    },
    {
      new:true,
    }
  )
  res.status(202).json(user)
  }
}catch (e){
  console.log(e.message)
  res.status(500).json({message: e.message})
} finally {
  console.log('CONTROLLER Route edit')
  }
}

//DELETE profile

exports.deleteProfile = async (req,res) => {
  const userId = req.session.passport.user
  const user = await User.findById(userId)
  let userDeleted = await User.deleteOne({
    _id:userId,
  })
  res.status(200).json({message:'Profile deleted'})
}

exports.currentUser = (req,res) => {
  res.jsaon(req.user || null)
}
