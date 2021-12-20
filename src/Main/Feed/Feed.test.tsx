import React from 'react';
import { render } from '@testing-library/react';
import { Feed } from './Feed';

describe('Renders Feed', () => {
    test('Renders Feed', () => {
        render(<Feed />);
    });
});
