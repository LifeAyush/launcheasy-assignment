import "./stats.css";
import { StatsData } from "./StatsData";

export default function Stats() {
  return (
    <div className="stats">
      <div className="stats-text">
        Accelerate growth. Maximize savings. Reduce efforts.
      </div>
      <div className="stats-flex">
        {StatsData.map((stat) => {
          return (
            <div className="stats-item" key={stat.id}>
              <div className="stats-item-text">{stat.text}</div>
              <div className="stats-item-subtext">{stat.subtext}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
