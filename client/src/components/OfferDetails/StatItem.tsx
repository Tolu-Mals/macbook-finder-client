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
    fontSize: 'md',
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 400,
  }

  const valueStyle = {
    fontSize: typeof value === "number" || label === "Price" ? '4xl': 'lg',
    fontWeight: 700,
    fontFamily: '"Poppins", sans-serif',
  }

  return (
    <chakra.div mr={8} mb={4}>
      <Text sx={labelStyle}>{label}</Text>
      <Text sx={valueStyle}>{value}</Text>
    </chakra.div>
  )
}

export default StatItem;