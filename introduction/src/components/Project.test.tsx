import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Project from './Project';

describe('Project', () => {
  it('renders the project title and description', () => {
    render(<Project />);
    expect(document.title).toBe('Projektről');
    expect(screen.getByText('A fejlesztésről')).toBeInTheDocument();
  });
});
