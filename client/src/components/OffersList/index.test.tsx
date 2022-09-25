import { render } from "../../test-utils";
import { screen } from '@testing-library/react';
import OffersList from './index';
import { allOffers } from './index';

describe("OffersList", () => {

  test("Should display section title", () => {
    render(<OffersList />);

    const title = screen.getByRole('heading');
    expect(title).toHaveTextContent(/All Offers \([0-9]+\)/);
  });
  
  test("Should show currect number of offers in title", () => {
    render(<OffersList />);

    const title = screen.getByRole('heading').textContent;
    const match = title?.match(/\([0-9]+\)/)?.at(0)
    const noOfOffers = Number(match?.slice(1, match.length - 1));
    expect(noOfOffers).toEqual(allOffers.length);

  });
})