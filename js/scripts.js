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
  $("form#new-task").submit(function(event){
    event.preventDefault()

    var inputtedTask = $("input#task").val();
    var inputtedSubTask = $("input#sub-tasks").val();
    var inputtedDate = $("input#date").val();
    var inputtedNotes= $("input#notes").val();

    if (inputtedTask.length === 0 || inputtedSubTask.length === 0 || inputtedDate.length === 0){
      return alert("Please fill in all of the fields")
    }

    var newToDoItem = new ToDo(inputtedTask, inputtedSubTask, inputtedDate, inputtedNotes);

    $("ul#task-list").append("<li class='listItemId'><span class='taskItem'>" +
  newToDoItem.taskD() + "</span><button class='delete'>Done!</button><button class='important'>Mark as Important!</button> </li>");

    $(".taskItem").last().click(function() {
      $("#show-tasks").show();
      $("#show-tasks h2").text(newToDoItem.task);
      $(".sub-tasks").text(newToDoItem.subTasks);
      $(".date").text(newToDoItem.date);
      $(".notes").text(newToDoItem.notes);
    });

    $(".delete").last().click(function() {
      $(this).closest('li').remove();
    })

    $(".important").last().click(function() {
      $(this).closest('li').addClass("important");
    })

    $("input#task").val("");
    $("input#sub-tasks").val("");
    $("input#date").val("");
    $("input#notes").val("");

  })
})
