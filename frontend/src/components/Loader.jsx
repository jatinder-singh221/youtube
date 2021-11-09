import React from 'react'
import styled, {keyframes} from 'styled-components'
import Logo from '../assests/YouTube.svg'

export default function Loader() {
    return (
        <Section>
            <Img src={Logo} alt="logo" />
        </Section>
    )
}

const Section = styled.section`
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
` 

const animateImg = keyframes`
    from{opacity:0%}
    to{opacity:100%}
`

const Img = styled.img`
    width: 100%;
    height: 20vh;
    animation: ${animateImg} 2s  infinite ;
`
