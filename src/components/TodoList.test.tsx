import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
            text: 'any-todo-2',
            completed: false,
          },
        ]}
        onToggle={vi.fn()}
        onDelete={vi.fn()}
      />
    );

    // Act
    const todoListItems = screen.getAllByRole('listitem');

    // Assert
    expect(todoListItems).toHaveLength(2);
    expect(todoListItems[0]).toHaveTextContent('any-todo-1');
    expect(todoListItems[1]).toHaveTextContent('any-todo-2');
  });

  test('should call onToggle when list item is clicked', async () => {
    // Arrange
    const onToggleMock = vi.fn();
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
            text: 'any-todo-2',
            completed: false,
          },
        ]}
        onToggle={onToggleMock}
        onDelete={vi.fn()}
      />
    );

    // Act
    const todoItemToClick = screen.getAllByRole('checkbox');

    await userEvent.click(todoItemToClick[0]);

    // Assert
    expect(onToggleMock).toHaveBeenCalledWith<[number]>(0);
  });

  test('should render message when list is empty', () => {
    // Arrange
    const onToggleMock = vi.fn();
    render(<TodoList todos={[]} onToggle={onToggleMock} onDelete={vi.fn()} />);

    // Act
    const emptyStateText = screen.getByText(/no todos/i);

    // Assert
    expect(emptyStateText).toBeInTheDocument();
  });
});
