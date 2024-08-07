import { colors } from "../../constant/data";
import useDarkMode from "../../hooks/useDarkMode";
import ApexChart from "react-apexcharts";

const Calculation = ({ height = 335 }) => {
  const [isDark] = useDarkMode();
  const series = [70, 30];

  const options = {
    labels: ["70% Men", "30% Women"],
    dataLabels: {
      enabled: true,
    },

    colors: [colors.success, "#A3A1FB"],
    legend: {
      position: "bottom",
      fontSize: "12px",
      fontFamily: "Inter",
      fontWeight: 400,
      labels: {
        colors: isDark ? "#CBD5E1" : "#475569",
      },
      markers: {
        width: 6,
        height: 6,
        offsetY: -1,
        offsetX: -5,
        radius: 12,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 0,
      },
    },

    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <>
      <ApexChart
        // @ts-ignore
        options={options}
        series={series}
        type="pie"
        height={height}
      />
    </>
  );
};

export default Calculation;
