import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/logo.svg'
import menu from '../../assets/icons/menu.svg'
import profile from '../../assets/icons/profile.jpg'
import stream from '../../assets/icons/stream.svg'
import notifi from '../../assets/icons/notification.svg'
import './style.scss'
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__left__menu">
          <img src={menu} alt="menu" />
        </div>

        <div className="header__left__logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </div>
      <div className="header__right">
        <img className="header__right__stream" src={stream} alt="stream" />
        <img className="header__right__notifi" src={notifi} alt="notifi" />
        <img className="header__right__profile" src={profile} alt="profile" />
      </div>
    </div>
  )
}

export default Header
