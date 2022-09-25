import React from 'react';
import { Wrap } from '@chakra-ui/react';
import ListItem from './ListItem';

export interface Model {
    id: string;
    name: string;
    image: string;
}

export const allModels: Model[] = [
    {
      id: '0',
      name: 'Apple MacBook Pro 14" M1 Pro Chip 16GB RAM, 512GB (2021 Model)',
      image: 'https://user-images.githubusercontent.com/30352484/192147162-ca94a124-d23f-401b-9ae6-69b2103412bd.png'
    },
    {
      id: '1',
      name: 'Apple MacBook Pro 14" M1 Pro Chip 16GB RAM, 512GB (2021 Model)',
      image: 'https://user-images.githubusercontent.com/30352484/192147162-ca94a124-d23f-401b-9ae6-69b2103412bd.png'
    },
    {
      id: '2',
      name: 'Apple MacBook Pro 14" M1 Pro Chip 16GB RAM, 512GB (2021 Model)',
      image: 'https://user-images.githubusercontent.com/30352484/192147162-ca94a124-d23f-401b-9ae6-69b2103412bd.png'
    },
    {
      id: '3',
      name: 'Apple MacBook Pro 14" M1 Pro Chip 16GB RAM, 512GB (2021 Model)',
      image: 'https://user-images.githubusercontent.com/30352484/192147162-ca94a124-d23f-401b-9ae6-69b2103412bd.png'
    }
];
  

const List = () => {

    return (
        <Wrap>
            { allModels.map((model) => <ListItem model={model} />)}
        </Wrap>
    )
}

export default List;