import React, {useState} from 'react';
import './App.scss';
import {GridContainer} from "./components/Grid/GridContainer";
import {ToggleMenu} from "./components/Menu/ToggleMenu";
import {MenuContainer} from "./components/Menu/MenuContainer";

function App() {
    const [menuOpen, toggleMenuOpen] = useState(false)
    return (
        <div className="App">
            <ToggleMenu menuOpen={menuOpen} toggleMenuOpen={toggleMenuOpen}/>
            <MenuContainer menuOpen={menuOpen}/>
            <GridContainer/>
        </div>
    );
}

export default App;
