import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
  //renders About test

  // First Test
  it('renders', () => {
    render(<About />);
  });

  // Second Test
  it('matches snapshot DON node structure', () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  })
});