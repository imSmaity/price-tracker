import ToggleButton from "../components/ToggleButton";

interface ISettingsProps {
  tabs: string[];
  ids: string[];
  setIds: Function;
}

const Settings = ({ tabs, ids, setIds }: ISettingsProps) => {
  const cotainerClassName = "flex justify-between";
  const labelClassName = "text-base text-secondary capitalize";
  const valueClassName = "text-base";

  const handleSettings = (clickedTab: string) => {
    let newTabs = ids;

    if (ids.includes(clickedTab)) {
      newTabs = ids.filter((tab) => tab !== clickedTab);
    } else {
      newTabs.push(clickedTab);
    }

    setIds([...newTabs]);
  };

  const isTabInclude = (tab: string) => ids.includes(tab);

  return (
    <div className="flex flex-col pt-10 gap-7 max-w-[500px]">
      <div className="flex gap-3">
        <div className="text-lg">Tabs settings</div>
      </div>
      {tabs.map((tab) => (
        <div key={tab} className={cotainerClassName}>
          <div className={labelClassName}>{tab}</div>
          <div className={valueClassName}>
            <ToggleButton
              isToggled={isTabInclude(tab)}
              setIsToggled={() => handleSettings(tab)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Settings;
