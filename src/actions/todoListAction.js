
export const addTodoList = (newTodoItem) => ({
  type: 'ADD_TODO_LIST',
  newTodoItem,
});

export const editTodoList = (editTodoItem) => ({
  type: 'EDIT_TODO_LIST',
  editTodoItem,
});

export const toggleStatus = (index) => ({
  type: 'TOGGLE_STATUS',
  index,
});

export const deleteTodo = (index) => ({
  type: 'DELETE_TODO',
  index,
});

export const filterTodo = (filter) => ({
  type: 'FILTER_TODO',
  filter,
});

