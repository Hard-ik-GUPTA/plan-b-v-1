import React, { useState } from 'react'

const TimeEndModal = ({submitForm,setTimeEndState}) => {

    const [styleState,setStyleState]=useState({
    })
    const showResult=()=>{
        submitForm();
        setStyleState({
            display:"none",
        })
    }


  return (
    <div style ={styleState} className='modal-overlay'>
    <div className='confirmModal'>
      <h3>Times Up! continue to review</h3>

      <p>
        <button onClick={showResult} className='confirmModalBtn'>Continue to result</button>
      </p>
    </div>
  </div>
  )
}

export default TimeEndModal

