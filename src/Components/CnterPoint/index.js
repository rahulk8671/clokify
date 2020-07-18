import React from 'react'
import Styled from 'styled-components'

const CenterPoint = Styled.div`
    width: 10px;
    height: 10px;
    top: 50%;
    left: 50%;
    position: absolute;
    border-radius: 50%;
    background-color: black;
    transform: translate(-50%, -50%);
`
export default CenterPoint
