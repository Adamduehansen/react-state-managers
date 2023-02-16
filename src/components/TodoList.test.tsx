import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList', () => {
  test('should render todos', () => {
    // Arrange
    render(
      <TodoList
        todos={[
          {
            id: 0,
            text: 'any-todo-1',
            completed: false,
          },
          {
            id: 1,
            text: 'any-todo-1',
            completed: false,
          },
        ]}
      />
    );

    // Act
    const todoListItems = screen.getAllByRole('listitem');

    // Assert
    expect(todoListItems).toHaveLength(2);
    expect(todoListItems[0]).toHaveTextContent('any-todo-1');
    expect(todoListItems[1]).toHaveTextContent('any-todo-1');
  });
});
