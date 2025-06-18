import React from 'react';
import { render, screen } from '@testing-library/react';
import Greeting from './components/Greeting';

test('renders greeting with name', () => {
  render(<Greeting name="Data" />);
  const heading = screen.getByRole('heading', { level: 1 });
  expect(heading).toHaveTextContent('Data');

});




