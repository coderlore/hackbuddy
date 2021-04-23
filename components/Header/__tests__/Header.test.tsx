import React from 'react';
import Header from '../Header';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
  test('Header in the document', () => {
    render(<Header />);
    expect(screen.getByText(/Hackbuddy/i)).toBeInTheDocument();
  });
});
