import React from "react"
import Hour from "./Hour"
import Minute from "./Minute"
import utils from "../../Utils"
import Styled from "styled-components"

const Case = Styled.div`
    position: absolute;
    top: 50%;
    left: 50%; 
`

const Element = Styled.span`
    position: absolute;
    transform-origin: top center;
    transform: ${(props) =>
        `rotate(${props.rotation}deg) translate(-50%, -50%)`};
`

export default ({ isNumber = false, dimension }) => {
    let numbers = [
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "1",
        "2",
    ]

    numbers = numbers
        .map((num) => [
            <Hour number={num} isNumber={isNumber}/>,
            <Minute />,
            <Minute />,
            <Minute />,
            <Minute />,
        ])
        .reduce((acc, curr) => {
            return acc.concat(curr)
        }, [])

    let numberObjects = []
    numbers.forEach((num, i) => {
        let r = 140
        let a = 360 / numbers.length
        const angle = utils.toRadians(a * i)
        let obj = {
            key: i,
            value: num,
            rotation: a * i - 90,
            top: r * Math.sin(angle) * ( dimension / 300 ),
            left: r * Math.cos(angle) * ( dimension / 300 ),
        }
        numberObjects.push(obj)
    })

    return (
        <Case>
            {numberObjects.map(({ value, top, left, rotation, key }) => {
                let rotate = rotation
                if (isNumber) 
                    rotate = key % 5 === 0 ? "0" : rotation
                
                return (
                    <Element
                        key={key}
                        rotation={rotate}
                        style={{ top: `${top}px`, left: `${left}px` }}
                    >
                        {value}
                    </Element>
                )
            })}
        </Case>
    )
}
