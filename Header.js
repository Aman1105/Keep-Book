import React from 'react'
import images from './Images/images.png'
export default function Header() {
  return (
    <div>
      <>
        <div className='header'>
        <img src={images} alt="logo" width="70" height="50"  />
        <h1 className='text' >Keep Book</h1>
        </div>
      </>
    </div>
  )
}
