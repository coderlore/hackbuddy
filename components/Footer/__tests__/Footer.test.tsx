import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('test the footer', () => {
  it('renders a footer', () => {
    render(<Footer />);
    expect(screen.getByText(/Corporate/i)).toBeInTheDocument();
  });
});
