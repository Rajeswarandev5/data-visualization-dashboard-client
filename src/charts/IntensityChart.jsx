import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

const staticData = [
  { country: "USA", intensity: 6 },
  { country: "India", intensity: 8 },
  { country: "Canada", intensity: 4 },
  { country: "Germany", intensity: 7 },
  { country: "UK", intensity: 5 }
];

const IntensityChart = ({ data }) => {

  const chartData =
    data && data.length > 0
      ? data
          .filter(item => item.country)
          .slice(0, 5)
          .map(item => ({
            country: item.country,
            intensity: item.intensity || 0
          }))
      : staticData;

  return (

    <div className="chart-container">

      <h2>Intensity by Country</h2>

      <div style={{ width: "100%", height: 400 }}>

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={chartData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="country" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="intensity"
              fill="#2563eb"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default IntensityChart;