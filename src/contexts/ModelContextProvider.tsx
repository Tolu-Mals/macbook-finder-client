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
  models: Model[];
  lastUpdated: string;
}

const intialState: State = {
  isLoading: false,
  models: [],
  lastUpdated: '',
}
export const ModelContext = React.createContext(intialState);

const ModelContextProvider = ({ children }: Props) => {
  const [ models, setModels ] = React.useState<Model[]>([]);
  const [ isLoading, setIsLoading ] = React.useState<boolean>(false);
  const [ lastUpdated, setLastUpdated ] = React.useState<string>('');

  React.useEffect(() => {
    const getModels = async () => {
      setIsLoading(true);
      const res = await fetch('https://macbook-finder-server-production.up.railway.app/macbooks');
  
      //Check if the fetch was successful
      if(res.status !== 200){
        setIsLoading(false);
        throw new Error('Could not fetch models');
      } else {
        let data = await res.json();
        let { macbooks, created } = data;
        setIsLoading(false);
        setModels(JSON.parse(macbooks));
        setLastUpdated(new Date(created).toLocaleDateString());
      }
    };

    getModels();
  }, []);

  return (
    <ModelContext.Provider value={{ isLoading, models, lastUpdated }}>
      { children }
    </ModelContext.Provider>
  )
}

export default ModelContextProvider;