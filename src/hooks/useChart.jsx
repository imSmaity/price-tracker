import * as echarts from "echarts";
import { useEffect, useRef } from "react";

const COLORS = [
  "#6C21CA", // Purple
  "#2CA02C", // Green
  "#FF7F0E", // Orange
  "#1F77B4", // Blue
  "#D62728", // Red
  "#8C564B", // Brown
  "#E377C2", // Pink
  "#7F7F7F", // Gray
  "#BCBD22", // Olive
  "#17BECF", // Teal
  "#F0E0F8", // Light Purple
  "#FFB6C1", // Light Pink
  "#00FA9A", // Medium Spring Green
  "#FFD700", // Gold
  "#FF4500", // Orange Red
];

const useChart = (data) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const options = {
      tooltip: {
        trigger: "axis",
      },
      xAxis: {
        type: "category",
        data: [
          "2024-09-22",
          "2024-09-25",
          "2024-09-24",
          "2024-09-25",
          "2024-09-24",
          "2024-09-25",
          "2024-09-25",
          "2024-09-24",
          "2024-09-25",
          "2024-09-24",
          "2024-09-25",
          "2024-09-25",
          "2024-09-24",
          "2024-09-25",
          "2024-09-24",
          "2024-09-25",
          "2024-09-23",
          "2024-09-24",
          "2024-09-25",
          "2024-09-24",
          "2024-09-25",
          "2024-09-24",
          "2024-09-25",
          "2024-09-24",
          "2024-09-25",
          "2024-09-24",
          "2024-09-25",
          "2024-09-24",
          "2024-09-25",
          "2024-09-24",
          "2024-09-25",
          "2024-09-24",
          "2024-09-25",
          "2024-09-26",
          "2024-09-27",
          "2024-09-28",
        ], // Dates for line char
        show: false,
      },
      yAxis: {
        type: "value",
        name: "",
        axisLabel: {
          show: false, // Hide y-axis labels
        },
      },
      series: [
        {
          name: "Price",
          data: [
            1, 63000, 2223, 65000, 442, 62500, 63179.71, 64000, 65000, 63000,
            62500, 63179.7164, 65000, 63000, 62500, 63179.7164, 65000, 63000,
            62500, 63179.71, 234, 62500, 145.7164, 65000, 3455, 62500, 134.7164,
            65000, 63000, 62500, 63179.71, 63000, 62500, 63179.7164, 65000,
            63000, 62500, 24.7164, 65000, 63000, 62500, 63179.71, 63000, 62500,
            63179.7164, 222, 63000, 62500, 63179.7164, 65000, 63000, 62500,
            63233179.71, 2234, 234, 63179.7164, 344, 63000, 62500, 63179.7164,
            65000, 63000, 62500, 63179.71, 63000, 4455, 63179.7164, 65000,
            63000, 62500, 63179.7164, 65000, 63000, 1, 10.71,
          ],
          type: "line",
          smooth: true,
          lineStyle: {
            color: "#4B40EE",
          },
          areaStyle: {
            color: "#E8E7FF", // Light background color under the line
          },
          symbol: "none",
          yAxisIndex: 0,
        },
        {
          name: "Volume",
          data: [
            1, 700, 600, 344, 700, 444, 900, 800, 700, 600, 900, 800, 700, 600,
            900, 800, 700, 600, 900, 800, 2343, 600, 900,
          ], // Example data for bar chart
          type: "bar",
          barWidth: "20%", // Width of the bars
          itemStyle: {
            color: "#4B40EE", // Bar color
          },
        },
      ],
      grid: {
        left: "0%",
        right: "0%",
        bottom: "3%",
        containLabel: false,
      },
      visualMap: {
        show: false,
        pieces: [
          {
            gt: 0,
            lte: 64000,
            color: "#4B40EE",
          },
          {
            gt: 64000,
            color: "#64b5f6",
          },
        ],
      },
      dataZoom: [
        {
          type: "inside",
          start: 0,
          end: 100,
        },
      ],
    };

    chartInstance.setOption(options);

    const handleResize = () => {
      chartInstance.resize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chartInstance.dispose(); // Dispose chart on unmount
    };
  }, []);

  return { chartRef };
};

export default useChart;
