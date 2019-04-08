const passport = require("passport");
const { db } = require('../db/index.js')

module.exports = () => {
  passport.serializeUser((user, done) => {
    console.log("you hit serializeUser");
    done(null, user.email);
  });

  passport.deserializeUser((email, done) => {
    db.one('SELECT * FROM clients WHERE email = ${email}', {
      email: email
    })
      .then(user => {
        console.log(user, "user")
        done(null, user);
      })
      .catch(err => {
        done(err, null);
      });
  });
};
