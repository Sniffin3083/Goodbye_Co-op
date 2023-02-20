import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, logInWithEmailAndPassword } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/dashboard');
  }, [user, loading]);

  return (
    <div className="grid h-screen place-items-center">
      <div className="border border-dotted border-black rounded-xl">
        <div className="grid place-items-center p-8">
          <h1 className="font-bold text-5xl pb-12 pt-4">Login</h1>
          <div className="pb-8">
            <label className="pr-8">Email: </label>
            <input 
            className="pl-1 border border-solid border-slate-500 focus:border-black focus:drop-shadow-xl" 
            type="text" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@bye.ca"
            />
          </div>
          <div className="pb-8">
            <label className="pr-1">Password: </label>
            <input 
            className="pl-1 border border-solid border-slate-500 focus:border-black focus:drop-shadow-xl" 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            />
          </div>
          <button
            className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded drop-shadow-xl"
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login;