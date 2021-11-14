import React, {useState} from 'react'
import {Cover, Video, Form,Img, Inputcover, Input, Label, Button, Box, Forget} from './Weblogin'
import Google from '../../assests/YouTube.svg'
import Login from '../../assests/login.mp4'

export default function Webregister() {
    const [first, setfirst] = useState('')
    const [last, setlast] = useState('')
    const [user, setuser] = useState('')
    const [pass, setpass] = useState('')

    const setActive = (e) =>{
        if (e.target.id === 'f'){
            let element = document.getElementById('lfirst')
            if (e.target.value !== ''){
                element.classList.add('active')
            }
            else{
                element.classList.remove('active')
            }
        }
        else if (e.target.id === 'last'){
            let element = document.getElementById('llast')
            if (e.target.value !== ''){
                element.classList.add('active')
            }
            else{
                element.classList.remove('active')
            }
        }
        else if (e.target.id === 'email'){
            let element = document.getElementById('lemail')
            if (e.target.value !== ''){
                element.classList.add('active')
            }
            else{
                element.classList.remove('active')
            }
        }
        else{
            let element = document.getElementById('lpass')
            if (e.target.value !== ''){
                element.classList.add('active')
            }
            else{
                element.classList.remove('active')
            }
        }
    }

    const Submit = (e) =>{
        e.preventDefault()
        let form = new FormData()
        form.append('fisrt_name',first)
        form.append('last_name',last)
        form.append('username',user)
        form.append('password',pass)
    }
    return (
        <Cover>
            <Video src = {Login} loop muted autoPlay></Video>
            <Form onSubmit={Submit}>
                <Img src={Google} alt="logo" />
                <Inputcover>
                    <Input type="text" id='f' name = 'first' autoComplete = 'off' autoFocus value={first} onChange={(e)=>setfirst(e.target.value)} onKeyDown={setActive} />
                    <Label htmlFor="f" id='lfirst'>First Name</Label>
                </Inputcover>
                <Inputcover>
                    <Input type="text" id='last' name = 'last' autoComplete = 'off' value={last} onChange={(e)=>setlast(e.target.value)} onKeyDown={setActive}  />
                    <Label htmlFor="last" id='llast'>Last Name</Label>
                </Inputcover>
                <Inputcover>
                    <Input type="email" id='email' name = 'email' autoComplete = 'off'  value={user} onChange={(e)=>setuser(e.target.value)} onKeyDown={setActive} />
                    <Label htmlFor="email" id='lemail'>Username</Label>
                </Inputcover>
                <Inputcover>
                    <Input type="password" id = 'pass'  name = 'pass' value={pass} onChange={(e)=>setpass(e.target.value)} onKeyDown={setActive} />
                    <Label htmlFor="pass" id = 'lpass'>Password</Label>
                </Inputcover>
                {first !== '' && last !== '' && user !== '' && pass !== ''?
                    <Button type = 'submit'>Register</Button>:<Button type = 'button' disabled>Login</Button>}
                <Box>
                    <Forget to = '/auth/login'>Already Have Account</Forget>
                </Box>
            </Form>
        </Cover>
    )
}
