import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Todo from '../Todo';

export interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

function createTodoReducer(state: TodoState, action: PayloadAction<string>) {
  const id = Math.max(...state.todos.map((o) => o.id + 1), 0);
  state.todos.push({
    id: id,
    text: action.payload,
    completed: false,
  });
}

function toggleTodoReducer(state: TodoState, action: PayloadAction<number>) {
  state.todos = state.todos.map((todo): Todo => {
    if (todo.id !== action.payload) {
      return todo;
    }
    return {
      ...todo,
      completed: !todo.completed,
    };
  });
}

function deleteTodoReducer(state: TodoState, action: PayloadAction<number>) {
  state.todos = state.todos.filter((todo): boolean => {
    return todo.id !== action.payload;
  });
}

const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    createTodo: createTodoReducer,
    toggleTodo: toggleTodoReducer,
    deleteTodo: deleteTodoReducer,
  },
});

export const { createTodo, deleteTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
