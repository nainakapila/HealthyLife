import { render, screen } from '@testing-library/react';

import About from '../pages/about';

describe('About Page', () => {
  it('renders the About Us heading', () => {
    render(<About />);
    const heading = screen.getByText(/About Us/i);
  });
});
