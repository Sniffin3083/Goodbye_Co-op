import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom';
import { auth, db, logout, storage } from '../config/firebase';
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

  const downloadLetter = async () => {
    try {
      const url = await getDownloadURL(ref(storage, name + ".pdf"));
      navigate(url);
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
    <div className="h-screen w-screen">
      <div className="flex items-center">
        <div className="py-4 px-5">
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </div>
        <div className="py-4 px-56">
          <h2 className="text-xl font-medium">Welcome {name}</h2>
        </div>
        <div className="py-4 pl-20">
          <button
            className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="pl-16 mb-56 w-full h-full">
        <embed type="application/pdf" src={letter} width="95%" height="120%"/>
      </div>
      <div className="p-16">
        <p className="text-xl">
          I hope you enjoyed your letter! Thanks again for all the support I got through out the years working with you!
          Here is a download link to the letter if you want to save it for later.
        </p>
      </div>
      <div className="grid place-items-center pb-16">
        <Link to={letter}>
          <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">
            Download
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;