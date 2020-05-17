document.addEventListener("DOMContentLoaded", function(event) {
    let btnsDeleteTodo = document.querySelectorAll('.btn-delete-todo');

    for (let i = 0; i < btnsDeleteTodo.length; i++) {
        btnsDeleteTodo[i].addEventListener('click', deleteTodo);
    }

    function deleteTodo(event){
        let todoId = event.target.dataset.todoId;
        let todoBlocks = document.querySelectorAll('.todo');
        let todosList = document.querySelector('.todos-list');
        console.log(todoId);

        fetch('/delete-todo', {
            method: 'POST',
            body: JSON.stringify({ todo: todoId }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(function (res) {
            return res.text();
        })
        .then(function (body) {
            return body;
        });
        for (let i = 0; i < todoBlocks.length; i++) {
            (todoBlocks[i].dataset == todoId) ? todoBlocks[i].splice(i, 1) : '';
            console.log(todoBlocks[i]);
        }
        //todosList.insertAdjacentHTML += todoBlocks[i]
        
    }
    
});