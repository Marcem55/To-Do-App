let todoId = 1 // genero id para cada To Do

export const addTodo = (todo) => {
    return {
        type: 'AddTodo',
        payload: {
            ...todo,
            status: 'To Do',
            id: todoId ++
        }
    }
};

export const removeTodo = (id) => {
    return {
        type: 'RemoveTodo',
        payload: id
    }
}

export const toInProgress = (id) => {
    return {
        type: 'ToInProgress',
        payload: id
    }
};

export const toDone = (id) => {
    return {
        type: 'ToDone',
        payload: id
    }
};