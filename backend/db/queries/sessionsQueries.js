function logoutUser(req, res, next) {
  req.logout();
  res.status(200).send("log out success");
}

function loginUser(req, res) {
  req.session.currentUser = req.user;
  res.json(req.user);
}

function isLoggedIn(req, res) {
  console.log(req.user);
  if (req.user) {
    res.json(req.user);
  } else {
    res.json({ email: null });
  }
}

module.exports = {
  logoutUser,
  loginUser,
  isLoggedIn
};
