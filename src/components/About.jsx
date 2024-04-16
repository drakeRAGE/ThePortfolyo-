import React from 'react'

function About({user}) {
  return (
    <div
      id="about"
      className="relative w-full h-auto pt-40 md:h-screen bg-[#0a192f] dark:bg-gray-100 text-gray-300 dark:text-gray-800"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="absolute top-16 max-w-[1000px] w-full">
          <div className="pl-4">
            <p className="opacity-10 text-9xl font-bold inline border-b-4 border-yellow-600 dark:text-gray-900">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-2xl">
            <p>A little bit about me.</p>
          </div>
          <div>
            <p>
              {user.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About