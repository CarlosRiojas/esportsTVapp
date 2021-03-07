const User = require("./models/User")
const passport = require("passport")
const bcrypt = require("bcrypt")

passport.use(new LocalStrategy({
  usernameField: 'email',
  password: 'password'
},
  (email, password, done) => {
    User.findOne({ email })
      .then(foundUser => {
        if (!foundUser) {
          done(null, false, { message: 'Incorrect email' })
          return
        }
        if (!bcrypt.compareSync(password, foundUser.password)) {
          done(null, false, { message: 'Incorrect password' })
          return
        }
        done(null, foundUser)
      })
      .catch(err => done(err))
  }
))
