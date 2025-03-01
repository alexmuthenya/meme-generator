import React from 'react'
import trollFace from '/images/image.png'


function Header() {
  return (
    <header className='header-component'>
        <img src={trollFace} alt="TrollFace image" className='troll-face-image' />
        <span>Meme Generator</span>

    </header>
  )
}

export default Header
