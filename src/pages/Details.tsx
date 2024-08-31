import * as React from 'react';
import { useParams } from 'react-router-dom';
import OfferDetails from '../components/OfferDetails';
import DetailsHeader from '../components/DetailsHeader';
import Reviews from '../components/Reviews/Reviews';
import { chakra } from '@chakra-ui/react';
import buildUrl from '../utils/buildUrl';
import { API_URL } from '../env';

export interface Details {
  name: string
  image: string
  price?: number;
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

const DetailsPage = () => {
  const { id } = useParams();
  const [details, setDetails] = React.useState<Details | undefined>()

  React.useEffect(() => {
    const getDetails = async () => {
      const url = buildUrl(API_URL as string, `/macbook/${id}`)
      const res = await fetch(url)

      //Check if the fetch was successful
      if (res.status !== 200) {
        throw new Error('Could not fetch model data');
      } else {
        let { macbook } = await res.json();
        setDetails(macbook as Details)
      }
    };

    getDetails();

  }, [id])

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <chakra.div bg="blue.800">
      {details && <DetailsHeader imageUrl={details.image} name={details.name} />}
      {details && <OfferDetails details={details} />}
      <Reviews />
    </chakra.div>
  )
}

export default DetailsPage;
