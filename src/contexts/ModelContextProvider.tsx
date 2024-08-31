import * as React from 'react';
import { useSearchParams } from 'react-router-dom'
import buildUrl from '../utils/buildUrl';
import { API_URL } from '../env'

interface ModelData {
  macbooks: Model[]
  lastUpdated: string
  total: number
}

export interface Model {
  _id?: string;
  name?: string;
  image?: string;
  price?: number;
  starRating?: number;
  noOfReviews?: number;
  url?: string;
  seller?: Seller;
  lastUpdated: string
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
  children: React.ReactNode
}

const initialState = {
  macbooks: [],
  lastUpdated: '',
  total: 0,
  isLoading: false
}

export type ModelState = ModelData & { isLoading: boolean }
export const ModelContext = React.createContext<ModelState>(initialState);

const ModelContextProvider = ({ children }: Props) => {
  const [modelData, setModelData] = React.useState<ModelData>(initialState);
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page')

  React.useEffect(() => {
    const getModels = async () => {
      setIsLoading(true);
      const url = buildUrl(API_URL as string, '/macbooks', { page: String(page) })
      const res = await fetch(url)

      //Check if the fetch was successful
      if (res.status !== 200) {
        throw new Error('Could not fetch model data');
      } else {
        let data = await res.json() as ModelData;
        setModelData(data);
      }

      setIsLoading(false)
    };

    getModels();
  }, [searchParams]);

  const contextValue = {
    ...modelData,
    isLoading,
  }
  return (
    <ModelContext.Provider value={contextValue}>
      {children}
    </ModelContext.Provider>
  )
}

export default ModelContextProvider;
