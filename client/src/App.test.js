import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from './App';
import messages from './utils/messages';

test('renders title and readme link', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const titleElement = screen.getByText(messages.common.title);
  expect(titleElement).toBeInTheDocument();
});
