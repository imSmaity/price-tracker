import * as echarts from "echarts";
import { useEffect, useRef } from "react";

const useChart = (
  data,
  comparisonData,
  isFullScreen,
  yAxis_1,
  yAxis_2,
  isBarShow,
  searchedKeys
) => {
  const chartRef = useRef(null);

  const xAxisData = Array.isArray(data)
    ? data.map((item) => new Date(item[searchedKeys[0]]).toLocaleString())
    : [];

  const yAxisData = Array.isArray(data)
    ? data.map((item) => {
        if (item[searchedKeys[1]]) {
          return Number(item[searchedKeys[1]].toFixed(5));
        }
        return 0;
      })
    : [];

  const volumeData = Array.isArray(data)
    ? data.map((item) => {
        if (item[searchedKeys[2]]) {
          return Number(item[searchedKeys[2]].toFixed(5));
        }
        return 0;
      })
    : [];

  const yAxisData2 = Array.isArray(comparisonData)
    ? comparisonData.map((item) => {
        if (item[searchedKeys[3]]) {
          return Number(item[searchedKeys[3]].toFixed(5));
        }
        return 0;
      })
    : [];

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const options = {
      tooltip: {
        trigger: "axis",
      },
      xAxis: {
        type: "category",
        data: xAxisData,
        axisLabel: {
          show: false,
        },
      },
      yAxis: [
        {
          type: "value",

          axisLabel: {
            show: false,
          },
        },
        {
          type: "value",
          axisLabel: {
            show: false,
          },
        },
        {
          type: "value",
          axisLabel: {
            show: false,
          },
        },
      ],
      series: [
        {
          name: yAxis_1,
          data: yAxisData,
          type: "line",
          smooth: true,
          lineStyle: {
            color: "#4B40EE",
          },
          areaStyle: {
            color: "#E8E7FF",
          },
          symbol: "none",
          yAxisIndex: 0,
        },

        {
          name: yAxis_2,
          data: yAxisData2,
          type: "line",
          smooth: true,
          lineStyle: {
            color: "#2CA02C",
          },
          symbol: "none",
          yAxisIndex: 2,
        },
      ],
      grid: {
        left: "0%",
        right: "0%",
        bottom: "10%", // Adjust grid spacing at the bottom to fit the bar chart
        containLabel: false,
      },
      dataZoom: [
        {
          type: "inside",
          start: 0,
          end: 100,
        },
      ],
    };

    if (isBarShow) {
      options.series.push({
        name: "Volume",
        data: volumeData,
        type: "bar",
        barWidth: "50%",
        yAxisIndex: 1,
        itemStyle: {
          color: "#7a7c7d",
        },
      });
    }

    chartInstance.setOption(options);
    const handleResize = () => {
      chartInstance.resize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chartInstance.dispose(); // Dispose chart on unmount
    };
  }, [isFullScreen, data, isBarShow, comparisonData]);

  return { chartRef };
};

export default useChart;
