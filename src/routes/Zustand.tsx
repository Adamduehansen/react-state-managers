import TodoCreate from '../components/TodoCreate';
import TodoList from '../components/TodoList';
import TodoProgress from '../components/TodoProgress';
import useTodoStore from '../lib/zustand/store';

function Zustand(): JSX.Element {
  const store = useTodoStore();

  function onCreate(text: string) {
    store.createTodo(text);
  }

  return (
    <section>
      <h2>Zustand</h2>
      <TodoCreate onSubmit={onCreate} />
      <TodoList
        todos={store.todos}
        onToggle={store.toggleTodo}
        onDelete={store.deleteTodo}
      />
      <TodoProgress
        max={store.todos.length}
        value={store.completedTodos().length}
      />
    </section>
  );
}

export default Zustand;
