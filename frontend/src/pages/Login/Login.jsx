import React from 'react'

const Login = () => {
  return (
    <div className='w-full h-screen flex bg-zinc-900 items-center'>
      <div className='flex flex-col items-center justify-center min-w-96 h-80 mx-auto border-2 border-zinc-700 rounded-lg'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'> 
        <h1 className='text-3xl font-semibold text-center text-blue-900'> 
            Login 
            <span className='text-blue-500'> Breeze</span>
        </h1>
        <form>
        <div className=' text-blue-300'>
            <label  className='label p-2'>
                <span className='text-blue-300 text-base label-text'> Username </span>
            </label>
            <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />    
            </div>

            <div>
                <label className='label'>
                    <span className='text-blue-300 text-base label-text'>Password</span>
                </label>
                <input type="password" placeholder="Enter Password" className="input input-bordered input-info w-full h-10 mb-4" /> 
                <input:submi className="block w-24  py-2 px-5 bg-blue-600 mt-2 items-center text-white rounded-lg">
                  Submit
                </input:submi>   
            </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Login

