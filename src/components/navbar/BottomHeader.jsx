import React from 'react'
import './BottomHeader.css'

const BottomHeader = () => {
  return (
    <div className='tabWrpr'>
        <div className='bottomHeaderWrapper'>
            <ul>
                <div className='tabNav'>
                    <li><a href='/'>SHOP NOW</a></li>
                </div>
                <div className='tabNav'>
                    <li><a href='/'>MEN</a></li>
                </div>
                <div className='tabNav'>
                    <li><a href='/'>WOMEN</a></li>
                </div>
                <div className='tabNav'>
                    <li><a href='/'>ACCESSORIES</a></li>
                </div>
                <div className='tabNav'>
                    <li><a href='/'>LIVE NOW</a></li>
                </div>
                <div className='tabNav'>
                    <li><a href='/'>AMERICAN PIMA</a></li>
                </div>
                <div className='tabNav'>
                    <li><a href='/'>BEWAKOOF AIR</a></li>
                </div>
                <div className='tabNav'>
                    <li><a href='/'>OFFICIAL MERCH</a></li>
                </div>
                <div className='tabNav'>
                    <li><a href='/'>PLUS SIZE</a></li>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default BottomHeader