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

export interface State {
  isLoading: boolean;
  models: Model[]
}

const intialState: State = {
  isLoading: false,
  models: []
}
export const ModelContext = React.createContext(intialState);

const ModelContextProvider = ({ children }: Props) => {
  const [ models, setModels ] = React.useState<Model[]>([]);
  const [ isLoading, setIsLoading ] = React.useState<boolean>(false);

  React.useEffect(() => {
    const getModels = async () => {
      setIsLoading(true);
      const res = await fetch('http://localhost:8000/macbooks');
  
      //Check if the fetch was successful
      if(res.status !== 200){
        setIsLoading(false);
        throw new Error('Could not fetch models');
      } else {
        const data = await res.json();
        let { macbooks } = data;
        macbooks = JSON.parse(macbooks);
        setIsLoading(false);
        setModels(macbooks);
      }
    };

    getModels();
  }, []);

  return (
    <ModelContext.Provider value={{ isLoading, models }}>
      { children }
    </ModelContext.Provider>
  )
}

export default ModelContextProvider;