import React from 'react';
import Button from './Button'

const NavBar = () => {
  return(
    <nav className="space-x-3">
      <Button text="Home"></Button>
      <Button text="Notifications"></Button>
      <Button text="Messages"></Button>
    </nav>
  )
}



export default NavBar;