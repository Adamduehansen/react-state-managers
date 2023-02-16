import Todo from '../lib/Todo';

interface Props {
  todos: Todo[];
}

function TodoList({ todos }: Props): JSX.Element {
  return (
    <ul>
      {todos.map((todo) => {
        return <li key={todo.id}>{todo.text}</li>;
      })}
    </ul>
  );
}

export default TodoList;
