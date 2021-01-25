import { Button } from '@material-ui/core'
import React from 'react'
import { login } from './features/userSlice'
import { auth, provider } from './firebase'
import "./Login.css"

function Login() {

   const signIn = () => {
       auth.signInWithPopup(provider)
       .then(({user}) => (
           login({
               displayName : user.displayName,
               email : user.email,
               photoURL : user.photoURL,
           })
       ))
   }
    return (
        <div className="login">
            <div className="login_container">
                <img src="https://i.redd.it/s0jqt1kdhou51.jpg" alt=""/>
                <Button variant="contained" color="primary" onClick={signIn}> Login </Button>
            </div>
        </div>
    )
}

export default Login
