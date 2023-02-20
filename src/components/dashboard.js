import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth, db, logout, storage } from '../firebase';
import { query, collection, where, getDocs } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState('');
  const [letter, setLetter] = useState(null);

  const navigate = useNavigate();

  const fetchUserNames = async () => {
    try {
      const q = query(collection(db, 'users'), where('email', '==', user.email));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) navigate('/');
    fetchUserNames();
  }, [user, loading, navigate, fetchUserNames]);

  useEffect(() => {
    getDownloadURL(ref(storage, name + ".pdf")).then((url) => {
      setLetter(url);
    })
  },[name])

  return (
    <div className="h-screen">
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
      <embed type="application/pdf" src={letter} width="100%" height="100%" />
    </div>
  );
}

export default Dashboard;