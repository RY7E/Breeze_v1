import React from 'react'

const Login = () => {
  return (
    <div className=' flex flex-col w-full h-screen justify-center items-center bg-zinc-900'>
      <div className=' border-2 border-white flex flex-col items-center justify-center min-w-96 h-72 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'> 
          <h1 className='text-3xl font-semibold text-center text-blue-900'> 
            Login 
            <span className='text-blue-500'> 
              Breeze
            </span>
          </h1>

          <form>
            <div className=' text-blue-300'>
              <label  className='label p-2'>
                <span className='text-blue-300 text-base label-text'> 
                  Username 
                </span>
              </label>
                <input type="text" placeholder="Enter your alias" className="input input-bordered input-info w-full max-w-xs" />    
            </div>

            <div>
                <label className='label'>
                  <span className='text-blue-300 text-base label-text'>
                    Password
                  </span>
                </label>
                <input type="password" placeholder="shushhh it's a secret key!" className="input input-bordered input-info w-full h-10" />    
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login

