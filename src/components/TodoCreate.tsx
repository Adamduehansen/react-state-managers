interface Props {
  onSubmit: (text: string) => void;
}

function TodoCreate({ onSubmit }: Props): JSX.Element {
  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = function (
    event
  ) {
    event.preventDefault();
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
          required
        />
      </label>
      <button type='submit'>Create</button>
    </form>
  );
}

export default TodoCreate;
