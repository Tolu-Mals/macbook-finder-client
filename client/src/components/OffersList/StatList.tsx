import { HStack } from '@chakra-ui/react';
import StatItem from './StatItem';
import { Statistic } from '.';

interface Props {
  statistics: Statistic[]
}
const StatList = (props: Props) => {
  const { statistics } = props;
  return (
    <HStack>
      { statistics.map((statistic,) => {
        return <StatItem statistic={statistic} key={statistic.label} />
      })}
    </HStack>
  )
}

export default StatList;