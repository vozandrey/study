document.addEventListener("DOMContentLoaded", function(event) {
    let btnsDeleteTodo = document.querySelectorAll('.btn-delete-todo');

    btnsDeleteTodo.forEach(function (value, index) {
        value[index].addEventListener('click', deleteTodo);
    });

    function deleteTodo(){
        console.log('click');
        
    }
    
});