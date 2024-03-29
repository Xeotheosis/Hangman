import React from 'react'

const MainMenu = ({goToHowToPlayScreen, goToPlayScreen}) => {

    

  return (
    <section className='flex flex-col justify-center h-[100svh] xl:items-center p-8'>
      <section className='relative bg-[#261676] rounded-3xl border-and-shadow xl:w-1/4 bounce-in-top'>
      <div id="main-title" className='text-3xl text-white relative -mt-16 flex justify-center'>
      <h1 className='text-8xl :after:slide-in-right title-gradient xl:text-9xl'>Hangman</h1>
      </div>
      <div className='flex justify-center my-10'>
      <button
      className='text-2xl text-white special-button rounded-full p-8 rotate-90-cw'
      onClick={goToPlayScreen}>
        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="64" fill="none" viewBox="0 0 67 64"><g filter="url(#a)"><path fill="#fff" d="m3.381 33.397-.283-1.845C.658 15.62-.563 7.654 4.026 3.32 8.616-1.013 16.31.84 31.7 4.545l2.035.49c21.007 5.058 31.51 7.587 33.051 15.019 1.541 7.431-7.06 14.08-24.26 27.376l-1.753 1.355c-13.98 10.808-20.972 16.212-27.15 13.67-6.18-2.543-7.534-11.382-10.242-29.058Z"/></g><defs><filter id="a" width="66.038" height="62.264" x=".925" y=".811" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-6"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.141176 0 0 0 0 0.188235 0 0 0 0 0.254902 0 0 0 1 0"/><feBlend in2="shape" result="effect1_innerShadow_15_637"/></filter></defs></svg>
      </button>
      </div>
      <div className='flex justify-center'>
      <button 
      className='text-2xl text-white bg-blue-800 p-4 rounded-full uppercase border-and-shadow my-10 w-[80%] slide-in-fwd-center xl:h-[5rem] xl:text-4xl'
      onClick={goToHowToPlayScreen}>How to Play</button>
      </div>
      </section>
    </section>
  )
}

export default MainMenu
