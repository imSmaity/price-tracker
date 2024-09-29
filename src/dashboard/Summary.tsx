import { CryptoData } from "../types/types";

interface ISummaryProps {
  data: CryptoData | null;
}

const Summary = ({ data }: ISummaryProps) => {
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
      <div className="flex gap-3">
        <img src={data?.logo} alt="Logo" className="h-10 w-10 items-center" />
        <div className="text-lg">{data?.name}</div>
      </div>
      <div className={cotainerClassName}>
        <div className={labelClassName}>Rank</div>
        <div className={valueClassName}>{data?.rank}</div>
      </div>
      <div className={cotainerClassName}>
        <div className={labelClassName}>Market cap</div>
        <div className={valueClassName}>${data?.market_cap}</div>
      </div>
      <div className={cotainerClassName}>
        <div className={labelClassName}>Volume</div>
        <div className={valueClassName}>${data?.volume}</div>
      </div>
      <div className={cotainerClassName}>
        <div className={labelClassName}>Volume (24h)</div>
        <div className={valueClassName}>
          {getValueWithCurrency(data?.volume_change_24h)}
        </div>
      </div>
      <div className={cotainerClassName}>
        <div className={labelClassName}>Volume (1w)</div>
        <div className={valueClassName}>
          {getValueWithCurrency(data?.volume_7d)}
        </div>
      </div>
      <div className={cotainerClassName}>
        <div className={labelClassName}>Off chain volume</div>
        <div className={valueClassName}>${data?.off_chain_volume}</div>
      </div>
      <div className={cotainerClassName}>
        <div className={labelClassName}>Circulating supply</div>
        <div className={valueClassName}>
          {data?.circulating_supply} {data?.symbol}
        </div>
      </div>
      <div className={cotainerClassName}>
        <div className={labelClassName}>Total supply</div>
        <div className={valueClassName}>
          {data?.total_supply} {data?.symbol}
        </div>
      </div>
      <div className={cotainerClassName}>
        <div className={labelClassName}>Market cap diluted</div>
        <div className={valueClassName}>{data?.market_cap_diluted}</div>
      </div>
    </div>
  );
};

export default Summary;
