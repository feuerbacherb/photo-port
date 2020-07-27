import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

const currentPhoto = {
        name: 'Park bench',
        category: 'landscape',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        index: 1
    };

afterEach(cleanup);

describe('Modal component', () => {
    it('renders', () => {
        render('<Modal />');
    });

    it('matches snapshot', () => {
        const {asFragment} = render('<Modal />');
        expect(asFragment()).toMatchSnapshot();
    })  
})