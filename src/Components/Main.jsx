import React, {useEffect, useState, useRef} from 'react';
import {useInterval} from 'react-use-timeout';
const Main = (props) => {
  const {socket} = props;
  const [image, setImage] = useState(myImg);
  const canvasRef = useRef(null);
  const imgRef = useRef(null);

  const drawRect = (color, x1, y1, x2, y2) => {
    socket.emit('parse_img');
    let canvas = canvasRef.current;
    let context = canvas.getContext('2d');
    context.beginPath();
    const width = 640 * (x2 - x1);
    const height = 480 * (y2 - y1);
    context.strokeStyle = color;
    context.strokeRect(640 * x1, 640 * y1, width, height);
    context.stroke();
  };
  const interval = useInterval(() => {
    socket.emit('parse_data');
  }, 15000);
  useEffect(() => {
    socket.on('test', (data) => {
      for (let i = 0; i < data.detection_scores.length; i++) {
        if(data.detection_scores[i] > 0.75) {
          if (data.detection_classes[i] === 1) {
            let rectColor = '#21FFA1'
          }
          if (data.detection_classes[i] === 2) {
            let rectColor = '#64D3FF'
          }
          if (data.detection_classes[i] === 3) {
            let rectColor = '#9C0DFF'
          }
          if (data.detection_classes[i] === 4 || data.detection_classes[i] === 5) {
            let rectColor = '#FF2E49'
          }
          drawRect(rectColor, detection_boxes[i][0],detection_boxes[i][1],detection_boxes[i][2],detection_boxes[i][3])
        }
      }
      setImage('data:image/jpg;base64,' + data.img);
    });

    }, []);

const handleStart = () => {
  interval.start();
}
  return (
    <div className="main">
      <canvas className="detections" ref={canvasRef} width={640} height={480} />
      <img className="camera_image" ref={imgRef} src={baseImg} />
      <button onClick={handleStart}>ВЫПУСКАЙТЕ БЫЧКА!</button>
    </div>
  );
};

export default Main;
