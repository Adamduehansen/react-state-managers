import Todo from '../lib/Todo';

interface Props {
  max: number;
  value: number;
}

function TodoProgress({ max, value }: Props): JSX.Element {
  return <progress max={max} value={value}></progress>;
}

export default TodoProgress;
