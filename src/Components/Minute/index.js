import React from 'react'
import Styled from 'styled-components'

const Minute = Styled.div`
    left: calc(50% - 2.5px);
    bottom: 50%;
    width: 5px;
    height: 40%;
    background: red;
    position: absolute;
    transform-origin: bottom center;
`

export default ({ minute }) => <Minute style={{ transform: 'rotate(' + minute + 'deg)' }} />