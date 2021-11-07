import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import {Header, Img, Box, Cover, Icon, Search, Ul, Li, Bage, Profile} from '../web/Webnavbar'
import Logo from '../../assests/YouTube.svg'
import {Link} from 'react-router-dom'
import {globalContext} from '../../App'
import test from '../../assests/test.jpg'

export default function Mobilenavbar() {
    const Value = useContext(globalContext)
    const [showSearch, setshowSearch] = useState(false)
    const [showcancel, setshowcancel] = useState(false)
    const [seachValue, setseachValue] = useState('')

    const changeSearch = () =>{
        setshowSearch(!showSearch)
    }

    const changeCancel = (e) =>{
        if (e.target.value !== ''){
            setshowcancel(true)
        }
        else{
            setshowcancel(false)
        }
    }

    return (
        <Header>
            {!showSearch ?
                <>
                    <Img src= {Logo} alt="logo" />
                    <Box>
                        <Cover onClick = {changeSearch}>
                            <Icon icon= 'search' />
                        </Cover>
                        <Cover >
                            <Icon icon= 'bell' />
                            {Value.hasNotification?<Bage />:''}
                        </Cover>
                        <Link to = 'auth/login'>
                            <Cover>
                                {Value.isLogin?<Profile src = {test} />:<Icon icon= 'user'></Icon>}
                            </Cover>
                        </Link>
                    </Box>
                </>
            :

            <Form>
                <Div>
                    <Cover onClick = {changeSearch}>
                        <Icon icon= 'arrow-left'></Icon>
                    </Cover>
                    <Changedsearch type="text" name="search" autoComplete='off' placeholder='Search' onKeyUp = {changeCancel} value = {seachValue} onChange = {(e) => setseachValue(e.target.value)} />
                    {showcancel?
                    <Cover onClick = {() => setseachValue('')}>
                        <Icon icon= 'x'></Icon>
                    </Cover>:''}
                </Div>
                <Changedul>
                    <Li>hi</Li>
                </Changedul>
            </Form>}
        </Header>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #202020;
    width: 100%;
    top:3;
    height: 50px;
`

const Div = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: inherit;
    justify-content: space-between;
`
const Changedsearch = styled(Search)`
    border:none;
    border-radius: 5px;
    background-color: #313131;
    margin-right: 0.3em;
`
const Changedul = styled(Ul)`
    width:100%;
    min-height:100vh;
`