//business logic
function ToDo(task, subTasks, date, notes) {
  this.task = task;
  this.subTasks = subTasks;
  this.date = date;
  this.notes = notes;
}

ToDo.prototype.taskD = function () {
  return " complete " + this.task + " by " + this.date;
}

//user interface logic
$(document).ready(function() {
  $("#add-task-button").click(function() {
    $(".add-task-id").append('<div class="add-task-div">' +
      '<div class="form-group">'  +
        '<label for="task">Task</label>' +
        '<input type="text" class="form-control task">' +
      '</div>' +

      '<div class="form-group">' +
        '<label for="sub-tasks">Sub tasks</label>' +
        '<input type="text" class="form-control sub-tasks">' +
      '</div>' +

      '<div class="form-group">' +
        '<label for="date">Due date</label>' +
        '<input type="date" class="form-control date">' +
      '</div>' +

      '<div class="form-group">' +
        '<label for="notes">Additional notes</label>' +
        '<input type="text" class="form-control notes">' +
      '</div>' +
    '</div>');
  });

  $("form#new-task").submit(function(event){
    event.preventDefault()

    var inputtedTask = $("input.task").val();
    var inputtedSubTask = $("input.sub-tasks").val();
    var inputtedDate = $("input.date").val();
    var inputtedNotes= $("input.notes").val();

    var newToDoItem = new ToDo(inputtedTask, inputtedSubTask, inputtedDate, inputtedNotes);

    if (inputtedTask.length === 0 || inputtedDate.length === 0){
      return alert("Please fill in a task name and due date")
    }



    $(".add-task-div").each(function() {
      debugger;
      var inputtedTask = $(this).find("input.task").val();
      var inputtedSubTask = $(this).find("input.sub-tasks").val();
      var inputtedDate = $(this).find("input.date").val();
      var inputtedNotes = $(this).find("input.notes").val();

    });



    $("ul#task-list").append("<li class='listItemId'><span class='taskItem'>" +
    newToDoItem.taskD() + "</span><button class='delete'>Done!</button><button class='important'>Change importance status</button> </li>");



    $(".taskItem").last().click(function() {
      $("#show-tasks").show();
      $("#show-tasks h2").text(newToDoItem.task);
      $(".sub-tasks-output").text(newToDoItem.subTasks);
      $(".date-output").text(newToDoItem.date);
      $(".notes-output").text(newToDoItem.notes);
    });

    $(".delete").last().click(function() {
      $(this).closest('li').remove();
    })

    $(".important").last().click(function() {
      $(this).closest('li').toggleClass("important");
    })

    $("input.task").val("");
    $("input.sub-tasks").val("");
    $("input.date").val("");
    $("input.notes").val("");

  })
})
