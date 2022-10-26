import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Freeders the form elements', () => {
    render(<App />);
    const btnEL = screen.getByRole('button',{name: /consult/i});
    expect(linkElement).toBeInTheDocument();
    expect(btnEL).toBeInTheDocument()
  });
  test('renders Freen', () => {
    render(<App />);
    const btnEL = screen.getByRole('button',{name: /consult/i});
    expect(linkElement).toBeInTheDocument();
    expect(btnEL).toBeInTheDocument()
  });