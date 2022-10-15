import React from 'react';
import './css/Nav.css'

function Nav() {
    return (
        <nav className='flex'>
          <div id='stonechat-title' className='flex text-3xl ml-3'>
            <div className='text-red-500'>S</div>
            <div className='text-green-500'>t</div>
            <div className='text-blue-500'>o</div>
            <div className='text-red-500'>n</div>
            <div className='text-yellow-500'>e</div>
            <div className='text-blue-500'>c</div>
            <div className='text-green-500'>h</div>
            <div className='text-yellow-500'>a</div>
            <div className='text-blue-500'>t</div>
          </div>

          <div
            id='translate-title'
            className='text-gray-500 text-xl ml-3'>Translate
          </div>
        </nav>
    )
}

export default Nav;