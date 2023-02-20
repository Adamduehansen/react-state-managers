import { useAtom, useAtomValue } from 'jotai';
import TodoCreate from '../components/TodoCreate';
import TodoList from '../components/TodoList';
import TodoProgress from '../components/TodoProgress';
import { completedTodosAtom, todosAtom } from '../lib/jotai/atoms';

function Jotai(): JSX.Element {
  const [todos, setTodos] = useAtom(todosAtom);
  const completedTodos = useAtomValue(completedTodosAtom);

  function onSubmitHandler(text: string): void {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: Math.max(...currentTodos.map((todo) => todo.id + 1), 0),
          text: text,
          completed: false,
        },
      ];
    });
  }

  function onToggleHandler(id: number): void {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    });
  }

  function onDeleteHandler(id: number): void {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <section>
      <h2>Jotai</h2>
      <TodoCreate onSubmit={onSubmitHandler} />
      <TodoList
        todos={todos}
        onToggle={onToggleHandler}
        onDelete={onDeleteHandler}
      />
      <TodoProgress max={todos.length} value={completedTodos.length} />
    </section>
  );
}

export default Jotai;
