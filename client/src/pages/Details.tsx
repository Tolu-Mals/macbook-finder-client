import { useParams } from 'react-router-dom';
import { allModels } from '../components/ModelList/List';
import OffersList from '../components/OffersList';
import DetailsHeader from '../components/DetailsHeader';
import Reviews from '../components/Reviews/Reviews';

const Details = () => {
  const { id } = useParams();
  let modelData = allModels.find((model) => model.id === id);
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