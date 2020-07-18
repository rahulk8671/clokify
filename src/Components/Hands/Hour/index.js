import React from 'react'
import Styled from 'styled-components'

const Hour = Styled.div`
    left: calc(50% - 2.5px);
    bottom: 50%;
    width: 5px;
    height: 35%;
    background: blue;
    position: absolute;
    transform-origin: bottom center;
`

export default ({ hour }) => <Hour style={{ transform: 'rotate(' + hour + 'deg)' }} />
