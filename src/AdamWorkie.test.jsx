import { render, screen } from '@testing-library/react';
import Name from './AdamWorkie';

test('Renders name in properly', () => {
  render(<Name />);
  const linkElement = screen.getByText(/Adam Workie/i);
  expect(linkElement).toBeInTheDocument();
});
