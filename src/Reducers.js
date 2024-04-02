const initialState = {
  todos: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'REMOVE_TASK':
      return {
        ...state,
        todos: state.todos.filter((task) => task.id !== action.payload),
      };
    case 'UPDATE_TASK':
      return {
        ...state,
        todos: state.todos.map((task) =>
          task.id === action.payload ? { ...task, complete: !task.complete } : task
        ),
      };
    default:
      return state;
  }
};

export default taskReducer;
