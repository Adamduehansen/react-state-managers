import { ChangeEventHandler, FormEventHandler, useState } from 'react';

interface Props {
  onSubmit: (text: string) => void;
}

function TodoCreate({ onSubmit }: Props): JSX.Element {
  const [todoText, setTodoText] = useState('');

  const onTodoTextChane: ChangeEventHandler<HTMLInputElement> = function (
    event
  ) {
    setTodoText(event.target.value);
  };

  const onSubmitHandler: FormEventHandler<HTMLFormElement> = function (event) {
    event.preventDefault();
    if (todoText === '') {
      return;
    }
    onSubmit(todoText);
    setTodoText('');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor='todoname'>
        Todo text
        <input
          type='text'
          id='todoname'
          name='todoname'
          placeholder='Todo text'
          value={todoText}
          onChange={onTodoTextChane}
          required
          autoFocus
        />
      </label>
      <button type='submit' disabled={todoText === ''}>
        Create
      </button>
    </form>
  );
}

export default TodoCreate;
