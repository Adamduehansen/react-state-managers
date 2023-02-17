import { describe, test } from 'vitest';
import useTodoStore from './store';

describe.skip('store', () => {
  test('should create todo in state', () => {
    // Arrange
    const todoStore = useTodoStore();

    // Act
    todoStore.createTodo('any-todo-text');

    // Assert
    expect(todoStore.todos).toHaveLength(1);
  });
});
