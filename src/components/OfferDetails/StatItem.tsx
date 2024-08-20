import { Text, chakra } from '@chakra-ui/react';

interface Statistic {
  label: string;
  value: string | number | undefined;
}

interface Props {
  statistic: Statistic;
}

const StatItem = ({ statistic }: Props) => {
  const { label, value } = statistic;

  const labelStyle = {
    color: 'gray.400',
    fontSize: { base: 'sm', lg: 'md' },
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 400,
  }


  const valueStyle = {
    fontSize: 'xl',
    fontWeight: 700,
    fontFamily: '"Poppins", sans-serif',
    color: 'gray.600'
  }

  return (
    <chakra.div mr={8} mb={4}>
      <Text sx={labelStyle}>{label}</Text>
      <Text sx={valueStyle}>{Boolean(value) ? value : 'Not available'}</Text>
    </chakra.div>
  )
}

export default StatItem;
