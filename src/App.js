import React, { useState,useEffect } from 'react';
import NavGrid from './NavGrid';
import Main from './Main';
import data from './data';
import ConfirmModal from './ConfirmModal';
import Result from './Result';

import {db} from "./firebase";
import {collection,detDocs, doc, getDocs} from "firebase/firestore";
 
function App() {
  console.log(data)

  const [questionState, setQuestionState] = useState(data[0])
  const [submitState, setSubmitState] = useState(false)
  const [submitConfirmState, setSubmitConfirmState] = useState(true)
  console.log(questionState);

  //////////
  const [questions,setQuestions]=useState([])
  const usersCollectionRef = collection (db,"questions")
  useEffect(()=>{
    const getQuestions=async()=>{
      const data = await getDocs(usersCollectionRef);

      setQuestions(data.docs.map((doc)=>({...doc.data()})))
      console.log(data,"///////////////")

    };
    getQuestions();

  },[])



  return (
    <>
      {console.log(questions)}

      {submitConfirmState ?
        <>
          <div className='quiz'>
            <NavGrid data={data} questionState={questionState} setQuestionState={setQuestionState} />
            <Main data={data} questionState={questionState} setQuestionState={setQuestionState} />

          </div>
          <div className='submitTest'>
            <button onClick={() => setSubmitState(true)}>submit</button>
          </div>
        </> :
        <Result data={data} />}


      {submitState ? <ConfirmModal setSubmitState={setSubmitState} setSubmitConfirmState={setSubmitConfirmState} data={data} /> : null}






    </>
  );
}

export default App;
