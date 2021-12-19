import React from 'react';
import { render } from '@testing-library/react';
import { Profile } from './Profile';

const mockProps = {
    username: 'fakeUsername',
    fullName: 'Fake Full Name',
    image: 'https://picsum.photos/id/473/56/56',
};

test('renders Profile Info', () => {
    const { getByRole, getByText } = render(<Profile {...mockProps} />);

    expect(getByRole('img')).toBeInTheDocument();
    expect(getByText('fakeUsername')).toBeInTheDocument();
    expect(getByText('Fake Full Name')).toBeInTheDocument();
});
