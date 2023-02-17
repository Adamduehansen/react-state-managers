import { TrashIcon } from '@heroicons/react/20/solid';
import Todo from '../lib/Todo';
import './TodoList.css';

interface Props {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function TodoList({ todos, onToggle, onDelete }: Props): JSX.Element {
  function makeTodoClickHandler(id: number): () => void {
    return function () {
      onToggle(id);
    };
  }

  function makeTodoDeleteHandler(id: number): () => void {
    return function () {
      onDelete(id);
    };
  }

  if (todos.length === 0) {
    return <div>No todos yet. Use the form to create a todo!</div>;
  }

  return (
    <ul className='todoList'>
      {todos.map(({ id, text, completed }) => {
        return (
          <li key={id} aria-label={text} className='todoListItem'>
            <div>
              <input
                type='checkbox'
                checked={completed}
                onChange={makeTodoClickHandler(id)}
              />
              <label>{text}</label>
            </div>
            <button onClick={makeTodoDeleteHandler(id)}>
              <TrashIcon />
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
