import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App routes', () => {
  it('renders the translated landing page inside the application shell', () => {
    render(<App />);
    expect(screen.getByText('Rólam röviden')).toBeInTheDocument();
    expect(screen.getByText('Szilva')).toBeInTheDocument();
  });
});
