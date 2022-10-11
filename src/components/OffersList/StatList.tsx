import * as React from 'react';
import { HStack } from '@chakra-ui/react';
import StatItem from './StatItem';
import { Statistic } from '.';

interface Props {
  statistics: Statistic[]
}

const StatList = (props: Props) => {
  const { statistics } = props;
  return (
    <HStack justifyContent="space-between">
      { statistics.map((statistic, index) => {
        return <StatItem statistic={statistic} key={statistic.label} color={index} />;
      })}
    </HStack>
  )
}

export default StatList;