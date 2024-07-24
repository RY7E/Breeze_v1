import React from 'react'

const SignUp = () => {    
  return (
    <div className='flex flex-col w-full h-screen items-center justify-center'>
      <div className='border-[1px] rounded-lg border-blue-300 flex flex-col items-center justify-center min-w-96 h-84 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'> 
          <div className='flex flex-row justify-center w-full gap-3 '>
          <h1 className='text-3xl font-semibold text-center text-blue-900'>
            Sign Up           
          </h1>
          <h1 className='text-3xl font-semibold text-center text-blue-300'>
            Breeze        
          </h1>
        </div>

      <form>
        <div className=' text-blue-300'>
          <label className='label p-2'>
            <span className=' text-blue-300 text-base label-text'>
              Full Name
            </span>
          </label>
        <input type='text' placeholder='Geez! Not another John Doe' className='w-full max-w-xs input input-bordered input-info h-12' />
        </div> 

        <div className=' text-blue-300'>
          <label className='label p-2'>
            <span className='text-blue-300 text-base label-text'>
              Username
            </span>
          </label>
          <input type='text' placeholder='Your alias' className='w-full input input-bordered input-info max-w-xs h-12'  />
        </div>

        <div>
          <label className='label p-2'>
            <span className='text-blue-300 text-base label-text'>
              Password
            </span>
          </label>
          <input type='password' placeholder="not 'password'" className='w-full input input-bordered input-info h-12' />
        </div>

        {/* <div>
						<label className='label'>
							<span className='text-base label-text'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10'
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
						/>
					</div>

					<Link
						to={"/login"}
						className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
						href='#'
					>
						Already have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
					</div> */}




      </form>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
