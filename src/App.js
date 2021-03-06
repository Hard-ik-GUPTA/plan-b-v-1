import React, { useState, useEffect, createContext } from 'react';
import Header from './Header/Header';
import Form from './FormComponent/Form'

import Quiz from './QuizComponent/Quiz';
import Home from './Home';
import data from './QuizComponent/data';

export const UserContext = createContext();


function App() {

  const [userDetails, setUserDetails] = useState({
    name: "",
    phoneNo: "",
    marks: ""
  })

  // console.log(userDetails);


  const [formSubmitState, setFormSubmitState] = useState(false)


  return (
    <>
      <UserContext.Provider value={{userDetails,setUserDetails}}>
        {!formSubmitState &&
          <Form setFormSubmitState={setFormSubmitState} userDetails={userDetails} setUserDetails={setUserDetails} />
        }
          {formSubmitState && <Quiz userDetails={userDetails} data={data}/>}
      </UserContext.Provider>

    </>
  );
}

export default App;
