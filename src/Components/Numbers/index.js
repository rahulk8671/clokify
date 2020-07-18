import React from 'react'
import Styled from 'styled-components'

const SCALE_CHAR = 'l';

const Numbers = Styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`
const Number = Styled.span`
  position: absolute;
  transform-origin: top center;
  transform: ${props => `rotate(${props.rotation}deg) translate(-50%, -50%)`};
`
export default () => {
  let numbers = ['3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '1', '2'];

  numbers = numbers.map(num => [num, SCALE_CHAR, SCALE_CHAR, SCALE_CHAR, SCALE_CHAR])
            .reduce((acc, curr) => {
              return acc.concat(curr);
            }, []);
 
  let numberObjects = [];
  numbers.forEach((num, i) => {
    let r = 140;
    let a = 360 / numbers.length;
    const angle = toRadians(a * i);
    let obj = {
        value: num,
        top: r * Math.sin(angle),
        left: r * Math.cos(angle),
        rotation: num === SCALE_CHAR ? ((a * i) - 90) : 0,
        key: i
    };
    numberObjects.push(obj);
  });
  return (
    <Numbers>
      {numberObjects.map(({ value, top, left, rotation, key}) => 
        <Number 
          key={key} 
          rotation={rotation}
          style={{top: `${top}px`, left: `${left}px`}}>
          {value}
        </Number>)
      }
    </Numbers>
  );
}

function toRadians(angle) {
  return angle * (Math.PI / 180);
}