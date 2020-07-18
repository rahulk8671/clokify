import React from 'react'
import Styled from 'styled-components'

const Clock = Styled.div`
    border-radius: 50%;
    width: 300px;
    height: 300px;
    position: relative;
    background-color: yellow;
`

export default ({ children }) => <Clock>{children}</Clock>

