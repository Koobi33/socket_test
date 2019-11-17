import React, {useEffect} from 'react';
import * as io from 'socket.io-client';
import logo from './logo.svg';
import './App.css';
import Detect from './Components/Detect';
import Violations from './Components/Violations';
import Main from './Components/Main';
import Header from './Components/Header';

function App() {
    const socket = io('http://localhost:5000');
    useEffect(() => {
        // On connection
        socket.on('connect', () => {
            console.log('connected');

        });
        // Connection failed
        socket.on('error', function (err) {
            console.log(err);
            throw new Error(err);
        });
       
    }, []);

    return (
        <div className="App">
            <Header/>
            <div style={{display: 'flex'}}>
                <Violations/>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <Main socket={socket}/>
                    <Detect/>
                </div>
            </div>
        </div>
    );
}

export default App;
