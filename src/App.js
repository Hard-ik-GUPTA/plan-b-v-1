import React, { useState, useEffect, createContext } from 'react';
import Header from './Header/Header';
import Form from './FormComponent/Form'

import Quiz from './QuizComponent/Quiz';
import Home from './Home';

export const UserContext = createContext();
export const setUserContext = createContext();


function App() {

  const [userDetails, setUserDetails] = useState({
    name: "",
    phoneNo: "",
    marks: ""
  })

  console.log(userDetails);


  const [formSubmitState, setFormSubmitState] = useState(false)


  return (
    <>
      <UserContext.Provider value={userDetails}>
        <setUserContext.Provider value={setUserDetails}>
          <Form setFormSubmitState={setFormSubmitState} userDetails={userDetails} setUserDetails={setUserDetails} />
          {formSubmitState && <Quiz />}
        </setUserContext.Provider>
      </UserContext.Provider>

    </>
  );
}

export default App;
