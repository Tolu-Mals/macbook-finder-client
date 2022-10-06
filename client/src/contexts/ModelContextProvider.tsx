import * as React from 'react';

export interface Model {
  id: string;
  name: string;
  image: string;
  price: string;
  starRating: number;
  noOfReviews: number;
  seller: {
    name: string;
    followers: number;
    qualityScore: string;
    customerRating: string;
    orderFulfillmentRate: string;
  }
}

interface Props {
  children: JSX.Element
}

const intialState: Model[] = [];
export const ModelContext = React.createContext(intialState);

const ModelContextProvider = ({ children }: Props) => {
  const [ models, setModels ] = React.useState<Model[]>([]);

  React.useEffect(() => {
    const getModels = async () => {
      const res = await fetch('http://localhost:3000/models');
  
      //Check if the fetch was successful
      if(res.status !== 200) throw new Error('Could not fetch models');
  
      const models = await res.json();
      setModels(models);
    };

    getModels();
  }, []);

  return (
    <ModelContext.Provider value={models}>
      { children }
    </ModelContext.Provider>
  )
}

export default ModelContextProvider;