import React from 'react'

const HowToPlay = ({goToMainScreen}) => {
  return (
    <section className='h-screen'>
      <div className='flex  gap-10 items-center mb-10'>
      <button className="text-white text-3xl special-button rounded-full p-2"onClick={goToMainScreen}><svg xmlns="http://www.w3.org/2000/svg" width="41" height="39" fill="none" viewBox="0 0 41 39"><path fill="#fff" d="M0 19.5 19.02.5v12.244C26.348 12.744 41 17.896 41 38.5c0-11.147-14.653-13.37-21.98-13.089V38.5L0 19.5Z"/></svg></button>
      <h1 className='text-5xl title-gradient'>How to Play</h1>
      </div>

      <div className='xl:h-fit'>
        <ul className='flex flex-col gap-3 text-left xl:flex-row'>
            <li className='bg-white rounded-xl p-4'>
                <h2 className='text-5xl uppercase text-blue-900 xl:flex xl:flex-col xl:items-center'>
                    <span className='mr-3 text-blue-500 xl:text-5xl'>01</span>
                    Choose a category
                </h2>
                <p className='text-xl text-blue-900 xl:text-3xl xl:text-center'>First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.</p>
            </li>
            <li className='bg-white rounded-xl p-4'>
                <h2 className='text-5xl uppercase text-blue-900 xl:flex xl:flex-col xl:items-center'>
                    <span className='mr-3 text-blue-500 xl:text-5xl'>02</span>
                    Guess Letters
                </h2>
                <p className='text-xl text-blue-900 xl:text-3xl xl:text-center'>Take turns guessing letters. The computer fills in the relevant spaces if your guess is correct. If it's wrong, you lose some health, which empties after eight incorrect guesses.</p>
            </li>
            <li className='bg-white rounded-xl p-4'>
                <h2 className='text-5xl uppercase text-blue-900 xl:flex xl:flex-col xl:items-center'>
                    <span className='mr-3 text-blue-500 xl:text-5xl'>03</span>
                    Win or Lose
                    </h2>
                    <p className='text-xl text-blue-900 xl:text-center xl:text-3xl'>You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.</p>
            </li>
        </ul>
      </div>
    </section>
  )
}

export default HowToPlay
