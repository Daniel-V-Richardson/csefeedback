/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './main.css'

const ModalEee=({open,onClose})=> {
    if (!open) 
        return null;
  return (
    <div className='overlay'>
        <div className='modalContainer'>
            <h2>Select your Semester</h2>
             <div className='semester'>
              <a href='#' className='sem'>3rd Semester</a>
              <a href='#' className='sem'>5th Semester</a>
              <a href='#' className='sem'>7th Semester</a>
              </div>
           <div className='closeBtn'>
             <p onClick={onClose} className='close'>X</p>
           </div>
        </div>
    </div>
  )
}

export default ModalEee