import React from "react";
import {Grid} from "./Grid";

export const GridContainer = ({data}) => {
    // const [loading, isLoading] = useState(false)
    //
    // useEffect(() => {
    //     renderGrid()
    // }, [data])
    //
    // const renderGrid = () => {
    //     const renderEl = document.querySelector('.grid')
    //     isLoading(true)
    //
    //     setTimeout(() => {
    //         isLoading(false)
    //     }, 1000)
    // }
    //
    // if (loading) return <div>abc</div>

    return (
        <Grid data={data}/>
    )
}