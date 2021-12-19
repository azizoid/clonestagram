import React from 'react';
import { render } from '@testing-library/react';
import { Feed } from './Feed';

describe('Renders Feed', () => {
    test('renders Header', () => {
        const { container, getByText, getByRole } = render(<Feed />);

        expect(getByRole('img')).toBeInTheDocument();
        expect(getByText('azizoid')).toBeInTheDocument();
        expect(getByRole('icon')).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });
});
