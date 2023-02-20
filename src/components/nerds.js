import React from 'react';

function Nerds() {
  return(
    <div className="grid place-items-center">
      <div className="border-t-4 border-black">
        <div className="grid place-items-center p-8">
          <h1 className="font-bold text-5xl pb-12 pt-4">For the Nerds</h1>
          <p className="text-xl pb-8">
            This app was created using React for the front end, Firebase as the back end, and TailwindCSS for easier styling.
          </p>
          <p className="text-xl pb-8">
            The code for this app can be found on my <a className="underline text-blue-600 hover:text-blue-800" href="https://github.com/Sniffin3083/Goodbye_Co-op">GitHub</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Nerds;