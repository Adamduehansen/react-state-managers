import { useDispatch, useSelector } from 'react-redux';
import TodoCreate from '../components/TodoCreate';
import TodoList from '../components/TodoList';
import TodoProgress from '../components/TodoProgress';
import {
  createTodo,
  deleteTodo,
  selectCompletedTodos,
  selectTodos,
  toggleTodo,
} from '../lib/redux/todoReducer';

function Redux(): JSX.Element {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const completedTodos = useSelector(selectCompletedTodos);

  return (
    <section>
      <h2>Redux</h2>
      <TodoCreate onSubmit={(text) => dispatch(createTodo(text))} />
      <TodoList
        todos={todos}
        onToggle={(id) => dispatch(toggleTodo(id))}
        onDelete={(id) => dispatch(deleteTodo(id))}
      />
      <TodoProgress max={todos.length} value={completedTodos.length} />
    </section>
  );
}

export default Redux;
