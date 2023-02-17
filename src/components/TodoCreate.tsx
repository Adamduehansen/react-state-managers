import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Props {
  onSubmit: (text: string) => void;
}

interface FormInputs {
  text: string;
}

function TodoCreate({ onSubmit }: Props): JSX.Element {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormInputs>();

  const onSubmitHandler: SubmitHandler<FormInputs> = function (data) {
    onSubmit(data.text);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className='grid'>
        <input
          id='todotext'
          placeholder='Enter a todo...'
          aria-invalid={!isValid}
          {...register('text', {
            required: true,
          })}
        />
        <button type='submit' disabled={errors.text ? true : false}>
          Create
        </button>
      </div>
    </form>
  );
}

export default TodoCreate;
