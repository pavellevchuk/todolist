const initialState = {
    todos: [],
    id: null
}

const setTodos = (userId) => {
    let todos = JSON.parse(localStorage.getItem('todos')).find(todos => todos.id === userId);
    if(!todos){
        let todosCopy = [...JSON.parse(localStorage.getItem('todos'))],
        newUserTodos = {todos: [], id: userId}
        todosCopy.push(newUserTodos);
        localStorage.setItem('todos', JSON.stringify(todosCopy));
        return newUserTodos;
    }
    return todos;
}

const addTodo = (state, todo) => {
    let allTodosCopy = [...JSON.parse(localStorage.getItem('todos'))];
    let todos = allTodosCopy.find((todos) => state.id === todos.id);
    let index = allTodosCopy.findIndex((todos) => state.id === todos.id);

    todos.todos.push({id: state.todos.length, text: todo.text, completed:false});

    allTodosCopy.splice(index, 1);
    allTodosCopy.push(todos);
    localStorage.setItem('todos', JSON.stringify(allTodosCopy));
    return todos.todos;
}

const changeTodo = (state, todo) => {
    let allTodosCopy = [...JSON.parse(localStorage.getItem('todos'))];
    let todos = allTodosCopy.find((todos) => state.id === todos.id);
    let index = allTodosCopy.findIndex((todos) => state.id === todos.id);

    let oldTodo = todos.todos.find(currentTodo => currentTodo.id === todo.id);
    let oldTodoIndex = todos.todos.findIndex(currentTodo => currentTodo.id === todo.id);
    oldTodo.text = todo.text;
    todos.todos[oldTodoIndex] = oldTodo;

    allTodosCopy.splice(index, 1);
    allTodosCopy.push(todos);
    localStorage.setItem('todos', JSON.stringify(allTodosCopy));
    return todos.todos;
}

const deleteTodo = (state, todo) =>{
    let allTodosCopy = [...JSON.parse(localStorage.getItem('todos'))];
    let todos = allTodosCopy.find((todos) => state.id === todos.id);
    let index = allTodosCopy.findIndex((todos) => state.id === todos.id);

    todos.todos = todos.todos.filter(currentTodo => currentTodo.id !== todo.id);

    allTodosCopy.splice(index, 1);
    allTodosCopy.push(todos);
    localStorage.setItem('todos', JSON.stringify(allTodosCopy));
    return todos.todos;
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: addTodo(state, action)
            }
        case 'CHANGE_TODO':
            return {
                ...state,
                todos: changeTodo(state, action)
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todos: deleteTodo(state, action)
            }
        case 'SET_TODOS':
            return setTodos(action.user.id);
        default:
            return state
    }
}

export default todoReducer