export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  }
];

export const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          item: action.payload,
          complete: false,
          id: Date.now()
        }
      ];
    case "COMPLETE":
      return state.map(task => {
        if (task.id === action.payload) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    case "CLEAR_COMPLETE":
      return state.filter(task => !task.completed);
    default:
      return state;
  }
};
