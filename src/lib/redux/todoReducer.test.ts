import { describe, expect, test } from 'vitest';
import todoReducer, {
  createTodo,
  deleteTodo,
  selectCompletedTodos,
  selectTodos,
  TodoState,
  toggleTodo,
} from './todoReducer';

describe('todoReducer', () => {
  test('should create todo in state', () => {
    // Arrange
    const expectedState: TodoState = {
      todos: [
        {
          id: 0,
          completed: false,
          text: 'any-text-1',
        },
        {
          id: 1,
          completed: false,
          text: 'any-text-2',
        },
      ],
    };
    const currentState: TodoState = {
      todos: [
        {
          id: 0,
          completed: false,
          text: 'any-text-1',
        },
      ],
    };

    // Act
    const actualState = todoReducer(currentState, createTodo('any-text-2'));

    // Assert
    expect(actualState).toEqual(expectedState);
  });

  describe('toggleTodo', () => {
    test('should toggle todo in state as completed', () => {
      // Arrange
      const expectedState: TodoState = {
        todos: [
          {
            id: 15,
            completed: false,
            text: 'any-text',
          },
        ],
      };
      const currentState: TodoState = {
        todos: [
          {
            id: 15,
            completed: true,
            text: 'any-text',
          },
        ],
      };

      // Act
      const actualState = todoReducer(currentState, toggleTodo(15));

      // Assert
      expect(actualState).toEqual(expectedState);
    });

    test('should toggle todo in state as incomplete', () => {
      // Arrange
      const expectedState: TodoState = {
        todos: [
          {
            id: 15,
            completed: true,
            text: 'any-text',
          },
        ],
      };
      const currentState: TodoState = {
        todos: [
          {
            id: 15,
            completed: false,
            text: 'any-text',
          },
        ],
      };

      // Act
      const actualState = todoReducer(currentState, toggleTodo(15));

      // Assert
      expect(actualState).toEqual(expectedState);
    });
  });

  test('should delete todo in state', () => {
    // Arrange
    const expectedState: TodoState = {
      todos: [
        {
          id: 16,
          completed: true,
          text: 'any-text',
        },
      ],
    };
    const currentState: TodoState = {
      todos: [
        {
          id: 15,
          completed: true,
          text: 'any-text',
        },
        {
          id: 16,
          completed: true,
          text: 'any-text',
        },
      ],
    };

    // Act
    const actualState = todoReducer(currentState, deleteTodo(15));

    // Assert
    expect(actualState).toEqual(expectedState);
  });

  test('should select todos in state', () => {
    // Arrange
    const currentState: TodoState = {
      todos: [
        {
          id: 15,
          completed: true,
          text: 'any-text',
        },
        {
          id: 16,
          completed: true,
          text: 'any-text',
        },
      ],
    };

    // Act
    const todos = selectTodos(currentState);

    // Assert
    expect(todos).toEqual(currentState.todos);
  });

  test('should select completed todos in state', () => {
    // Arrange
    const currentState: TodoState = {
      todos: [
        {
          id: 15,
          completed: false,
          text: 'any-text',
        },
        {
          id: 16,
          completed: true,
          text: 'any-text',
        },
      ],
    };

    // Act
    const todos = selectCompletedTodos(currentState);

    // Assert
    expect(todos).toHaveLength(1);
    expect(todos[0]).toEqual(currentState.todos[1]);
  });
});
