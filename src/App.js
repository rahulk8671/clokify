import React, { useEffect, useState } from "react"
import Clock from "./Components/Clock"
import Hour from "./Components/Hour"
import Minute from "./Components/Minute"
import Second from "./Components/Second"
import CenterPoint from "./Components/CnterPoint"

export default function App() {
    var today = new Date()
    const [second, setSecond] = useState(today.getSeconds() * 6)
    const [minute, setMinute] = useState(today.getMinutes() * 6)
    const [hour, setHour] = useState(today.getHours() * 30) 

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
}
