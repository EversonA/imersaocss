var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')')

        var linkText = document.createTextNode(' Excluir');

        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);

    }
}

renderTodos();

if (todos.length >= 30 && todos.length <= 40) {
    alert("seloco kkkkkk muita coisa vei");
}

if (todos.length >= 40 && todos.length <= 49) {
    alert("Com 50 itens a lista é deletada...");
}

if (todos.length >= 50) {
    localStorage.clear();
}

console.log(todos.length);

function contator() {

    if (todos.length === 5) {
        alert("Nunca testei ate onde isso vai");
    }
    if (todos.length === 10) {
        alert("Ta bem feio, eu sei");
    }
    if (todos.length === 15) {
        alert("We are looking for graphic designer");
    }
    if (todos.length === 20) {
        var video = document.createElement('video');

        video.src = 'audio/bota.mp4';
        video.autoplay = true;
        video.width= "1360"; 
        video.height= "986";
        var videovazio = document.getElementById("video");
        document.body.insertBefore(video, videovazio);
    }
    console.log(todos.length);
}

function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
    contator();
}

buttonElement.onclick = addTodo;



function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage()
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

const inputEle = document.getElementById('valor');
inputEle.addEventListener('keyup', function (e) {
    var key = e.which || e.keyCode;
    if (key == 13) { // codigo da tecla enter
        addTodo()
    }
});