import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ResponsiveAppBar from './Appbar';

describe('App bar', () => {
  it('renders the translated site identity', () => {
    render(<ResponsiveAppBar />);
    expect(screen.getByText('Szilva')).toBeInTheDocument();
  });
});
