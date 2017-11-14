
export const allTodos = (state) => {
    const todoKeys = Object.keys(state.todos);
    return todoKeys.map((id) => state.todos[id]);
};

export const stepsByTodoId = (state, todoId) => {
  const steps = [];
  for(let key in state.steps) {
    if (state.steps[key].todo_id === todoId) {
      steps.push(state.steps[key]);
    }
  }
  return steps;
};

export const errors = (state) => {
  return state.errors;
};
