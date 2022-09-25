import React from 'react';
import { Wrap } from '@chakra-ui/react';
import ListItem from './ListItem';

export interface Model {
    id: number;
    name: string;
    image: string;
}

const modelData: Model[] = [
    {
      id: 0,
      name: 'Apple MacBook Pro 14" M1 Pro Chip 16GB RAM, 512GB (2021 Model)',
      image: 'https://user-images.githubusercontent.com/30352484/192143144-4051e29d-0c83-4ef9-9374-7f3c662ffcda.png'
    },
    {
      id: 1,
      name: 'Apple MacBook Pro 14" M1 Pro Chip 16GB RAM, 512GB (2021 Model)',
      image: 'https://user-images.githubusercontent.com/30352484/192143144-4051e29d-0c83-4ef9-9374-7f3c662ffcda.png'
    },
    {
      id: 2,
      name: 'Apple MacBook Pro 14" M1 Pro Chip 16GB RAM, 512GB (2021 Model)',
      image: 'https://user-images.githubusercontent.com/30352484/192143144-4051e29d-0c83-4ef9-9374-7f3c662ffcda.png'
    },
    {
      id: 3,
      name: 'Apple MacBook Pro 14" M1 Pro Chip 16GB RAM, 512GB (2021 Model)',
      image: 'https://user-images.githubusercontent.com/30352484/192143144-4051e29d-0c83-4ef9-9374-7f3c662ffcda.png'
    }
];
  

const List = () => {

    const [ models, setModels ] = React.useState<Model[]>([]);

    //Simulate a fetch request
    React.useEffect(() => {
      setTimeout(() => {
        setModels(modelData);
      }, 2000)
    });

    return (
        <Wrap>
            { models.map((model) => <ListItem model={model} />)}
        </Wrap>
    )
}

export default List;