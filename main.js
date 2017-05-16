
var module = angular.module("myApp",[]);
module.controller("MainCtrl", Main);

function Main(){
	this.task =["do homework",
				"gym"
	];
	this.editMode = false;

	this.addNewTask = function(){
		this.task.push(this.newTask);
		this.newTask = "";
	}
	this.removeTask = function(index){
		this.task.splice(index,1);
	}
	this.editTask = function(){
		this.editMode = !this.editMode;
	}
	this.doneTask = function(){
		this.editMode = !this.editMode;
	}
}