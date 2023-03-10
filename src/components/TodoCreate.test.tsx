import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoCreate from './TodoCreate';

describe('TodoCreate', () => {
  describe('textbox', () => {
    test('should be empty on load', () => {
      // Arrange
      render(<TodoCreate onSubmit={vi.fn()} />);

      // Act
      const textbox = screen.getByRole('textbox');

      // Assert
      expect(textbox).toHaveValue('');
    });

    test('should be invalid when empty', () => {
      // Arrange
      render(<TodoCreate onSubmit={vi.fn()} />);

      // Act
      const textbox = screen.getByRole('textbox');

      // Assert
      expect(textbox).toBeInvalid();
    });

    test('should be invalid when only whitespace', () => {
      // Arrange
      render(<TodoCreate onSubmit={vi.fn()} />);

      // Act
      const textbox = screen.getByRole('textbox');
      userEvent.type(textbox, '    ');

      // Assert
      expect(textbox).toBeInvalid();
    });
  });

  describe('on submit', () => {
    test('should call onSubmit when submitted', async () => {
      // Arrange
      const onSubmitMock = vi.fn();
      render(<TodoCreate onSubmit={onSubmitMock} />);

      // Act
      const textbox = screen.getByRole('textbox');
      await userEvent.type(textbox, 'any-todo-text');

      const submitButton = screen.getByRole('button');
      await userEvent.click(submitButton);

      // Assert
      expect(onSubmitMock).toHaveBeenCalledOnce();
    });

    test('should empty textbox when submitted', async () => {
      // Arrange
      render(<TodoCreate onSubmit={vi.fn()} />);

      // Act
      const textbox = screen.getByRole('textbox');
      await userEvent.type(textbox, 'any-todo-text');

      const submitButton = screen.getByRole('button');
      await userEvent.click(submitButton);

      // Assert
      expect(textbox).toHaveValue('');
    });

    test('should not call onSubmit when textbox is empty', async () => {
      // Arrange
      const onSubmitMock = vi.fn();
      render(<TodoCreate onSubmit={onSubmitMock} />);

      // Act
      const submitButton = screen.getByRole('button');
      await userEvent.click(submitButton);

      // Assert
      expect(onSubmitMock).not.toHaveBeenCalledOnce();
    });
  });
});
