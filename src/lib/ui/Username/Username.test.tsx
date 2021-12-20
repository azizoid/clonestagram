import React from 'react';
import { render } from '@testing-library/react';
import { Username, UsernameProps } from './Username';

const mockProps: UsernameProps = {
    username: 'fakeUsername',
};

test('renders Username', () => {
    const { container, getByText } = render(<Username {...mockProps} />);

    expect(getByText('fakeUsername')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
});
