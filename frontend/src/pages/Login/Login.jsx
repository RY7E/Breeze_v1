import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {

  const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};


  return (
    <div className=' flex flex-col w-full h-screen justify-center items-center bg-zinc-900'>
      <div className=' border-[1px] rounded-lg border-blue-300 flex flex-col items-center justify-center min-w-96 h-88 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'> 
        <div className='flex flex-row justify-center w-full gap-3 '>
          <h1 className='text-3xl font-semibold text-center text-blue-900'>
            Login           
          </h1>
          <h1 className='text-3xl font-semibold text-center text-blue-300'>
            Breeze        
          </h1>
        </div>

          <form onSubmit={handleSubmit}>
            <div className=' text-blue-300'>
              <label  className='label p-2'>
                <span className='text-blue-300 text-base label-text'> 
                  Username 
                </span>
              </label>
            <input type="text" placeholder="Enter your alias" className="input input-bordered input-info w-full max-w-xs"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />    
            </div>

            <div>
                <label className='label'>
                  <span className='text-blue-300 text-base label-text'>
                    Password
                  </span>
                </label>
                <input type="password" placeholder="shushhh it's a secret key!" className="input input-bordered input-info w-full h-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}                
                />    
            </div>

 					<Link to='/signup' className='text-sm  hover:underline hover:text-blue-600 mt-3 inline-block'>
 						{"Don't"} have an account?
 					</Link>     

					<div>
						<button className='btn btn-block btn-sm mt-2' disabled={loading}>
							{loading ? <span className='loading loading-spinner '></span> : "Login"}
						</button>
					</div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login