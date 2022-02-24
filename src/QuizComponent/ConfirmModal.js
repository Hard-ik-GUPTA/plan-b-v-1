import { React, useState,useEffect, useContext } from 'react';
import Result from './Result';
import data from './data';

import { UserContext } from '../App'


const ConfirmModal = ({ setSubmitState, setSubmitConfirmState }) => {

  const { userDetails, setUserDetails } = useContext(UserContext)


  useEffect(() => {
    calculateMarks();
  
  }, [])
  

  const calculateMarks = () => {
    const correct = data.filter(x => x.selected.value === x.answer)
    let marks = correct.length
    setUserDetails({...userDetails,marks})
    console.log(marks);

  }


  const showResult = () => {
    setSubmitState(false)
    setSubmitConfirmState(false)
  }


  const submitForm = async (e) => {
    e.preventDefault();


      console.log("written to firebase")
      const response = await fetch("https://mathsquiz-848ba-default-rtdb.asia-southeast1.firebasedatabase.app/mathstestresponse.json",
        {
          method: "Post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userDetails
          })
        })



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