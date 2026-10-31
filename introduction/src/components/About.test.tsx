import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import About from './About';

describe('About', () => {
  it('sets a translated page title and renders the profile', () => {
    render(<About />);
    expect(document.title).toBe('Rólam');
    expect(screen.getByText('Rólam röviden')).toBeInTheDocument();
    expect(screen.getByText('Senior full-stack fejlesztő')).toBeInTheDocument();
  });

  it('includes the personal and homelab information', () => {
    render(<About />);
    expect(screen.getByText(/Pajti, a menhelyi kutyám 2022 óta velünk él/)).toBeInTheDocument();
    expect(screen.getByText('Homelab és DevOps')).toBeInTheDocument();
  });

  it('renders the profile avatar', () => {
    const { container } = render(<About />);
    expect(container.querySelector('img[src="/me.jpg"]')).toBeInTheDocument();
  });
});
