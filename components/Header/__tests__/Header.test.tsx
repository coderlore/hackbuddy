import React from 'react';
import Header from '../Header';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
  test('Header in the document', () => {
    const { debug } = render(<Header />);
    debug();
    expect(screen.getByText(/Hackbuddy/i)).toBeInTheDocument();
  });
});
