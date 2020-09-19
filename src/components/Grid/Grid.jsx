import React from "react";
import { VictoryChart, VictoryScatter, VictoryTheme } from 'victory';


export const Grid = ({data}) => {
    return (
        <div className="grid">
            <VictoryChart
                theme={VictoryTheme.material}
                domain={{ x: [0, 5], y: [0, 5] }}
            >
                <VictoryScatter
                    style={{ data: { fill: "#c43a31" } }}
                    size={5}
                    data={data}
                />
            </VictoryChart>
        </div>
    )
}