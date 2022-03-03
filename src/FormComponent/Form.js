import React, { useState } from 'react'
import mainlogo from '../QuizComponent/planB-logo.png';
import data from '../QuizComponent/data';



const Form = ({ setFormSubmitState,userDetails,setUserDetails }) => {




    const saveUserData = (e) => {
        e.preventDefault();
        setFormSubmitState(true)


    }

    let name, value;
    const getUserData = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUserDetails({ ...userDetails, [name]: value })

    }
    return (
        <>
            <div className='detailsInputForm '>
                <div className='inputFormHeader'>
                <h3>Quadratic Test</h3>
                <img className="logo-image" src={mainlogo}></img>
                </div>

                <div className="inputContainer">
                <div className='instructions'>
                    <h2>Instructions</h2>
                    <ul>
                        <li>This Paper is of 1Hr 30Mins, it will be submitted automatically after time expires</li>
                        <li>This paper contains {data.length} Questions </li>
                        <li>Maximum marks for this paper is {data.length}*4 = {data.length*4} </li>
                        <li>-1 for wrong answer</li>
                        <li>You can Navigate through the questions using arrows or the navigation list</li>
                    </ul>
                </div>

            <form className="inputFormContainer" onSubmit={saveUserData}>
               <h4> Name :<input type="text" name="name" value={userDetails.name} onChange={getUserData} placeholder="Name"></input></h4>
               <h4> Phone Number :<input type="text" name="phoneNo" value={userDetails.phoneNo} onChange={getUserData} placeholder="Phone Number"></input></h4>

                <button class="startTestBtn" type='submit'>Start Test</button>
            </form>
            </div>
            </div>
        </>
    )
}

export default Form