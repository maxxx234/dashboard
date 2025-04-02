import React from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, ScatterChart, Scatter, ZAxis } from 'recharts';

function ChartDisplay() {
  const { data, loading, error } = useSelector((state) => state.query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!data.data?.length) return null;

  return (
    <div>
      {data.chartType === 'bar' ? (
        <BarChart width={400} height={300} data={data.data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#82ca9d" />
        </BarChart>
      ) : data.chartType === 'pie' ? (
        <PieChart width={400} height={300}>
          <Pie data={data.data} dataKey="value" nameKey="name" fill="#82ca9d" label />
          <Tooltip />
        </PieChart>
      ) : data.chartType === 'bubble' ? (
        <ScatterChart width={400} height={300}>
          <XAxis dataKey="name" />
          <YAxis dataKey="value" />
          <ZAxis dataKey="size" range={[60, 400]} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="Bubble Data" data={data.data} fill="#8884d8" />
        </ScatterChart>
      ) : null}
    </div>
  );
}

export default ChartDisplay;

