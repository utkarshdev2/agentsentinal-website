import { stats } from "../data/constants";

export default function StatsBar() {
  return (
    <div className="stats-bar">
      {stats.map(({ num, label }) => (
        <div key={label} className="stat-item">
          <div className="stat-num">{num}</div>
          <div className="stat-label">{label}</div>
        </div>
      ))}
    </div>
  );
}
