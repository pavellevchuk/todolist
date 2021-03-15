export const addTodo = text => ({
    type: 'ADD_TODO',
    text
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const changeTodo = todo => ({
    type: 'CHANGE_TODO',
    text: todo.text,
    id: todo.id
})

export const deleteTodo = id => ({
    type: 'DELETE_TODO',
    id
})

export const setTodos = user => ({
    type: 'SET_TODOS',
    user
})
