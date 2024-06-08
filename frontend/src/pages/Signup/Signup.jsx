import React from 'react'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-center text-3xl font-semibold text-blue-400'>
        Sign Up <span className='text-blue-300'> Breeze </span>
        </h1>

        <form>
        <div>
          <label className='label p-2'>
            <span className=' text-blue-300 text-base label-text'>
              Full Name sir
            </span>
          </label>
          <input type='text' placeholder='Geez! Not another John Doe' className='w-full' input input-bordered h-10 />
        </div> 

        <div>
        <label className='label p-2'>
            <span className='text-blue-300 text-base label-text'>
              Username
            </span>
          </label>
          <input type='text' placeholder='Your alias' className='w-full' input input-bordered input-info w-full max-w-xs h-10  />
        </div>

        <div>
        <label className='label p-2'>
            <span className='text-blue-300 text-base label-text'>
              Password
            </span>
          </label>
          <input type='text' placeholder="not 'password'" className='w-full' input input-bordered h-10 />
        </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
