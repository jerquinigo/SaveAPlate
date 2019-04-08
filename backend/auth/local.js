const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const init = require("./passport");
const helpers = require("./helpers");
const { db } = require('../db/index.js')
const options = {usernameField:"email", passwordField:"password_digest"}



passport.use(
  new LocalStrategy(options,(email, password_digest, done) => {
    db.one("SELECT * FROM clients WHERE email = ${email}", {
      email: email
    })
      .then(user => {
        if (!helpers.comparePass(password_digest, user.password_digest)) {
          return done(null, false);
        } else {
          // console.log(user, "this is user");
          return done(null, user);
        }
      })
      .catch(err => {
        console.log('500 ERROR??', err)
        return done(err);
      });
  })
);

init();

module.exports = passport;
