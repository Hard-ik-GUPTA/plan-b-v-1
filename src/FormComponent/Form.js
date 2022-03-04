import React, { useState } from 'react'
import mainlogo from '../QuizComponent/planB-logo.png';
import data from '../QuizComponent/data';



const Form = ({ setFormSubmitState, userDetails, setUserDetails }) => {

    const [inputValidState, setValidInputState] = useState(false)

    const checkValidity = () => {
        !((userDetails.name === "") || (userDetails.phoneNo === "" || userDetails.phoneNo.length !== 10)) &&
            (setValidInputState(true))
    }


    const saveUserData = (e) => {

        e.preventDefault();
        inputValidState &&
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
                    <h2>Parabola & Circles Test</h2>
                    <img className="logo-image" src={mainlogo}></img>
                </div>

                <div className="inputContainer">
                    <div className='instructions'>
                        <h2>Instructions</h2>
                        <ul>
                            <li>This Paper is of 1Hr 30Mins, it will be submitted automatically after time expires</li>
                            <li>This paper contains {data.length} Questions </li>
                            <li>Maximum marks for this paper is {data.length}*4 = {data.length * 4} </li>
                            <li>-1 for wrong answer</li>
                            <li>You can Navigate through the questions using arrows or the navigation list</li>
                            <li style={{color:"red"}}>Do not refresh the page during test</li>
                        </ul>
                    </div>

                    <form className="inputFormContainer" onSubmit={saveUserData}>
                        <div className="formGridContainer">
                            <h3> Name </h3>
                            <h3>
                                <input type="text" name="name" value={userDetails.name} onChange={getUserData} placeholder="Name"></input>
                                {
                                    (userDetails.name === "") &&
                                    <span className='cumpulsaryField'>*</span>


                                }
                            </h3>
                            <h3> Phone No. </h3>
                            <h3>
                                <input type="text" name="phoneNo" value={userDetails.phoneNo} onChange={getUserData} placeholder="Phone Number"></input>
                                {
                                    (userDetails.phoneNo === "" || userDetails.phoneNo.length !== 10) &&
                                    < span className='cumpulsaryField'>*</span>

                                }
                            </h3>
                            {
                                ((userDetails.name === "") || (userDetails.phoneNo === "" || userDetails.phoneNo.length !== 10)) ?

                                    <h5 className='cumpulsaryField gridItemAlert'>*Cumpulsary Fields</h5> : null

                            }
                        </div>

                        <button className="startTestBtn" type='submit' onClick={checkValidity}>Start Test</button>
                    </form>
                </div>
            </div >
        </>
    )
}

export default Form