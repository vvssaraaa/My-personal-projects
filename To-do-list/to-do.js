const taskInput = document.getElementById('taskInput');
const addTask = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTask.addEventListener('click', ()=>{
    const taskText = taskInput.value.trim();
    if(taskText !== ''){
        const li = document.createElement('li');
        li.innerHTML = `${taskText} <button onclick = "deleteTask"(this)>Delete</button>`
        taskList.appendChild(li);
        taskInput.value = '';
    }
});

function deleteTask(button){
    button.parentElement.remove();
}