var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

app.get('/people/:cnt',function(req,res) {

  var people = [];
  var no = req.params.cnt;
  var i = 0;

  _.times(no,function(){

    var fname = faker.name.firstName();
    var lname = faker.name.lastName();
    var address = faker.address.streetAddress();
    var data = {'id':i,'fname':fname,'lname':lname,
        'address':address};
    i++;
    people.push(data);

  });

  res.send(people);

});



app.get('/people', function(req,res) {

  var people = [];

  for(var i =0 ; i < 10; i++) {
    var fname = faker.name.firstName();
    var lname = faker.name.lastName();
    var data = {'id':i,'fname':fname,'lname':lname};
    console.log('first name :'+fname+" "+lname);
    people.push(data);
  }

  res.send(people);

});


app.listen(3000,function() {
  console.log('server running on port 3000');
});
