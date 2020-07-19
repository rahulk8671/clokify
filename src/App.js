import React, { useEffect, useState } from "react"
import Clock from "./Components/Clock"
import HourHand from "./Components/Hands/Hour"
import MinuteHand from "./Components/Hands/Minute"
import SecondHand from "./Components/Hands/Second"
import Dial from "./Components/Dial"
import Case from "./Components/Cace" 

export default function App() {
    const [caseType, setCaseType] = useState(false)
    const [rate, setRate] = useState(1)
    const [time, setTime] = useState(new Date());

    const changeCaseType = (type) => {
        switch (type) {
            case 'number':
                setCaseType(true)
                break;
            case 'dashed':
                setCaseType(false)
                break;
            default:
        }
    }

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
                <Case isNumber={caseType}/>
                <HourHand hour={( (360/12) * time.getHours() ) + ( (360/12)/60 ) * time.getMinutes()} />
                <MinuteHand minute={( (360/60) * time.getMinutes() ) + (360/60*60) * time.getSeconds()} />
                <SecondHand second={(360/60) * time.getSeconds()} />
                <Dial />
            </Clock> 

            <input type="radio" id="male" name="gender" value="number" onChange={(e) => changeCaseType(e.target.value)} checked={caseType}/>
            <label htmlFor="male">Number</label><br/>
            <input type="radio" id="female" name="gender" value="dashed" onChange={(e) => changeCaseType(e.target.value)} checked={!caseType}/>
            <label htmlFor="female">Dashed</label><br/> 

            <p>rate (1-1000)</p>
            <input value={rate} type="number" onChange={(e) => setRate(parseInt(e.target.value))}/>
        </div>
    )
}
