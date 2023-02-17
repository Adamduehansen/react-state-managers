import TodoCreate from '../components/TodoCreate';
import TodoList from '../components/TodoList';
import useTodoStore from '../lib/zustand/store';

function Zustand(): JSX.Element {
  const store = useTodoStore();

  function onCreate(text: string) {
    store.createTodo(text);
  }

  return (
    <section>
      <h1>Zustand</h1>
      <TodoCreate onSubmit={onCreate} />
      <TodoList
        todos={store.todos}
        onToggle={store.toggleTodo}
        onDelete={store.deleteTodo}
      />
    </section>
  );
}

export default Zustand;
