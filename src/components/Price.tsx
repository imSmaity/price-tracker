import { formatNumber } from "../utils/numberUtils";

interface IPrice {
  price: number | undefined;
  priceChange: number | undefined;
}

const Price = ({ price, priceChange }: IPrice) => {
  const fixedPrice = Number.isNaN(Number(price)) ? 0 : Number(price);
  const fixedPriceChange = Number(priceChange);

  const priceLabel = formatNumber(fixedPrice);
  const fixedPriceLabel = formatNumber(fixedPriceChange, 5);

  const increasedPercentage = ((fixedPriceChange / fixedPrice) * 100).toFixed(
    5
  );

  const symbol = Number(fixedPriceLabel) < 0 ? "" : "+";

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-start">
        <div className="text-xl leading-5">{priceLabel}</div>
        <div className="text-secondary text-lg leading-4">USD</div>
      </div>
      <div className="text-profit text-base">{`${symbol} ${fixedPriceLabel} (${increasedPercentage}%)`}</div>
    </div>
  );
};

export default Price;
