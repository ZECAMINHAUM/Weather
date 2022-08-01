import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from 'App';

test('render excuse text', async () => {
  render(<App />)
  await waitFor(async () => {
    const textElement = screen.getByText('Design não tão incrível, mas funcional');
    expect(textElement).toBeInTheDocument();
  })
});
