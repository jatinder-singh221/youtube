import React from 'react'
import {Cover, Video, Form,Img, Inputcover, Input, Label, Button, Box, Forget, New} from './Weblogin'
import Google from '../../assests/YouTube.svg'
import Login from '../../assests/login.mp4'

export default function Webregister() {
    return (
        <Cover>
            <Video src = {Login} loop muted autoPlay></Video>
            <Form>
                <Img src={Google} alt="logo" />
                <Inputcover>
                    <Input type="text" id='f' name = 'first' autoComplete = 'off' autoFocus  />
                    <Label htmlFor="f" id='lfirst'>First Name</Label>
                </Inputcover>
                <Inputcover>
                    <Input type="text" id='last' name = 'last' autoComplete = 'off'   />
                    <Label htmlFor="last" id='llast'>Last Name</Label>
                </Inputcover>
                <Inputcover>
                    <Input type="email" id='email' name = 'email' autoComplete = 'off'   />
                    <Label htmlFor="email" id='lemail'>Username</Label>
                </Inputcover>
                <Inputcover>
                    <Input type="password" id = 'pass'  name = 'pass' />
                    <Label htmlFor="pass" id = 'lpass'>Password</Label>
                </Inputcover>
                <Button type = 'submit'>Register</Button>
                <Box>
                    <Forget to = '/auth/login'>Already Have Account</Forget>
                </Box>
            </Form>
        </Cover>
    )
}
