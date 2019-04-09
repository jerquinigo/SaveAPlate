const passport = require("passport");
const { db } = require('../db/index.js')

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.email);
  });

  passport.deserializeUser((email, done) => {
    db.one('SELECT * FROM users WHERE email = ${email}', {
      email: email
    })
      .then(user => {
        done(null, {email:user.email, id: user.id, address_field:user.address_field, name: user.name, type:user.type});
      })
      .catch(err => {
        done(err, null);
      });
  });
};
