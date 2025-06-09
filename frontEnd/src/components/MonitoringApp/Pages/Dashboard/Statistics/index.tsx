import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { adStats } from "@/const";

ChartJS.register(ArcElement, Tooltip, Legend);

const generateChartData = (dataSet: { name: string; quantity: number }[]) => ({
  labels: dataSet.map((item) => `${item.name} -${item.quantity}`),
  datasets: [
    {
      data: dataSet.map((item) => item.quantity),
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#8BC34A", "#9C27B0"],
      borderWidth: 1,
    },
  ],
});

export const AdStatsChart = () => {
  return (
    <div className="p-6">
      <CardTitle className="text-2xl font-bold mb-6">{adStats.title}</CardTitle>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(adStats.statistics).map(([subtitle, values]) => (
          <Card>
            <CardHeader key={subtitle} className="text-xl font-semibold mb-4">
              {subtitle}
            </CardHeader>
            <div className="h-[280px] mx-auto ">
              <Pie data={generateChartData(values)} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
