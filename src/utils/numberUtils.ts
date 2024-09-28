export const formatNumber = (
  num: number,
  maximumFractionDigits: number = 2
): string => {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits,
  }).format(num);
};
