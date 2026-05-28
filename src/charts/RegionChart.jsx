import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts";

const staticData = [
  { name: "Asia", value: 10 },
  { name: "Europe", value: 8 },
  { name: "America", value: 12 },
  { name: "Africa", value: 5 }
];

const COLORS = [
  "#2563eb",
  "#16a34a",
  "#dc2626",
  "#ca8a04"
];

const RegionChart = ({ data }) => {

  const chartData =
    data && data.length > 0
      ? data
          .filter(item => item.region)
          .slice(0, 5)
          .map(item => ({
            name: item.region,
            value: item.intensity || 1
          }))
      : staticData;

  return (

    <div className="chart-container">

      <h2>Region Distribution</h2>

      <div style={{ width: "100%", height: 400 }}>

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              outerRadius={140}
              label
            >

              {
                chartData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))
              }

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default RegionChart;