import React from 'react';

function What() {
  return(
    <div className="grid place-items-center">
      <div className="border-t-4 border-black">
        <div className="grid place-items-center p-8">
          <h1 className="font-bold text-5xl pb-12 pt-4">What is this?</h1>
          <p className="text-xl pb-8">
            This is a app that provides each of my co-workers with personalized letters written by me. 
            It is a way for me to show my appreciation towards them in all that they have taught me and supported me. 
            I wanted to use the skills I aquired at SAIT to create an app that would assit in my ability to
            show my graditude towards everyone I ever worked with as I got a significant amount of support towards my education.
          </p>
          <p className="text-xl pb-8">
            I hope everyone appreciates the letters and I hope that they can be used as a reminder of the good times we had together.
          </p>
          <p className="text-2xl pb-8">Thank you everyone and I hope to see you again in the future. But as a customer this time.</p>
        </div>
      </div>
    </div>
  )
}

export default What;