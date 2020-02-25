var express = require('express');
var bodyParser=require('body-parser');
var router = express.Router();
var Contact = require("../models/contact");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//post route for contact form
router.post("/submit-form", function(req,res){
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var newContact = {name:name, email:email, message:message};

  Contact.create(newContact, function(err, newlyCreated){
    if(err){
      console.log(err);
    }else{
      res.redirect("/#contact");
    }
  })
});

module.exports = router;
