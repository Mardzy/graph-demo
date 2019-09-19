import React from "react";
import { VictoryAxis, VictoryBar, VictoryChart } from "victory";

export const BarChart = props => {

  return (
    <VictoryChart domainPadding={15}>
      <VictoryAxis
        style={{ tickLabels: { fontSize: 4.5 } }}
      />
      <VictoryAxis
        dependentAxis
        label="Height(cm)"
        style={{axisLabel: { padding: 40 } }}
      />
      <VictoryBar
        data={props.people}
        x="name"
        y="height"
        style={{
          text: {fontSize:"8px"},
          data: { fill: "#c43a31" }
        }}
      />
    </VictoryChart>
  );
};