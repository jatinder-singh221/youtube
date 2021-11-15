import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import {Header, Img, Box, Cover, Icon, Search, Ul, Li, Bage, Profile} from '../web/Webnavbar'
import Logo from '../../assests/YouTube.svg'
import {Link, useNavigate} from 'react-router-dom'
import {globalContext} from '../../App'
import test from '../../assests/test.jpg'

export default function Mobilenavbar(props) {
    const Value = useContext(globalContext)
    const [showSearch, setshowSearch] = useState(false)
    const [showcancel, setshowcancel] = useState(false)
    const [seachValue, setseachValue] = useState('')
    const history = useNavigate()
    const [searchresult, setsearchresult] = useState([])

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

    const search = (e)=>{
        let id = e.target.id
        setseachValue(searchresult[id].name)
        history(`/result?search=${searchresult[id].name}`)
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
                        <Cover onClick = {() => props.notification()} >
                            <Icon icon= 'bell' />
                            {Value.hasNotification?<Bage />:''}
                        </Cover>
                        {Value.isLogin?
                                <Cover onClick = {() =>props.extra()}>
                                    <Profile src = {test} />
                                </Cover>
                            :
                            <Link to = 'auth/login'>
                                <Cover>
                                    <Icon icon= 'user'></Icon>
                                </Cover>
                            </Link>}
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
                    <Cover onClick = {() => {setseachValue('') 
                        setshowcancel(false)}}>
                        <Icon icon= 'x'></Icon>
                    </Cover>:''}
                </Div>
                <Changedul>
                    {searchresult.length !== 0?
                        <>
                        {searchresult.map((item, index) =>{
                            return <Li key = {index}  id ={index} value={item.name} onClick = {search}>{item.name}</Li>
                        })}
                        </>
                    :
                    <Li>No Result founded</Li>}
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
    padding-top:1em;
    width:100%;
    min-height:100vh;
`