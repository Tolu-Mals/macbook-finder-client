import * as React from 'react';
import { useParams } from 'react-router-dom';
import OfferDetails from '../components/OfferDetails';
import DetailsHeader from '../components/DetailsHeader';
import Reviews from '../components/Reviews/Reviews';
import { ModelContext } from '../contexts/ModelContextProvider';
import { ModelState } from '../contexts/ModelContextProvider';

export interface Details {
  price?: number;
  starRating?: number | string;
  noOfReviews?: number | string;
  url?: string;
  seller?: {
    name?: string;
    followers?: number;
    sellerScore?: string;
    qualityScore?: string;
    customerRating?: string;
    orderFulfillmentRate?: string;
  }
}

const DetailsPage = () => {
  const { id } = useParams();
  const { macbooks } = React.useContext<ModelState>(ModelContext);
  let modelData = macbooks.find((model) => model._id === id);
  const imageUrl = modelData ? modelData.image : undefined;
  const name = modelData ? modelData.name : undefined;

  const details: Details = {
    price: modelData?.price,
    starRating: modelData?.starRating,
    noOfReviews: modelData?.noOfReviews,
    url: modelData?.url,
    seller: {
      name: modelData?.seller?.name,
      followers: modelData?.seller?.followers,
      sellerScore: modelData?.seller?.sellerScore,
      qualityScore: modelData?.seller?.qualityScore,
      customerRating: modelData?.seller?.customerRating,
      orderFulfillmentRate: modelData?.seller?.orderFulfillmentRate
    }
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <DetailsHeader imageUrl={imageUrl} name={name} />
      <OfferDetails details={details} />
      <Reviews />
    </div>
  )
}

export default DetailsPage;
