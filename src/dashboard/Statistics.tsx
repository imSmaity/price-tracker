import { CryptoData } from "../types/types";

interface IStatisticsProps {
  data: CryptoData | null;
}

const Statistics = ({ data }: IStatisticsProps) => {
  const cotainerClassName = "flex justify-between";
  const labelClassName = "text-base text-secondary";
  const valueClassName = "text-base";

  const getValueWithCurrency = (price: number | undefined) => {
    let splitPriceIs = String(price).split("");

    if (splitPriceIs[0] === "-") {
      splitPriceIs[0] = "-$";
    } else {
      splitPriceIs.unshift("$");
    }
    return splitPriceIs.join("");
  };

  return (
    <div className="flex flex-col pt-10 gap-7 max-w-[500px]">
      <div className="flex">
        <div className="text-lg">Price Information</div>
      </div>

      <div className={cotainerClassName}>
        <div className={labelClassName}>Price (1h)</div>
        <div className={valueClassName}>
          {getValueWithCurrency(data?.price_change_1h)}
        </div>
      </div>
      <div className={cotainerClassName}>
        <div className={labelClassName}>Price (24h)</div>
        <div className={valueClassName}>
          {getValueWithCurrency(data?.price_change_24h)}
        </div>
      </div>
      <div className={cotainerClassName}>
        <div className={labelClassName}>Price (7d)</div>
        <div className={valueClassName}>
          {getValueWithCurrency(data?.price_change_7d)}
        </div>
      </div>
      <div className={cotainerClassName}>
        <div className={labelClassName}>Price (1m)</div>
        <div className={valueClassName}>
          {getValueWithCurrency(data?.price_change_1m)}
        </div>
      </div>
      <div className={cotainerClassName}>
        <div className={labelClassName}>Current price</div>
        <div className={valueClassName}>
          {getValueWithCurrency(data?.price)}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
