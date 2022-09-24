import Navbar from "./Navbar";
import { render } from '../../test-utils';
import { screen } from '@testing-library/react';

describe("Navbar", () => {

    test("Should display links", () => {
        render(<Navbar />);

        const expectedLinks = ["Twitter", "Github"];

        const links = screen.getAllByRole('link');

        for(let i = 0; i < links.length; i++){
            const textContent = links[i].textContent ?? "Random";
            expect(expectedLinks.includes(textContent));
        }
    });

});