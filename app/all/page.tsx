'use client'
import React,{useState} from 'react'
import { webDevelopmentQuiz } from '../components/All'
import Resullt from '../components/Resullt'

const all = () => {
 
  const [questions,setQuestion]=useState<any>(0)
  const [select,setSelect]=useState<any>(0)
  const [score,setScore]=useState<any>(0)
  const [quizResult,setQuizResult]=useState<boolean>(false)

  const onNextQuestion=()=>{
    updatedScore()
    if(questions < webDevelopmentQuiz.length-1){
     
      setQuestion(questions+1)
      setSelect(0)
    
    }else{
      setQuizResult(true)

    }
  } 
  const updatedScore=()=>{
    
    if(select === webDevelopmentQuiz[questions].answer){
      
      
      setScore(score + 1)
      

    }
   
    
  }
  const resetFunction=()=>{
    setQuizResult(false)
    setSelect(0)
    setScore(0)
    setQuestion(0)
  }
  
  return (
    <div className='bg-blue-200 h-screen flex flex-col items-center justify-center'>
  {quizResult ? (
    <Resullt score={score} total={webDevelopmentQuiz.length} reset={resetFunction} />
  ) : (
    <div className='bg-white p-8 rounded shadow-md max-w-md w-full text-center'>
      <div className="mb-6 ">
        <h2 className="text-xl font-semibold mb-2">Question:</h2>
        <p className="text-gray-700">{webDevelopmentQuiz[questions].question}</p>
      </div>
      <div className='bg-white p-8 rounded shadow-md max-w-md w-full'>
        <ul>
          {webDevelopmentQuiz[questions].options.map((items: any, index: number) => (
            <li key={index} className="mb-2">
              <label className="flex items-center">
                <button
                  className={`w-full bg-white text-black rounded-md shadow-sm hover:bg-blue-100
                   ${select === index + 1 ? "bg-blue-800 text-white" : null}`}
                  onClick={() => setSelect(index + 1)}
                >
                  {items}
                </button>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4"
        onClick={() => onNextQuestion()}
      >
        Next
      </button>
    </div>
  )}
</div>

  )
}


export default all