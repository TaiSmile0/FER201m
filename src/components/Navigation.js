import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Icon } from 'react-materialize'
export default function Navigation() {
    return (
        <div>
          <Navbar className='menu'
          alignLinks='right'
          position ='static'
          brand ={<span className='brand-logo'><img className='logo' src='assets\images\logo.png'/></span>}
          id="mobile-nav"
          menuIcon={<Icon>menu</Icon>}
          >
            <ul class="right hide-on-med-and-down">
              <li><Link to ='/'><Icon left>home</Icon>Home</Link></li>
              <li to='/about'><Link to='/About'><Icon left>info_outline</Icon>About</Link></li>
              <li to='/news'><Link to='/News'><Icon left>dvr</Icon>News</Link></li>
              <li to='/contact'><Link to='/Contact'><Icon left>contacts</Icon>Contact</Link></li>
            </ul>
          </Navbar>
        </div>
      )
}
