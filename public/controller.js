/*
 ----------use ti get data static......................

var app = angular.module("myApp",[]);

app.controller("myController", ["$scope", "$http", function($scope, $http){

var person1 ={
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

$scope.contactlist=contactlist;

}])*/

var app = angular.module("myApp",[]);

app.controller("myController", ["$scope", "$http", function($scope, $http){

	var refresh = function(){

$http.get("/contactList").success(function(response){

$scope.contactList=response;

$scope.contact = "";
});
}

refresh();
$scope.addContact = function(){

	$http.post("/contactList", $scope.contact).success(function(response){

		console.log(response);
		refresh();
	})
}


$scope.editContact = function(id){

	console.log(id);

	$http.get("/contactList/"+id).success(function(response){

		$scope.contact = response;

		console.log(response);
		
	})
}

$scope.updateContact = function(){

	$http.put("/contactList", $scope.contact).success(function(response){
	refresh();

	})
}

$scope.deleteContact = function(id){

	$http.delete("/contactList/"+id).success(function(response){

	//;$scope.contact = response;
	refresh();

	})
}
}]);