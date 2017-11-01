var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

let mongoose = require('mongoose');
let User = mongoose.model('User');

router.get('/API/users/', (req,res,next) => {
  User.find((err,users) => { // callback function to handle errors and convert the users to JSON
    if (err) { 
      return next(err); // give the error to next middleware callback that can handle this
    }
    res.json(users);
  })
})

router.post('/API/users/', (req,res,next) => {
  let user = new User(req.body);
  User.save((err,post) => { 
    if (err) { 
      return next(err); // give the error to next middleware callback that can handle this
    }
    res.json(user);
  })
})

module.exports = router;

