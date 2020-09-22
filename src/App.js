import React, {useState} from 'react';
import './App.scss';
import {MenuContainer} from "./components/Menu/MenuContainer";
import {Message} from "./components/common/Message/Message";
import {Grid} from "./components/Grid/Grid";

function App() {
    const [menuOpen, toggleMenuOpen] = useState(true)
    const [data, setData] = useState(
        [
            {x: 1, y: 1, fill: '#000000', symbol: 'circle'},
            {x: 2, y: 2, fill: '#ffc0cb', symbol: 'circle'},
            {x: 3, y: 3, fill: '#ffd700', symbol: 'circle'}
        ]
    )
    const [message, setMessage] = useState('')
    return (
        <div className="App">
            <MenuContainer setMessage={(message) => setMessage(message)} menuOpen={menuOpen} data={data}
                           setData={setData} toggleMenuOpen={toggleMenuOpen} />
            <Grid data={data}/>
            <Message message={message}/>
        </div>
    );
}

export default App;
