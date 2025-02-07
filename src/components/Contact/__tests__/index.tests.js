import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { expect } from '@jest/globals';
import '@testing-library/jest-dom';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(<Contact />);
    });

    it('renders', () => {
        const { asFragment } = render(<Contact />)
        expect(asFragment()).toMatchSnapshot()
    })
})


it('renders', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
})

it('renders', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('button')).toHaveTextContent('Submit')
})