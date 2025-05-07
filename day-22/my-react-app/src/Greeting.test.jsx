import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';
import { describe, it, expect } from 'vitest';

describe('Greeting component', () => {
  it('renders without crashing', () => {
    render(<Greeting name="Alice" />);
  });

  it('displays the correct greeting message', () => {
    render(<Greeting name="Alice" />);
    expect(screen.getByText('Hello, Alice!')).toBeInTheDocument();
  });
});
