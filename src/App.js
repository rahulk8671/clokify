import React, { useEffect, useState } from "react"
import Clock from "./Components/Clock"
import Hour from "./Components/Hour"
import Minute from "./Components/Minute"
import Second from "./Components/Second"
import CenterPoint from "./Components/CnterPoint"
// import "./App.css"

export default function App() {
    console.log('Clock body')
    //Sets the clock hands
    var today = new Date()
    const [second, setSecond] = useState(today.getSeconds() * 6)
    const [minute, setMinute] = useState(today.getMinutes() * 6)
    const [hour, setHour] = useState(today.getHours() * 30)

    // var hh = today.getHours() * 30
    // var mm = today.getMinutes() * 6
    // var ss = today.getSeconds() * 6
    // setSecond(ss)
    // setMinute(mm)
    // setHour(hh)

    // const call = () => {
    //     //Gets current time and set for default useState

    //     setInterval(() => {
    //         setSecond((second + 6) % 360)
    //         setMinute((minute + 0.1) % 360)
    //         setHour((hour + 0.001666) % 360)
    //     }, 1000)
    // }

    // useEffect(() => {
    //     var today = new Date()
    //     var hh = today.getHours() * 30
    //     var mm = today.getMinutes() * 6
    //     var ss = today.getSeconds() * 6
    //     setSecond(ss)
    //     setMinute(mm)
    //     setHour(hh)
    // }, [])

    useEffect(() => {
        console.log("how many  times call!!")
        setTimeout(() => {
            setSecond((second + 6) % 360)
            setMinute((minute + 0.1) % 360)
            setHour((hour + 0.001666) % 360)
        }, 1)
    }, [second, minute, hour])

    return (
        <div>
            <Clock>
                <Hour hour={hour} />
                <Minute minute={minute} />
                <Second second={second} />
                <CenterPoint />
            </Clock>
        </div>
    )

    // return (
    //     <div>
    //         <div
    //             style={{
    //                 position: "relative",
    //                 // margin: "0 auto",
    //                 background: "yellow",
    //                 width: "200px",
    //                 height: "200px",
    //                 borderRadius: "100%",
    //             }}
    //         >
    //             <div
    //                 style={{
    //                     left: "50%",
    //                     position: "absolute",
    //                     width: "5px",
    //                     height: "100px",
    //                     background: "blue",
    //                     transform: `rotate(${hour}deg)`,
    //                     transformOrigin: "center bottom",
    //                 }}
    //             />

    //             <div
    //                 style={{
    //                     left: "50%",
    //                     position: "absolute",
    //                     width: "5px",
    //                     height: "100px",
    //                     background: "red",
    //                     transform: `rotate(${minute}deg)`,
    //                     transformOrigin: "center bottom",
    //                 }}
    //             />
    //             <div
    //                 style={{
    //                     top: "17px",
    //                     left: "50%",
    //                     position: "absolute",
    //                     width: "5px",
    //                     height: "80px",
    //                     background: "green",
    //                     transform: `rotate(${second}deg)`,
    //                     transformOrigin: "center bottom",
    //                 }}
    //             />

    //             <div
    //                 style={{
    //                     position: "absolute",
    //                     background: "black",
    //                     width: "10px",
    //                     height: "10px",
    //                     top: "46%",
    //                     left: "49%",
    //                     borderRadius: "100%",
    //                 }}
    //             />
    //         </div>
    //     </div>
    // )
}
