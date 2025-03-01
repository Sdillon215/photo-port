import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { expect } from '@jest/globals';
import '@testing-library/jest-dom';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
    // renders About test
    // first test
    it('renders', () => {
        render(<About />);
    });

    // second test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
})