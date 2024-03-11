import React from 'react'

const GamePause =  ({continueGameFromPause, restartGame, quitGame}) => {
  return (
    <section className='bg-gradient-to-b from-[#020024] to-transparent rounded-md absolute top-0 left-0 w-screen h-screen flex items-center justify-center '>
    <div className='bg-[#261676] w-[80%] h-1/2 flex flex-col rounded-xl relative xl:w-1/3 xl:h-1/2 slide-in-right'>
    <h1 className='text-7xl title-gradient -mt-12 xl:text-8xl text-center'>Paused</h1>
    <div className='flex flex-col items-center justify-center gap-7 text-white text-2xl uppercase h-full'>
      <button
       className='bg-[#2463ff] uppercase text-4xl rounded-full w-4/5 border-and-shadow xl:w-1/2 xl:h-1/6'
        onClick={continueGameFromPause}>Continue</button>

      <button 
      className='bg-[#2463ff] uppercase text-4xl rounded-full w-4/5 border-and-shadow xl:w-1/2 xl:h-1/6' 
      onClick={restartGame}>New Category</button>

      <button 
      className='special-button uppercase text-4xl rounded-full w-4/5 xl:w-1/2 xl:h-1/6'
      onClick={quitGame}>Quit Game</button>
    </div>
    </div>
  </section>
  )
}

export default GamePause
