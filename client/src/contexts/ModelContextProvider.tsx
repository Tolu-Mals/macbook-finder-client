import * as React from 'react';

export interface Model {
  id?: string;
  name?: string;
  image?: string;
  price?: string;
  starRating?: number | string;
  noOfReviews?: number | string;
  url?: string;
  seller?: Seller;
}

export interface Seller {
  name?: string;
  followers?: number;
  sellerScore?: string;
  qualityScore?: string;
  customerRating?: string;
  orderFulfillmentRate?: string;
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
      const res = await fetch('http://localhost:8000/macbooks');
  
      //Check if the fetch was successful
      if(res.status !== 200) throw new Error('Could not fetch models');
  
      const data = await res.json();
      let { macbooks } = data;
      macbooks = JSON.parse(macbooks);
      setModels(macbooks);
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