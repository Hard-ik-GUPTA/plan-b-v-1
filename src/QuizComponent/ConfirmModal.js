import React from 'react';
import Result from './Result';


const ConfirmModal = ({setSubmitState,setSubmitConfirmState}) => {

  const showResult=()=>{
    setSubmitState(false)
    setSubmitConfirmState(false)
    return <Result/>
  }


  return (
    <div className='modal-overlay'>
    <div className='confirmModal'>
      <h3>Are You sure You want to submit the test</h3>

      <p><button onClick={showResult} className='confirmModalBtn'>Yes</button> <button onClick={()=>setSubmitState(false)} className='confirmModalBtn'>no</button></p>
      

    </div>
    </div>
  )
}

export default ConfirmModal