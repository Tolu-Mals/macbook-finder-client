import { VStack, Tag, Text} from '@chakra-ui/react';
import { Statistic } from '.';

interface Props {
  statistic: Statistic;
  color: number;
}

const colors = ["purple", "pink", "yellow"];

const StatItem = (props: Props) => {
  const { statistic, color } = props;
  const { label, value } = statistic;

  return (
    <VStack>
      <Tag variant="subtle" colorScheme={colors[color]}>{label}</Tag>
      <Text>{value}</Text>
    </VStack>
  )
}

export default StatItem;