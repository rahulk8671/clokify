import React, { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [minute, setMinute] = useState(354);
  const [second, setSecond] = useState(0);
  const [hour, setHour] = useState(30);

  const call = () => {
    setTimeout(() => {
      setSecond((second + 6) % 360);
      setMinute((minute + 0.1) % 360);
      setHour((hour + 0.001666) % 360);
    }, 1000);
  };

  // const call = () => {
  //   setTimeout(function() {
  //     if (second === 354) {
  //       setSecond(0);
  //       setMinute(minute + 6);
  //       if (minute === 354) {
  //         setMinute(0);
  //         setHour(hour + 30);
  //       }
  //     } else {
  //       setSecond(second + 6);
  //     }
  //   }, 1000);
  // };

  useEffect(() => {
    call();
  });

  return (
    <div className="App"> 
      <div
        style={{
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          width: "300px",
          justifyContent: "space-around"
        }}
      >
        {/* <p>second: {second / 6}</p>
        <p>minute: {minute / 6}</p>
        <p>hour: {hour / 30}</p> */}
      </div>

      <div
        style={{
          position: "relative",
          margin: "0 auto",
          background: "yellow",
          width: "200px",
          height: "200px",
          borderRadius: "100%"
        }}
      >
        <div
          style={{
            left: "50%",
            position: "absolute",
            width: "5px",
            height: "100px",
            background: "blue",
            transform: `rotate(${hour}deg)`,
            transformOrigin: "center bottom"
          }}
        />

        <div
          style={{
            left: "50%",
            position: "absolute",
            width: "5px",
            height: "100px",
            background: "red",
            transform: `rotate(${minute}deg)`,
            transformOrigin: "center bottom"
          }}
        />
        <div
          style={{
            top: "17px",
            left: "50%",
            position: "absolute",
            width: "5px",
            height: "80px",
            background: "green",
            transform: `rotate(${second}deg)`,
            transformOrigin: "center bottom"
          }}
        />

        <div
          style={{
            position: "absolute",
            background: "black",
            width: "10px",
            height: "10px",
            top: "46%",
            left: "49%",
            borderRadius: "100%"
          }}
        />
      </div>
    </div>
  );
}

