import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Schools from './Schools';

describe('Schools', () => {
  it('renders the translated education heading and degree', () => {
    render(<Schools />);
    expect(document.title).toBe('Tanulmányok');
    expect(screen.getByText('Tanulmányok')).toBeInTheDocument();
    expect(screen.getByText('Mérnökinformatikus MSc (Kiváló minősítés)')).toBeInTheDocument();
  });
});
