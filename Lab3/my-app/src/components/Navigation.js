import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from './ThemeContext'
export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <div>
      <nav className='navm' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        <ul>
        <li><a href='#'><img className='logo' src='assets/images/logo.png'/></a></li>
          <li><Link className='active' to='/'>Home</Link></li>
          <li><Link className='active' to='/news'>News</Link></li>
          <li><Link className='active' to='/about'>About</Link></li>
          <li><Link className='active' to='/contact'>Contact</Link></li>
        </ul>
        <div style={{ position: 'static' }}>
          <a className='switch-mode' href='#' onClick={toggle}
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
              outline: 'none',textDecoration: 'none'
            }} data-testid="toggle-theme-btn"
          >
            Switch to {!dark ? 'Dark' : 'Light'} mode
          </a>
        </div>
      </nav>
    </div>
  )
}
