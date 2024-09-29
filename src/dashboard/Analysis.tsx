import React, { useEffect, useState } from "react";
import useChart from "../hooks/useChart";
import { TRange } from "../types/types";
import { getTimestampsFromNow } from "../utils/getTimestampsFromNow";
import Api from "../Api";
import Loading from "../components/Loading";

interface IAnalysisProps {
  defaultCoin: string;
}

const searchedKeys = ["time", "high", "close", "low"];
const searchedKeys2 = ["time", "open", "open", "close"];

const Analysis = ({ defaultCoin }: IAnalysisProps) => {
  const [historyData, setHistoryData] = useState();
  const [otherHistoryData, setOtherHistoryData] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { chartRef } = useChart(
    historyData,
    historyData,
    false,
    "High",
    "Low",
    false,
    searchedKeys
  );
  const chart = useChart(
    otherHistoryData,
    otherHistoryData,
    false,
    "Open",
    "Close",
    false,
    searchedKeys2
  );

  const { currentTimestamp, pastTimestamp } = getTimestampsFromNow();
  const range: TRange = {
    label: "1w",
    from: pastTimestamp,
    to: currentTimestamp,
    dataLimit: 2500,
  };

  const fetchCoinHistoryData = (
    { from, to, label, dataLimit = 1000 }: TRange,
    setOthersCoinData?: Function,
    coin: string = defaultCoin
  ) => {
    setLoading(true);
    Api.getCoinHistoryData(coin, from, to, dataLimit)
      .then((res: any) => {
        if (setOthersCoinData) {
          setOthersCoinData(res?.data);
        } else setHistoryData(res?.data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchCoinHistoryData({ ...range, dataLimit: 4000 }, setOtherHistoryData);
    fetchCoinHistoryData(range);
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col gap-8 pt-10">
      <div className="text-lg">{`${defaultCoin} analytics`}</div>
      <div className="flex gap-20">
        <div className="flex flex-col rounded-md h-[450px] w-full">
          <div className=" text-secondary">Higher and lower prices</div>
          <div ref={chart.chartRef} className={"h-[450px] w-full"}></div>
        </div>
        <div className="flex flex-col rounded-md h-[450px] w-full">
          <div className=" text-secondary">Open and closing prices</div>
          <div ref={chartRef} className={"h-[450px] w-full"}></div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
