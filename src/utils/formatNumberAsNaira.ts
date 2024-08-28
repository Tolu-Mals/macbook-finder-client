export default function formatNumberAsNaira(amount: number) {
  const formatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  return formatter.format(amount)
}
