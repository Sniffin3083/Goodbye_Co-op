import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth, db, logout } from '../firebase';

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) navigate('/');
    fetchUserNames();
  }, [user, loading]);

  return (
    <div className="grid h-screen place-items-center">
      <div className="bg-white p-10 rounded-lg shadow-2xl">
        <h1 className="text-3xl font-bold mb-5">Dashboard</h1>
        <h2 className="text-xl font-medium mb-5">Welcome {name}</h2>
        <button
          className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => logout()}
        >
          Logout
        </button>
      </div>
      <object data="../letters/{name}">

      </object>
    </div>
  );
}

export default Dashboard;