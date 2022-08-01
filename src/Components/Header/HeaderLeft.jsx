import React from 'react'
import "./Header.css"

function HeaderLeft() {
  return (
    <div className='d-flex justify-content-around'>
        <div className='logo'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" alt="logo" /></div>
        <div className='headeSearch'>
            <input type="text"  placeholder='Search'  />
        </div>
    </div>
  )
}

export default HeaderLeft