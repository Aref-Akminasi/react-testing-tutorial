import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component tests', () => {
  test('renders "Hello World" as text', () => {
    render(<Greeting />);
    const helloWorldElement = screen.getByText('Hello World', { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });
  test('renders "not changed" paragraph if the button was NOT clicked', () => {
    render(<Greeting />);
    const paragraphElement = screen.getByText('not changed', { exact: false });
    expect(paragraphElement).toBeInTheDocument();
  });
  test('renders "Changed!" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    // Assert
    const paragraphElement = screen.getByText('Changed!');
    expect(paragraphElement).toBeInTheDocument();
  });
  test('doesnt render "not changed" if the button was clicked', () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    const paragraphElement = screen.queryByText('not changed', {
      exact: false,
    });
    expect(paragraphElement).toBeNull();
  });
});
