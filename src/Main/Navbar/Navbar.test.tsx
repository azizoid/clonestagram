import React from 'react';
import { render, screen } from '@testing-library/react';
import { NavbarLayout } from './Navbar';

test('renders Navbar', () => {
    const { container, getByText, getAllByRole, getByPlaceholderText } = render(
        <NavbarLayout />,
    );

    expect(getByText('Clonestagram')).toBeInTheDocument();
    expect(getByPlaceholderText('Search')).toBeInTheDocument();
    expect(getAllByRole('link').length).toEqual(7);

    expect(container).toMatchSnapshot();
});
