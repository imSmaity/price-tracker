import { useEffect, useState } from "react";
import Price from "../components/Price";
import Tabs from "../components/Tabs";
import { constant } from "../config/constant";
import Analysis from "./Analysis";
import Chart from "./Chart";
import Settings from "./Settings";
import Statistics from "./Statistics";
import Summary from "./Summary";
import Api from "../Api";
import { CryptoData } from "../types/types";
import Loading from "../components/Loading";

const initialTabs = [
  constant.tabs.summary.id,
  constant.tabs.chart.id,
  constant.tabs.statistics.id,
  constant.tabs.analysis.id,
];

const Main = () => {
  //Active tab state
  const [activeTab, setActiveTab] = useState<string>(constant.tabs.chart.id);
  const [coinData, setCoinData] = useState<CryptoData | null>(null);
  const [ids, setIds] = useState<string[]>(initialTabs);

  const [loading, setLoading] = useState<boolean>(false);
  const defaultCoin = "Bitcoin";

  const fetchCoinData = () => {
    setLoading(true);
    Api.getLatestCoinData(defaultCoin)
      .then((res: any) => {
        setCoinData(res?.data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchCoinData();
  }, []);

  //List of tabs
  const tabs = {
    [constant.tabs.summary.id]: <Summary data={coinData} />,
    [constant.tabs.chart.id]: <Chart defaultCoin={defaultCoin} />,
    [constant.tabs.statistics.id]: <Statistics data={coinData} />,
    [constant.tabs.analysis.id]: <Analysis defaultCoin={defaultCoin} />,
    [constant.tabs.settings.id]: (
      <Settings tabs={initialTabs} ids={ids} setIds={setIds} />
    ),
  };

  return (
    <div className="p-20">
      <Price price={coinData?.price} priceChange={coinData?.price_change_1h} />
      <div className="pt-10">
        <Tabs
          activeTab={activeTab}
          activeTabs={ids}
          setActiveTab={setActiveTab}
        />
        {loading ? <Loading /> : tabs[activeTab]}
      </div>
    </div>
  );
};

export default Main;
