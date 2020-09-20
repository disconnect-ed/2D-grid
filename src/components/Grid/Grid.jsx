import React from "react";
import { VictoryChart, VictoryScatter, VictoryTheme } from 'victory';


export const Grid = ({data}) => {
    return (
        <div className="grid">
            <VictoryChart
                theme={VictoryTheme.material}
                domain={{ x: [0, 10], y: [0, 10] }}
            >
                <VictoryScatter
                    style={{ data: { fill: ({index}) => data[index].fill ?  data[index].fill : 'black'} }}
                    size={5}
                    data={data}
                />
            </VictoryChart>
        </div>
    )
}