import { atom } from 'jotai';
import Todo from '../Todo';

export const todosAtom = atom<Todo[]>([]);

export const completedTodosAtom = atom<Todo[]>((get) => {
  const todos = get(todosAtom);
  return todos.filter((todo) => todo.completed);
});
