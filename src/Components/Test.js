import React, {useEffect} from 'react';
import * as io from 'socket.io-client';

const Test = () => {
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
  const handleImg = () => {
    socket.emit('parce_img');
  };

  return (
    <div>
      <h1 onClick={handleImg}>СЕМЁН - ГЕНИЙ!</h1>
    </div>
  );
};

export default Test;
