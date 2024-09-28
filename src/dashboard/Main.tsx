import { useState } from "react";
import Price from "../components/Price";
import Tabs from "../components/Tabs";
import { constant } from "../config/constant";
import Analysis from "./Analysis";
import Chart from "./Chart";
import Settings from "./Settings";
import Statistics from "./Statistics";
import Summary from "./Summary";

const Main = () => {
  //Active tab state
  const [activeTab, setActiveTab] = useState<string>(constant.tabs.chart.id);

  //List of tabs
  const tabs = {
    [constant.tabs.summary.id]: <Summary />,
    [constant.tabs.chart.id]: <Chart />,
    [constant.tabs.statistics.id]: <Statistics />,
    [constant.tabs.analysis.id]: <Analysis />,
    [constant.tabs.settings.id]: <Settings />,
  };

  return (
    <div className="p-20">
      <Price />
      <div className="pt-10">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {tabs[activeTab]}
      </div>
    </div>
  );
};

export default Main;
