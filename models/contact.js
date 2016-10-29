var mongoose = require("mongoose");

var contactSchema = mongoose.Schema({

name : {

	type : String,
	required : true
},

email:{
	type : String,
	required :true
},
mobile:{
	type : String,
	required :true
}

});

var Contact = module.exports = mongoose.model("contact", contactSchema);

module.exports.getContacts = function(callbacK){

	//function getContacts(callbacK){

	Contact.find(callbacK);
}

module.exports.addContact = function(contact,callbacK){

	Contact.create(contact, callbacK)

	/*var ctc = new contact(contact);

	ctc.save(contact, callback);*/
}

module.exports.deleteContact = function(id,callbacK){

	
	Contact.remove(id, callbacK)

	/*var ctc = new contact(contact);

	ctc.save(contact, callback);*/
}

module.exports.editContactById = function(id, callback){

	var query = {_id : id}

Contact.findById(query, callback);
}

module.exports.updateContact = function( id, contact, callback){

	Contact.update({_id:id},
		{
			$set:
			{
				name:contact.name,
				email:contact.email, 
				mobile:contact.mobile
			}},callback)
}

module.exports.deleteContact = function(id, callback){

	Contact.remove({_id:id},callback)
}
