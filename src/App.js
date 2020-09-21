import React, {useState} from 'react';
import './App.scss';
import {GridContainer} from "./components/Grid/GridContainer";
import {ToggleMenu} from "./components/Menu/ToggleMenu";
import {MenuContainer} from "./components/Menu/MenuContainer";
import {Message} from "./components/common/Message/Message";

function App() {
    const [menuOpen, toggleMenuOpen] = useState(true)
    const [data, setData] = useState(
        [
            {x: 1, y: 1},
            {x: 2, y: 2, fill: 'pink'},
            {x: 3, y: 3, fill: 'gold'}
        ]
    )
    const [message, setMessage] = useState('')
    return (
        <div className="App">
            <MenuContainer setMessage={(message) => setMessage(message)} menuOpen={menuOpen} data={data}
                           setData={setData} toggleMenuOpen={toggleMenuOpen} />
            <GridContainer data={data}/>
            <Message message={message}/>
        </div>
    );
}

export default App;
