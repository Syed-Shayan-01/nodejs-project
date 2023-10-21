const todos = [];

const addTodo = (name, money) => {
    todos.push({ name, done: false })
}

const deleteTodo = () =>{
    todos.splice(index, 1);
    return true;
}

const markAsRead = () => {
     todos[index].done = true; 
     return true;
}


const getAllTodos = () =>{
    return todos;   
}


module.exports = {
    addTodo, deleteTodo, markAsRead, getAllTodos,
}