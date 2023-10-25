'use client'
import React from 'react';
import {useRouter} from 'next/navigation';
const Login = () => {
const router=useRouter()  
const sumbitHnadler=async(event:any)=>{
  event.preventDefault()
  const formData=new FormData(event.target)
  const username=formData.get("username")
  const password=formData.get("password")
  const res=await fetch("/api/login",{
    method:"POST",
    body:JSON.stringify({username,password})

  })
  const {accessToken}=await res.json()
  console.log(accessToken)
  if(accessToken){
    router.push("/")
  }else{
    console.log("login failed")
  }

}
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 via-yellow-500 to-green-500">
    <div className="bg-white p-8 rounded shadow-md w-96">
      <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>
      <form onSubmit={sumbitHnadler}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-2 rounded-md hover:bg-opacity-90 focus:outline-none "
        >
          Login
        </button>
      </form>
    </div>
  </div>
);
};

export default Login;


{/*
<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-blue-500 to-green-400">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Login</h2>

        <form >
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-white py-2 rounded-md focus:outline-none focus:shadow-outline-indigo hover:bg-indigo-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>

*/}