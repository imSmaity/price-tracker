import { constant } from "../config/constant";

interface ITabsProps {
  activeTab: string;
  setActiveTab: Function;
  activeTabs: string[];
}

const Tabs = ({ activeTab, setActiveTab, activeTabs }: ITabsProps) => {
  const getClassName = (tabId: string) =>
    `${
      tabId === activeTab ? "border-b-[3px]" : "text-tab"
    } border-primary p-3 pb-6 cursor-pointer ${
      tabId === constant.tabs.settings.id
        ? ""
        : activeTabs.includes(tabId)
        ? ""
        : "hidden"
    }`;

  return (
    <div className="">
      <div className="flex gap-8 border-b">
        <div
          onClick={() => setActiveTab(constant.tabs.summary.id)}
          className={getClassName(constant.tabs.summary.id)}
        >
          {constant.tabs.summary.label}
        </div>
        <div
          onClick={() => setActiveTab(constant.tabs.chart.id)}
          className={getClassName(constant.tabs.chart.id)}
        >
          {constant.tabs.chart.label}
        </div>
        <div
          onClick={() => setActiveTab(constant.tabs.statistics.id)}
          className={getClassName(constant.tabs.statistics.id)}
        >
          {constant.tabs.statistics.label}
        </div>
        <div
          onClick={() => setActiveTab(constant.tabs.analysis.id)}
          className={getClassName(constant.tabs.analysis.id)}
        >
          {constant.tabs.analysis.label}
        </div>
        <div
          onClick={() => setActiveTab(constant.tabs.settings.id)}
          className={getClassName(constant.tabs.settings.id)}
        >
          {constant.tabs.settings.label}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
