import React, {useEffect} from 'react';
import * as io from 'socket.io-client';
import logo from './logo.svg';
import './App.css';
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
  socket.on('test', (data) =>{
    console.log(data);
})
}, []);

  return (
    <div className="App">
    <Header />
    <Main socket={socket} />

    </div>
  );
}

export default App;
