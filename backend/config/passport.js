const User = require('../models/User');
const LocalStrategy = require('passport-local').Strategy
const passport = require('passport');
const bcrypt = require('bcrypt')


//localStrategy

passport.use(
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
        },
        async (email, password, done) => {
            const user = await User.findOne({ email })
            if (!user) {
                return done(null, false, { errorMessage: 'Incorrect Email' })
            }
            if (!bcrypt.compareSync(password, user.password)) {
                return done(null, false, { errorMessage: 'Incorrect Password' })
            }

            done(null, user)
        }
    )
);





passport.serializeUser((user, callBack) => {
    callBack(null, user._id);
});


passport.deserializeUser(async (id, callBack) => {
    const user = await User.findById(id);
    user.password = null;
    callBack(null, user);
});

module.exports = passport;
