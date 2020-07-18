import React from 'react'
import Styled from 'styled-components'

const Numbers = Styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`
const Number = Styled.span`
  position: absolute;
  transform: translate(-50%, -50%);
`
export default () => {
  let numbers = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
 
  let numberObjects = [];
  numbers.forEach((num, i) => {
    let h = 120;
    let a = 360 / numbers.length; 
    let obj = {
        value: num,
        top: h * Math.sin(toRadians(a * i)),
        left: h * Math.cos(toRadians(a * i))
    };
    numberObjects.push(obj);
  });
  return (
    <Numbers>
      {numberObjects.map(({ value, top, left}) => 
        <Number key={value} style={{top: `${top}px`, left: `${left}px`}}>
          {value}
        </Number>)
      }
    </Numbers>
  );
}

function toRadians(angle) {
  return angle * (Math.PI / 180);
}