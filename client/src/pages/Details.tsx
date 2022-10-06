import * as React from 'react';
import { useParams } from 'react-router-dom';
import OfferDetails from '../components/OfferDetails';
import DetailsHeader from '../components/DetailsHeader';
import Reviews from '../components/Reviews/Reviews';
import { ModelContext, Model } from '../contexts/ModelContextProvider';

export interface Details {
  price?: string;
  starRating?: number;
  noOfReviews?: number;
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

const Details = () => {
  const { id } = useParams();
  const models = React.useContext<Model[]>(ModelContext);
  let modelData = models.find((model) => model.id === id);
  const imageUrl = modelData ? modelData.image : undefined;
  const name = modelData ? modelData.name : undefined;

  const details: Details = {
    price: modelData?.price,
    starRating: modelData?.starRating,
    noOfReviews: modelData?.noOfReviews,
    url: modelData?.url,
    seller: {
      name: modelData?.seller.name,
      followers: modelData?.seller.followers,
      sellerScore: modelData?.seller?.sellerScore,
      qualityScore: modelData?.seller?.qualityScore,
      customerRating: modelData?.seller?.customerRating,
      orderFulfillmentRate: modelData?.seller?.orderFulfillmentRate
    }
  }

  return (
    <div>
        <DetailsHeader imageUrl={imageUrl} name={name} />
        <OfferDetails details={details}/>
        <Reviews />
    </div>
  )
}

export default Details;