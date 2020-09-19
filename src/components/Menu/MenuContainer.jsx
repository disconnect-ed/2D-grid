import React, {useState} from "react";
import {Menu} from "./Menu";

export const MenuContainer = ({menuOpen}) => {
    const [addObject, addObjectIsActive] = useState(false)
    return (
        <Menu menuOpen={menuOpen} addObject={addObject} addObjectIsActive={addObjectIsActive}/>
    )
}