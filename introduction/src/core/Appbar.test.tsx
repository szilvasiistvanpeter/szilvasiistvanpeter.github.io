import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ResponsiveAppBar from './Appbar';

describe('App bar', () => {
  it('renders the translated site identity', () => {
    render(<MemoryRouter><ResponsiveAppBar /></MemoryRouter>);
    expect(screen.getByText('Szilva')).toBeInTheDocument();
  });
});
