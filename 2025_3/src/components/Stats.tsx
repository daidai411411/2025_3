type StatsProps = {
  value: number | null;
};

function Stats({ value }: StatsProps) {
  return <div className="stats-item">{value}</div>;
}

export default Stats;
