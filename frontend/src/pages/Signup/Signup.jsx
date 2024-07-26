import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';

const SignUp = () => {  
  
  const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
	});

	const { loading, signup } = useSignup();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};



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

      <form onSubmit={handleSubmit}>
        <div className=' text-blue-300'>
          <label className='label p-2'>
            <span className=' text-blue-300 text-base label-text'>
              Full Name
            </span>
          </label>
          <input type='text' placeholder='Geez! Not another John Doe' className='w-full max-w-xs input input-bordered input-info h-12' 
            value={inputs.fullName}
            onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
          />
        </div> 

        <div className=' text-blue-300'>
          <label className='label p-2'>
            <span className='text-blue-300 text-base label-text'>
              Username
            </span>
          </label>
            <input type='text' placeholder='Your alias' className='w-full input input-bordered input-info max-w-xs h-12' 
              value={inputs.username}
              onChange={(e) => setInputs({...inputs, username: e.target.value})}
            />
        </div>

        <div>
          <label className='label p-2'>
            <span className='text-blue-300 text-base label-text'>
              Password
            </span>
          </label>
            <input type='password' placeholder="try length 6 or more" className='w-full input input-bordered input-info h-12'
              value={inputs.password}
              onChange={(e) => setInputs({...inputs, password: e.target.value})}
            />
        </div>

        <div>
						<label className='label'>
							<span className='text-blue-300 text-base label-text'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder="hope it wasn't 'password'!"
							className='w-full input input-bordered input-info h-12'
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
          <button className='btn btn-block btn-sm mt-2 border border-slate-700' >
          SignUp
						{/* <button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"} */}
						</button>
					</div>

      </form>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
