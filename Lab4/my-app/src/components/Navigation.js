import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Icon } from 'react-materialize'
export default function Navigation() {
  return (
    <Navbar className='menu'
      alignLinks="right"
      brand={<Link to='/' className='brand-logo'>Movie</Link>}
      id="mobile-nav"
      menuIcon={<Icon>Menu</Icon>}
    >
      <Link to='/'><Icon left>home</Icon>Home</Link>
      <Link to='/news'><Icon left>info_outline</Icon>News</Link>
      <Link to='/about'><Icon left>dvr</Icon>About</Link>
      <Link to='/contact'><Icon left>contacts</Icon>Contact</Link>
    </Navbar>
  )
}
