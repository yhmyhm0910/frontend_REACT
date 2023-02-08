import React from 'react'


const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <h1>To be Named</h1>
      <div className="links">
        <a href='/'>Home</a>
        <a href='/records'>Records</a>
      </div>
    </nav>
  )
}

export default NavBar