import React from 'react'
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'

function MainHeader() {
  return (
    <div className='container'>
        <div className="row">
       
        <div className="col-md-6">
            <HeaderLeft />
        </div>
        <div className="col-md-6">
            <HeaderRight />
        </div>
    </div>
         
    </div>
  )
}

export default MainHeader