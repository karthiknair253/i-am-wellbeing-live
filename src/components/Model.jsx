/* eslint-disable react/prop-types */
import React from 'react'

const Model = ({ isOpen, setIsOpen, selectedTeamMember }) => {
  return (
    <div
      className={`fixed items-center justify-center   pt-20 transition-all duration-300 ease-in-out inset-0 ${isOpen ? "h-full z-50" : "h-0 z-[-2]"
        } overflow-hidden`}
    >


      <div className='model-content w-[90%]  md:max-w-3xl m-auto  '>

        <div className='bg-white text-black p-8 max-h-[500px] md:max-h-auto overflow-y-scroll md:overflow-hidden'>
          <div
            className='logo-close w-full text-right px-5 font-bold text-black'
            onClick={() => setIsOpen(false)}
          >
            <i className='fas fa-times font-bold text-3xl cursor-pointer'></i>
          </div>
          <h2 className='text-2xl font-semibold mb-2'>
            {selectedTeamMember?.name}
          </h2>
          <h3 className='text-xl font-semibold mb-2'>
            {selectedTeamMember?.designation}
          </h3>
          <div className='md:text-lg text-md'></div>
          {selectedTeamMember?.description?.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>
      </div>

    </div>


  );
}

export default Model