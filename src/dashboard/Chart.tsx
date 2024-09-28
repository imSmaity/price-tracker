import IconButton from "../components/IconButton";
import expand from "../assets/icons/expand.png";
import add from "../assets/icons/add.png";
import Button from "../components/Button";
import useChart from "../hooks/useChart";

const Chart = () => {
  const { chartRef } = useChart();
  return (
    <div className="pt-14">
      <div className="flex justify-between">
        <div className="flex gap-10">
          <IconButton icon={expand} title="Fullscreen" handleClick={() => {}} />
          <IconButton icon={add} title="Compare" handleClick={() => {}} />
        </div>
        <div className="flex gap-10">
          <Button title="1d" handleClick={() => {}} />
          <Button title="3d" handleClick={() => {}} />
          <Button title="1w" handleClick={() => {}} />
          <Button title="1m" handleClick={() => {}} />
          <Button title="6m" handleClick={() => {}} />
          <Button title="1y" handleClick={() => {}} />
          <Button title="max" handleClick={() => {}} />
        </div>
      </div>
      <div ref={chartRef} className="h-[500px]"></div>
    </div>
  );
};

export default Chart;
