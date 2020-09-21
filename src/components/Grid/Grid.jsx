import React from "react";
import { VictoryChart, VictoryScatter, VictoryTheme } from 'victory';


export const Grid = ({data}) => {
    return (
        <div className="grid">
            <VictoryChart
                theme={VictoryTheme.material}
                domain={{ x: [0, 10], y: [0, 10] }}
                animate={{duration: 1000}}
            >
                <VictoryScatter
                    size={5}
                    data={data}
                    style={{ data: { fill: ({datum}) => datum.fill ?  datum.fill : 'black'} }}
                />
            </VictoryChart>
        </div>
    )
}