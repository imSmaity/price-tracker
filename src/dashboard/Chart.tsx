import IconButton from "../components/IconButton";
import expand from "../assets/icons/expand.png";
import collapse from "../assets/icons/collapse.png";
import add from "../assets/icons/add.png";
import Button from "../components/Button";
import useChart from "../hooks/useChart";
import Modal from "../components/Modal";
import Select from "../components/Select";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import Api from "../Api";
import { getTimestampsFromNow } from "../utils/getTimestampsFromNow";

interface IChartProps {
  defaultCoin: string;
}

type TRange = {
  from: string | number;
  to: string | number;
  label: string;
  dataLimit?: number;
};

const timeFrames = [
  { label: "1h", dataLimit: 50 },
  { label: "1d", dataLimit: 400 },
  { label: "1w", dataLimit: 3000 },
  { label: "2w", dataLimit: 6500 },
  { label: "3w", dataLimit: 10000 },
  { label: "1m", dataLimit: 14500 },
];

const coinList = [
  { label: "Select", value: "" },
  { label: "Ethereum", value: "Ethereum" },
  { label: "Cardano", value: "Cardano" },
  { label: "Solana", value: "Solana" },
  { label: "Polkadot", value: "Polkadot" },
  { label: "Ripple", value: "XRP" },
  { label: "Litecoin", value: "Litecoin" },
  { label: "Avalanche", value: "Avalanche" },
  { label: "Chainlink", value: "Chainlink" },
  { label: "Binance Coin", value: "BNB" },
  { label: "Tezos", value: "Tezos" },
];

const { currentTimestamp, pastTimestamp } = getTimestampsFromNow();
const initialRange: TRange = {
  label: "1w",
  from: pastTimestamp,
  to: currentTimestamp,
  dataLimit: 3000,
};

const Chart = ({ defaultCoin }: IChartProps) => {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [isCompareOpen, setIsCompareOpen] = useState<boolean>(false);
  const [range, setRange] = useState<TRange>(initialRange);
  const [historyData, setHistoryData] = useState();
  const [otherHistoryData, setOtherHistoryData] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [comparisonCoin, setComparisonCoin] = useState<string>("");
  const { chartRef } = useChart(
    historyData,
    otherHistoryData,
    isFullScreen,
    defaultCoin,
    comparisonCoin
  );

  const fetchCoinHistoryData = (
    { from, to, label, dataLimit = 1000 }: TRange,
    setOthersCoinData?: Function,
    coin: string = defaultCoin
  ) => {
    setLoading(true);
    setRange({ from, to, label, dataLimit });
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
    fetchCoinHistoryData(range);
  }, []);

  const handleOpenCompareModal = () => setIsCompareOpen(!isCompareOpen);
  const handleFullScreen = () => setIsFullScreen(!isFullScreen);

  const handleChangeTimeFrame = (timeFrame: string, dataLimit: number) => {
    if (range.label === timeFrame) return;
    const { currentTimestamp, pastTimestamp } = getTimestampsFromNow(timeFrame);

    fetchCoinHistoryData({
      from: pastTimestamp,
      to: currentTimestamp,
      label: timeFrame,
      dataLimit: dataLimit,
    });

    if (comparisonCoin) {
      fetchCoinHistoryData(
        {
          from: pastTimestamp,
          to: currentTimestamp,
          label: timeFrame,
          dataLimit: dataLimit,
        },
        setOtherHistoryData,
        comparisonCoin
      );
    }
  };

  const handleAddComparison = () => {
    fetchCoinHistoryData(range, setOtherHistoryData, comparisonCoin);
    setIsCompareOpen(false);
  };

  return (
    <div
      className={
        isFullScreen
          ? "absolute top-[50px] left-0 w-full p-10 bg-white"
          : "pt-14"
      }
    >
      <div className="flex justify-between">
        <div className="flex gap-10">
          <IconButton
            icon={isFullScreen ? collapse : expand}
            title={isFullScreen ? "Exit Fullscreen" : "Fullscreen"}
            handleClick={handleFullScreen}
          />
          <IconButton
            icon={add}
            title="Compare"
            handleClick={handleOpenCompareModal}
          />
          <Modal
            open={isCompareOpen}
            onClose={handleOpenCompareModal}
            primaryButton={{ handleClick: handleAddComparison }}
            secondaryButton={{ handleClick: handleOpenCompareModal }}
            className="right-[150px] top-10"
          >
            <Select
              options={coinList}
              value={comparisonCoin}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setComparisonCoin(e.target.value)
              }
            />
          </Modal>
        </div>
        <div className="flex gap-10">
          {timeFrames.map((timeFrame) => (
            <Button
              key={timeFrame.label}
              isActive={range.label === timeFrame.label}
              title={timeFrame.label}
              handleClick={() =>
                handleChangeTimeFrame(timeFrame.label, timeFrame.dataLimit)
              }
            />
          ))}
        </div>
      </div>
      <div
        ref={chartRef}
        className={isFullScreen ? "h-[650px] w-full" : "h-[500px] w-full"}
      ></div>
    </div>
  );
};

export default Chart;
