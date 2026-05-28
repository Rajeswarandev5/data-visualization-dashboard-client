import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

const staticData = [
  { topic: "Energy", relevance: 4 },
  { topic: "Oil", relevance: 7 },
  { topic: "Gas", relevance: 5 },
  { topic: "Economy", relevance: 8 },
  { topic: "Climate", relevance: 6 }
];

const TopicChart = ({ data }) => {

  const chartData =
    data && data.length > 0
      ? data
          .filter(item => item.topic)
          .slice(0, 5)
          .map(item => ({
            topic: item.topic,
            relevance: item.relevance || 0
          }))
      : staticData;

  return (

    <div className="chart-container">

      <h2>Topic Relevance</h2>

      <div style={{ width: "100%", height: 400 }}>

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={chartData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="topic" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="relevance"
              stroke="#2563eb"
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default TopicChart;