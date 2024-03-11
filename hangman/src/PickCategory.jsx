import React from 'react'
import Data from "./assets/data.json"

const PickCategory = ({goToMainScreen, onSelectCategory, getRandomIndex}) => {
  return (
    <section className='flex flex-col gap-5 h-[100svh] p-8 xl:justify-center xl:items-center xl:gap-20'>
      <div className='flex items-center gap-10 xl:w-2/3'>
        <button 
        className='special-button rounded-full p-2'
        onClick={goToMainScreen}><svg className='xl:h-[4rem] xl:w-[4rem]' xmlns="http://www.w3.org/2000/svg" width="41" height="39" fill="none" viewBox="0 0 41 39"><path fill="#fff" d="M0 19.5 19.02.5v12.244C26.348 12.744 41 17.896 41 38.5c0-11.147-14.653-13.37-21.98-13.089V38.5L0 19.5Z"/></svg></button>
         <h1 className='text-white text-3xl xl:text-8xl w-[90%] xl:text-center'>Pick a Category</h1>
         </div>
         
         <ul id="movie-list" className='flex flex-col xl:grid grid-cols-3 grid-rows-2 gap-10 xl:w-2/3 xl:h-1/2'>
  {/* Mapping over category names and rendering them */}
  {Object.keys(Data.categories).map(categoryName => (
    <li 
      key={categoryName}
      className='bg-[#2463ff] p-4 text-white uppercase text-2xl rounded-[80px] border-and-shadow cursor-pointer hover:scale-95 transition delay-75 flex justify-center items-center xl:text-5xl'
      onClick={() => {
        onSelectCategory(categoryName);
      }} 
    >
      {categoryName}
    </li>
  ))}
</ul> 
    </section>
  )
}

export default PickCategory
