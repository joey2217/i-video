import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header className="flex items-center h-10 px-2">
      <div>LOGO</div>
      <nav id="nav" className="flex items-center h-full">
        <NavLink to="/">首页</NavLink>
        <NavLink to="/source">资源</NavLink>
      </nav>
    </header>
  )
}

export default memo(Header)
