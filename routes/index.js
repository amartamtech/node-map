var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var userlist = mongoose.model('userlist');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/getstateusercount', function(req, res) {


userlist.aggregate([
      {"$group" : 
        {"_id":"$state",
         "num":{$sum:1}
        }}
      ], function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
       

       var fillKeys = {'0':'defaultFill','1':'A','2':'B','3':'C','4':'D','5':'E'};
        var responseData = {};
        result.forEach(function(e, i){

          var count = e.num;

          var ave = Math.round((count/10));
          var fkey = fillKeys[ave];
          responseData[e._id] = {"UserCount":count,  "fillKey": fkey};
         // console.log(ave);
          

        });

        //console.log(responseData);
        res.json(responseData);
    });


/*
for (var i = 1; i <= 6; i++) {
var state = "ND";
var username = 'Amartam_'+state+'_'+i;

var user = new userlist();
var age = Math.floor(Math.random() * 50) + 1;
user.name = username;
user.country = "USA";
user.state = state;
user.age = age;
user.addr = { lat : '47.0000', long: '100.0000'};
  
//console.log(user);

user.save(function(err, user){
    if(err){ return next(err); }

    //res.json(user);
  });

}
res.json('ok');*/

});




module.exports = router;

