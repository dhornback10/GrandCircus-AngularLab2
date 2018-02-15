(function() {
    var taskForm = {
        templateUrl: "partials/taskForm.html",
        controller: function() {
        	var $ctrl = this;
            $ctrl.todoList = [];
            $ctrl.addItem = function(item){
            	$ctrl.todoList.push(item);
            	console.log(item);
            	$ctrl.item = "";
            }


        }
    }





    angular
        .module("App").component("taskForm", taskForm);


})();