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
      <h1 className="font-bold text-5xl">Login</h1>
      <div>
        <label>Email: </label>
        <input 
        className="border border-solid border-slate-500 focus:border-black" 
        type="text" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="example@bye.ca"
        />
      </div>
      <div>
        <label>Password: </label>
        <input 
        className="border border-solid border-slate-500 focus:border-black" 
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        />
      </div>
      <button
        className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => logInWithEmailAndPassword(email, password)}
      >
        Login
      </button>
    </div>
  )
}

export default Login;