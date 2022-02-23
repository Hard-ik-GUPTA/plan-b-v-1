import { React, useState,useContext } from 'react';
import Result from './Result';
import data from './data';

import { UserContext } from '../App'


const ConfirmModal = ({ setSubmitState, setSubmitConfirmState }) => {

  const userDetails=useContext(UserContext)

  console.log(data);


  const showResult = () => {
    setSubmitState(false)
    setSubmitConfirmState(false)
    return <Result />
  }


  const submitForm = async (e) => {
    e.preventDefault();


    const response = await fetch("https://mathsquiz-848ba-default-rtdb.asia-southeast1.firebasedatabase.app/mathstestresponse.json",
      {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userDetails
        })
      },setTimeout(2000))

    showResult()



  }




  return (
    <>
      {console.log(userDetails.name)}

      <div className='modal-overlay'>
        <div className='confirmModal'>
          <h3>Are You sure You want to submit the test</h3>

          <p>
            <button onClick={submitForm} className='confirmModalBtn'>Yes</button>
            <button onClick={() => setSubmitState(false)} className='confirmModalBtn'>no</button>
          </p>
        </div>
      </div>
    </>

  )
}

export default ConfirmModal