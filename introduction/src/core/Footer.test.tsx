import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ResponsiveFooter from './Footer';

describe('Footer', () => {
  it('renders translated copyright text', () => {
    render(<ResponsiveFooter />);
    expect(screen.getByText(/Szilva\. Minden jog fenntartva\./)).toBeInTheDocument();
  });
});
