import { VStack, Tag, Text} from '@chakra-ui/react';
import { Statistic } from '.';

interface Props {
  statistic: Statistic
}

const StatItem = (props: Props) => {
  const { statistic } = props;
  const { label, value } = statistic;

  return (
    <VStack>
      <Tag variant="subtle">{label}</Tag>
      <Text>{value}</Text>
    </VStack>
  )
}

export default StatItem;