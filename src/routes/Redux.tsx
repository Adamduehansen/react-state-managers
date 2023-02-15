import { useDispatch } from 'react-redux';
import TodoCreate from '../components/TodoCreate';
import { createTodo } from '../lib/redux/todoReducer';

function Redux(): JSX.Element {
  const dispatch = useDispatch();

  function onCreate(text: string) {
    dispatch(createTodo(text));
  }

  return (
    <section>
      <h1>Redux</h1>
      <TodoCreate onSubmit={onCreate} />
    </section>
  );
}

export default Redux;
