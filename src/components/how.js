import React from 'react';

function How() {
  return(
    <div className="grid place-items-center">
      <div className="border-t-4 border-black">
        <div className="grid place-items-center p-8">
          <h1 className="font-bold text-5xl pb-12 pt-4">How does it work?</h1>
          <p className="text-xl pb-8">
            You must be logged in to view the letters. 
            Once you are logged in you will be able to see the letters that are available to you as well as download them. 
            You should have been provided with your login information by me or on the posting in the staff room.
          </p>
          <p className="text-xl pb-8">It's as simple as that! I hope you enjoy reading the letters!</p>
        </div>
      </div>
    </div>
  )
}

export default How;