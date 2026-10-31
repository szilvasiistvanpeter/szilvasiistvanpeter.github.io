import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Contacts from './Contacts';

describe('Contacts', () => {
  it('sets a translated page title and renders contact details', () => {
    render(<Contacts />);
    expect(document.title).toBe('Kapcsolat');
    expect(screen.getByText('Beszéljünk')).toBeInTheDocument();
    expect(screen.getByText('Eger, Magyarország')).toBeInTheDocument();
  });
});
