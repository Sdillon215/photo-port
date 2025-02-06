import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { expect } from '@jest/globals';
import '@testing-library/jest-dom';
import PhotoList from '../';

afterEach(cleanup)

describe('PhotoList is rendering', () => {
    it('renders', () => {
        render(<PhotoList />);
    });

    it('renders', () => {
        const { asFragment } = render(<PhotoList />)
        expect(asFragment()).toMatchSnapshot()
    });
});