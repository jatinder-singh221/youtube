import React from 'react'
import styled,{keyframes} from 'styled-components'

export default function Loading() {
    return (
        <Div>
            <Cover></Cover>
        </Div>
    )
}

const Div = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    color: green;
    top: 0;
    left: 0;
    background-color: transparent;
    z-index: 9999;
    overflow:hidden;
`

const Animation = keyframes`
    from{width:0}
    to{width:100%}
`

const Cover = styled.div`
    width: 100%;
    height: 0.1em;
    background-color: #FF0000;
    animation: ${Animation} 2s  infinite ;
`
