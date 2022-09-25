import { render } from "../../test-utils";
import { screen } from '@testing-library/react';
import Header from "./Header";

describe("Header", () => {
    test("Should display section title", () => {
        render(<Header />);
        expect(screen.getByRole('heading')).toHaveTextContent('List of Models');
    });
});