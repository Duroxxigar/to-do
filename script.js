var addBtn = document.getElementById('add-btn');
var taskList = document.getElementById('task-list');
var taskInput = document.getElementById('task-to-add');
addBtn.addEventListener('click', addItem);

function addItem() {
    var li = document.createElement('li')
    li.appendChild(document.createTextNode(taskInput.value));
    taskList.appendChild(li)
    taskInput.value = '';
}