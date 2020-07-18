import React from 'react'
import Styled from 'styled-components'

const Second = Styled.div`
    bottom: 50%;
    left: calc(50% - 2.5px);
    width: 5px;
    height: 45%;
    background: green;
    position: absolute;
    transform-origin: bottom center;
`

export default ({ second }) => <Second style={{ transform: 'rotate(' + second + 'deg)' }} />