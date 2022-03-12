import { React, useState,createContext } from 'react'
import Quiz from './QuizComponent/Quiz'
import Form from './FormComponent/Form'

const Home = () => {
    const userContext=createContext();
    
    const [userDetails, setUserDetails] = useState({
        name: "",
        phoneNo: "",
        marks: ""
    })

    // console.log(userDetails);


    const [formSubmitState,setFormSubmitState]=useState(false)
    return (
        <>
            <Form setFormSubmitState={setFormSubmitState} userDetails={userDetails} setUserDetails={setUserDetails}/>
            {formSubmitState&& <Quiz/>}


        </>
    )
}

export default Home