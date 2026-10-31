import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Jobs from './Jobs';

describe('Jobs', () => {
  it('renders the translated experience heading and current role', () => {
    render(<Jobs />);
    expect(document.title).toBe('Munkahelyek');
    expect(screen.getByText('Szakmai tapasztalat')).toBeInTheDocument();
    expect(screen.getByText('Komplex AI alkalmazások fejlesztése')).toBeInTheDocument();
  });
});
