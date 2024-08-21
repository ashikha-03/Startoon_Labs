// Progress.js
import React from 'react';

function Progress() {
  return (
    <div className="progress-container">
      <h4 className="goal-reached">Goal Reached</h4>
      <div className="progress-circle">
        <div className="progress-value">40%</div>
      </div>
      <div className="metrics">
        <div className="metric">
          <div className="metric-label">EMG</div>
          <svg width="50" height="30" className="metric-chart">
            <polyline
              points="0,15 10,10 20,20 30,5 40,15 50,10"
              style={{ fill: "none", stroke: "#37DD0D", strokeWidth: 2 }}
            />
          </svg>
        </div>
        <div className="metric">
          <div className="metric-label">ROM</div>
          <svg width="50" height="30" className="metric-chart">
            <polyline
              points="0,20 10,15 20,25 30,10 40,20 50,5"
              style={{ fill: "none", stroke: "#FC0100", strokeWidth: 2 }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Progress;
