(function() {
    var taskForm = {
        bindings: {
            list: "<",

        },
        templateUrl: "partials/taskForm.html",
        controller: function(addNewItem) {
            vm.itemArray.push({ addNewItem: addNewItem }); //going to be in Taskform
            vm.addNewItem = "";
            "FormController"
        }
    }








    angular
        .module("App").component("taskForm", taskForm);


})();