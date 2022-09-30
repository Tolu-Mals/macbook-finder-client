import * as React from 'react';
import { useParams } from 'react-router-dom';
import OffersList from '../components/OffersList';
import DetailsHeader from '../components/DetailsHeader';
import Reviews from '../components/Reviews/Reviews';
import { ModelContext } from '../contexts/ModelContextProvider';
const Details = () => {
  const { id } = useParams();
  const models = React.useContext(ModelContext);
  let modelData = models.find((model) => model.id === id);
  const imageUrl = modelData ? modelData.image : undefined;
  const name = modelData ? modelData.name : undefined;

  return (
    <div>
        <DetailsHeader imageUrl={imageUrl} name={name} />
        <OffersList />
        <Reviews />
    </div>
  )
}

export default Details;