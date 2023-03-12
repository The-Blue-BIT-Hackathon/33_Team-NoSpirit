const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const email    = req.body.email;
  const pwd      = req.body.pwd;
  const fullName = req.body.fullName;
  const bio      = req.body.bio;
  const appjob   = req.body.appjob;
  const status   = req.body.status;

  const newUser = new User({
    email   ,
    pwd     ,
    fullName,
    bio     ,
    appjob  ,
    status  
  });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;