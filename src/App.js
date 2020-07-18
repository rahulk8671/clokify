import React, { useEffect, useState } from "react"
import Clock from "./Components/Clock"
import Hour from "./Components/Hour"
import Minute from "./Components/Minute"
import Second from "./Components/Second"
import Dial from "./Components/Dial"
import Case from "./Components/Cace"

export default function App() {
    
    const [time, setTime] = useState(new Date());
    let rate = 1;
    useEffect(() => {
        let timeout = setTimeout(() => {
            setTime(new Date(time.getTime() + 1000));
        }, 1000/rate);
        return () => {
            clearTimeout(timeout);
        }
    }, [time, rate]);

    return (
        <div>
            <Clock>
                <Case />
                <Hour hour={( (360/12) * time.getHours() ) + ( (360/12)/60 ) * time.getMinutes()} />
                <Minute minute={( (360/60) * time.getMinutes() ) + (360/60*60) * time.getSeconds()} />
                <Second second={(360/60) * time.getSeconds()} />
                <Dial />
            </Clock>
        </div>
    )
}
