const User = require("./models/User")
const passport = require("passport")
const bcrypt = require("bcrypt")

passport.use
new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
  (email, password, done) => {
    User.findOne({ email })
      .then(user => {
        if (!user) {
          done(null, false, { message: 'Incorrect email' })
          return
        }
        if (!bcrypt.compareSync(password, user.password)) {
          done(null, false, { message: 'Incorrect password' })
          return
        }
        done(null, user)
      })
      .catch(err => done(err))
  }
)

