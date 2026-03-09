import { PieChart, Pie, Tooltip } from "recharts";

export default function FinanceChart({ transactions }: any) {

  const data = transactions.map((t: any) => ({
    name: t.category,
    value: t.amount
  }));

  return (
    <div className="mb-6">

      <h2 className="text-xl mb-2">Spending Breakdown</h2>

      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={100}
        />
        <Tooltip />
      </PieChart>

    </div>
  );
}