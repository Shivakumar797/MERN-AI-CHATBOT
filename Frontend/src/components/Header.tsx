import React from 'react'
import { AppBar, Toolbar } from '@mui/material'
import Logo from './shared/Logo'
import { useAuth } from '../context/AuthContex'
import NavigationLink from './shared/NavigationLink';
function Header() {
  const auth=useAuth();
  return <AppBar sx={{bgcolor:"blue",position:"static",boxShadow:"none", }}>
    <Toolbar>
    <Logo/>
    <div>{auth?.isLoggedIn ? 
      (<>
      <NavigationLink  bg="#00fffc" to="/chat" text="Go To Chat" textColor='black'/>
      <NavigationLink  bg="#51538f" textColor="white" to="/" text="Logout " onclick={auth.logout}/>
    
    </>):(
      <>
      <NavigationLink  bg="#00fffc" to="/login" text="Login" textColor='black'/>
      <NavigationLink  bg="#51538f" textColor="white" to="/signup" text="Signup " />
    
      </>
      )}
      </div>
    </Toolbar>
  </AppBar>
}

export default Header
