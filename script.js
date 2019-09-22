var addBtn = document.getElementById('add-btn');
var taskList = document.getElementById('task-list');
var taskInput = document.getElementById('task-to-add');
addBtn.addEventListener('click', addItem);
taskInput.addEventListener('keyup', enterPressed);

function addItem() {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(taskInput.value));
    li.style.cursor = 'pointer';
    taskList.appendChild(li);
    taskInput.value = '';
    li.addEventListener('click', function() {
        this.parentNode.removeChild(this);
    });
}

function enterPressed(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        addBtn.click();
    }
}