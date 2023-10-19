import React from 'react'
import './BottomHeader.css'
import { Link } from 'react-router-dom'

const BottomHeader = () => {
  return (
    <div className='tabWrpr'>
        <div className='bottomHeaderWrapper'>
            <ul>
                <div className='tabNav'>
                    <li><Link to='/clothes'>SHOP NOW</Link></li>
                </div>
                <div className='tabNav'>
                    <li><Link to='/men'>MEN</Link></li>
                </div>
                <div className='tabNav'>
                    <li><Link to='/women'>WOMEN</Link></li>
                </div>
                <div className='tabNav'>
                    <li><a href='/new-arrival'>ACCESSORIES</a></li>
                </div>
                <div className='tabNav'>
                    <li><Link to='/bestseller'>LIVE NOW</Link></li>
                </div>
                <div className='tabNav'>
                    <li><Link to='/jeans'>AMERICAN PIMA</Link></li>
                </div>
                <div className='tabNav'>
                    <li><Link to='/bewakoof'>BEWAKOOF AIR</Link></li>
                </div>
                <div className='tabNav'>
                    <li><Link to='/bestseller'>OFFICIAL MERCH</Link></li>
                </div>
                <div className='tabNav'>
                    <li><Link to='/joggers'>PLUS SIZE</Link></li>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default BottomHeader