
let stateDefault = {
  list: [],
  filter: 'all',
}

const todoListReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'ADD_TODO_LIST':
      return {
        ...state,
        list: state.list.concat({...action.newTodoItem, id: Math.floor(Math.random() * 100000) + 1 }),
      }
    case 'EDIT_TODO_LIST':
      let arr = state.list.slice(0);
      let index;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].id.toString() === action.editTodoItem.id) {
          index = i;
        }
      }
      arr.splice(index, 1);
      arr.splice(index, 0, action.editTodoItem);
      return {
        ...state,
        list: arr,
      }
    case 'TOGGLE_STATUS':
      let arrTmp = state.list.slice(0);
      arrTmp[action.index].isComplete = !arrTmp[action.index].isComplete;
      return {
        ...state,
        list: arrTmp,
      }
    case 'DELETE_TODO':
      let arrClone = state.list.slice(0);
      arrClone.splice(action.index, 1);
      return {
        ...state,
        list: arrClone,
      }
    case 'FILTER_TODO':
      return {
        ...state,
        filter: action.filter,
      }
    default:
      return state;
  }
}

export default todoListReducer
