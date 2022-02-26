import React from 'react'
import data from '../QuizComponent/data'
import QuizTemplate from './QuizTemplate'
const Reviewquiz = () => {
  return (
    <>
      hello
      {data[0].answer}

      <QuizTemplate/>

    </>
  )
}

export default Reviewquiz