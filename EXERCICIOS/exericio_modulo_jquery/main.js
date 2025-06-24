$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    var task = $("#todoInput").val();
    var newTask = $("<li>" + task + "</li>");
    $("#todoList").append(newTask);
    $("#todoInput").val("");
  });
  $("#todoList").on("click", "li", function () {
    $(this).addClass("completed");
  });
});
