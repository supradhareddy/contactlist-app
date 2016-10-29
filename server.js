/*var express = require("express");
var app = express();

var PORT = process.env.PORT || 1000;

app.use(express.static(__dirname + "/public"))

app.get("/", function(req, res){

	res.send("All the best for ur future .............!!!")
})


app.listen(PORT, function(){

	console.log("server is running at port..... " + PORT);
})*/

var express = require("express");
var app = express();

var mongoose = require("mongoose");

var contact = require("./models/contact")

var bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost/contactlist", function(){

	console.log("successfully connect to mongo db");
})

var PORT = process.env.PORT || 1000;

app.use(express.static(__dirname + "/public"))

app.use(bodyParser.json());

app.get("/contactList", function(req, res){

	contact.getContacts(function(err,data){

		if(err){

			throw err;
		}
//console.log(data);
		res.json(data);
	})

});

app.post("/contactList", function(req,res){

	var body = req.body;

	//contact.addContact(body,function(err,data){

		contact.addContact(body, function(err, data){

		if(err){

			throw err;
		}

		res.json(data);
	})
	//console.log(body);
})



app.get("/contactList/:id", function(req,res){

	var id = req.params.id;

	contact.editContactById(id, function(err, data){

		if(err){

			throw err;
		}

		res.json(data);
	})
	//console.log(body);
})

app.put("/contactList/:id", function(req, res){

	var id = req.params.id;
	var body = req.body;

	contact.updateContact(id, body, function(err, data){


		if(err){
			throw err;
		}

		res.json(data);
	})
})

app.delete("/contactList/:id", function(req, res){

	var id = req.params.id;

	contact.deleteContact(id, function(err, data){

		if(err){

			throw err;
		}
		res.json(data);
	})
})


/*var person1 ={
	name:"nikshith",
	email:"nikshu@gmail.com",
	mobile :"9000600963"
}
var person2 ={
	name:"bujji",
	email:"bujji@gmail.com",
	mobile :"9985936988"
}
var person3 ={
	name:"pandu",
	email:"pandu@gmail.com",
	mobile :"9966516643"
}

var contactlist = [person1,person2,person3];

res.send(contactlist);

//$scope.contactlist=contactlist;
})*/

app.post("contactList", function(req, res){

})
app.listen(PORT, function(){

	console.log("server is running at port..... " + PORT);
})
