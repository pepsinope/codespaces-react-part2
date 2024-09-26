import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import ItemList from './ItemList';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeDefined();
});
