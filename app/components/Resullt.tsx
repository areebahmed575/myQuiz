'use client'
import React, { ReactNode } from 'react'

 
import { useRouter } from 'next/navigation'

interface ResultProps {
   score:number,
   total:number,
   reset:any

  }
  

const Result: React.FC<ResultProps> = (props) => {
  const router = useRouter()
  const getColorBasedOnRoute = () => {
    // Check the pathname or any other relevant route information
    if (location.pathname === '/html') {
      return { headingColor: 'text-red-500', buttonColor: 'bg-red-500 hover:bg-red-700' };
    } else if(location.pathname === '/css') {
      return { headingColor: 'text-green-500', buttonColor: 'bg-green-500 hover:bg-green-700' };
    }
    else if(location.pathname === '/javascript') {
      return { headingColor: 'text-yellow-500', buttonColor: 'bg-yellow-500 hover:bg-yellow-700' };
    }else{
      return { headingColor: 'text-blue-500', buttonColor: 'bg-blue-500 hover:bg-blue-700' };
    }
  };
  const { headingColor, buttonColor } = getColorBasedOnRoute();
  return (
    <div className='flex items-center justify-center h-screen'>
    <div className='bg-white p-8 rounded shadow-md max-w-lg w-full text-center '>
      <div className={`text-4xl font-bold  mb-4 ${headingColor}`}>Quiz Results</div>
      <div className='text-xl font-semibold mb-4'>Your Score: {props.score}</div>
      <div className='text-xl font-semibold'>Total Score: {props.total}</div>

      {/* Additional styling for a separator line */}
      <hr className='my-6 border-gray-300' />

      <div className='text-lg text-gray-700'>
        {props.score === props.total
          ? 'Congratulations! You got a perfect score!'
          : 'You can always learn more. Keep it up!'}
      </div>

      {/* Add a button or link to go back to the quiz */}
      <button
        className={`mt-8 text-white px-4 py-2 rounded hover:text-white ${buttonColor}`}
        onClick={() => router.push('/')}
      >
        Back to Home
      </button>
    </div>
  </div>
  )
}

export default Result