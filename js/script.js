function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value.trim();

  if (task === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.textContent = task;

  document.getElementById("taskList").appendChild(li);
  input.value = ""; //clear input box
}
