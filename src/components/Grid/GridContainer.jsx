import React from "react";
import {Grid} from "./Grid";

export const GridContainer = ({data, isAnimate}) => {

    if (isAnimate) return  <Grid animate={isAnimate} data={data}/>

    return <Grid data={data}/>
}