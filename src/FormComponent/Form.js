import React, { useState } from 'react'
import { getDatabase, ref, set } from "firebase/database";


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
            <form onSubmit={saveUserData}>
                Name<input type="text" name="name" value={userDetails.name} onChange={getUserData}></input>
                Phone Number<input type="text" name="phoneNo" value={userDetails.phoneNo} onChange={getUserData}></input>

                <button type='submit'>submit</button>
            </form>
        </>
    )
}

export default Form