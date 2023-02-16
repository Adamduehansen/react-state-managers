import { useDispatch, useSelector } from 'react-redux';
import TodoCreate from '../components/TodoCreate';
import TodoList from '../components/TodoList';
import { createTodo, selectTodos } from '../lib/redux/todoReducer';

function Redux(): JSX.Element {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  function onCreate(text: string) {
    dispatch(createTodo(text));
  }

  return (
    <section>
      <h1>Redux</h1>
      <TodoCreate onSubmit={onCreate} />
      <TodoList todos={todos} />
    </section>
  );
}

export default Redux;
