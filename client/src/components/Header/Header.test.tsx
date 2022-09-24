import Header from './Header';
import { render  } from '../../test-utils';
import { screen } from '@testing-library/react';

describe("Header", () => {

    test("Should display App Title", () => {
        render(<Header />);
        const title = screen.getByRole('heading');
        expect(title).toHaveTextContent('Macbook Finder');
    });
    
});

