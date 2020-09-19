import React from "react";
import {Grid} from "./Grid";
import {data} from '../../db/db'

export const GridContainer = () => {

    return (
        <Grid data={data} />
    )
}