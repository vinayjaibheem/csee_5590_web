//We have to define our application first
angular.module("toDoList", [])

/*Controller is like a brain of our app. It contain models and logics required
  to operate our to do list.
*/
  .controller("toDoListCtrl", ['$scope',
    function($scope) {
      //A model holding tasks
      $scope.taskList = [
        {done: true,
        task: 'Learn Java'
      },
        {
          done: false,
          task: 'Attend Meeting'
        },
        {
          done: false,
          task: 'Call Sam'
        },
        {
        done: false,
        task: 'Buy Vegetables'
      }
      ];

    //Function for adding task to the task list
      $scope.addTask = function(task) {
        
        //I'm pushing a new task to the task list
        $scope.taskList.push({
          done: false,
          task: task
        });
      };
 
    }
  ]);