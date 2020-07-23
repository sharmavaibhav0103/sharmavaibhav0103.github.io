
//declaring constants
const form = document.querySelector('.todo-form');
const todo = document.querySelector('.todo-text');
const list = document.querySelector('.list-container');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let p = document.createElement('p');
    let node = document.createElement('li');
    p.appendChild(document.createTextNode(todo.value));
    node.appendChild(p);
    node.appendChild(document.createElement('i')).className = "fas fa-check";
    node.appendChild(document.createElement('i')).className = "fas fa-trash";
    list.appendChild(node);
    todo.value = '';

    check();
    removeItem();
});

function check() {
    let checked = document.querySelectorAll('.fa-check');
    for(var i = 0; i < checked.length; i++) {
        checked[i].addEventListener('click', (e) => {
            e.target.style.display = 'none';
            let parent = e.target.parentElement.style;
            parent.backgroundColor = '#191919';
            parent.color = 'black';
            parent.textDecoration = 'line-through';
        })
    }
}

function removeItem(){
    let trash = document.querySelectorAll('.fa-trash');
    for(var i=0; i<trash.length; i++){
        trash[i].addEventListener('click', (e) => {
            let parent = e.target.parentElement;
            parent.className = 'animate';
            parent.addEventListener('transitionend',(e) => {
                e.target.style.display = 'none';
            });
        })  
    }
}
