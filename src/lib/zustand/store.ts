import { create } from 'zustand';
import Todo from '../Todo';

interface TodoState {
  todos: Todo[];
  createTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

function createTodo(
  set: (
    partial:
      | TodoState
      | Partial<TodoState>
      | ((state: TodoState) => TodoState | Partial<TodoState>),
    replace?: boolean | undefined
  ) => void
): (text: string) => void {
  return function (text) {
    return set((state) => {
      return {
        todos: [
          ...state.todos,
          {
            id: Math.max(...state.todos.map((o) => o.id + 1), 0),
            text: text,
            completed: false,
          },
        ],
      };
    });
  };
}

const useTodoStore = create<TodoState>()((set) => {
  return {
    todos: [],
    createTodo: createTodo(set),
    toggleTodo: function (id) {
      return set((state) => {
        return {
          todos: state.todos.map((todo) => {
            if (todo.id !== id) {
              return todo;
            }

            return {
              ...todo,
              completed: !todo.completed,
            };
          }),
        };
      });
    },
    deleteTodo: function (id) {
      return set((state) => {
        return {
          todos: state.todos.filter((todo) => {
            return todo.id !== id;
          }),
        };
      });
    },
  };
});

export default useTodoStore;
