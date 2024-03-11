import React, { useState, useEffect } from 'react';
import GameWon from './GameWon';
import GamePause from './GamePause';

const MainGame = ({ setGameStarted,selectedCategory, randomNameToGuess, splitNameArray, handleCategorySellect,category, setSelectedCategory}) => {

    const continueGameFromPause = () => {
        setGamePaused(false);
    }

    const continueGameSameCategory = ()=>{
        setGameWon(false);
        setGameLost(false);
        handleCategorySellect(category);
        setSelectedLetters([]);
        setKeyboardLetterSelected(Array(9).fill(false));
        setKeyboardLetterSelected2(Array(9).fill(false));
        setKeyboardLetterSelected3(Array(9).fill(false));
        setProgressBar([])
        
    }
    const restartGame = () =>{
        setSelectedCategory(false);
        
    }
    const quitGame = () => {
        setGameStarted(false);
        setSelectedCategory(false)
      }
    
    const keyboard = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    const slicedKeyboard = keyboard.slice(0, 9);
    const slicedKeyboard2 = keyboard.slice(9, 18);
    const slicedKeyboard3 = keyboard.slice(18, 26);


    const [selectedLetters, setSelectedLetters] = useState([]);
    const [isGameWon, setGameWon] = useState(false);
    const [isKeyboardLetterSelected, setKeyboardLetterSelected] = useState(Array(9).fill(false))
    const [isKeyboardLetterSelected2, setKeyboardLetterSelected2] = useState(Array(9).fill(false))
    const [isKeyboardLetterSelected3, setKeyboardLetterSelected3] = useState(Array(8).fill(false))
    const [isGamePaused, setGamePaused] = useState(false);
    const [progressBar, setProgressBar] = useState([]);
    const [isGameLost, setGameLost] = useState(false);
    
   


    // Check for win whenever selectedLetters changes
    useEffect(() => {
        checkForWin();
    }, [selectedLetters]);

    const checkForWin = () => {
        // Check if all letters in splitNameArray are found in selectedLetters
        const allLettersFound = splitNameArray.every(word =>
            word.split('').every(letter => selectedLetters.includes(letter))
        );
    
        if (allLettersFound) {
            // Set the game as won if all letters are found
            setGameWon(true);
            console.log("You won!");
        } else {
            // Array to store letters not found in splitNameArray
            const lettersNotFound = selectedLetters.filter(letter =>
                !splitNameArray.some(word => word.includes(letter))
                
               
            );
            setProgressBar(lettersNotFound);
          
            // Check if the length of lettersNotFound array reaches 8
            if (lettersNotFound.length === 8) {
                // If the length reaches 8, set both gameWon and gameLost to true
                setGameWon(true);
                setGameLost(true);
                console.log("You lost!");
            } else {
                console.log(lettersNotFound.length);
                
            }
        }
    };
    
    

    const handleLetterClick = (letter,index) => {
        // Store the clicked letter
        setSelectedLetters(prevSelectedLetters => [...prevSelectedLetters, letter]);
        setKeyboardLetterSelected(prevState => {
            const newState = [...prevState];
            newState[index] = true;
            return newState;
        });
       
    }

    const handleLetterClick2 = (letter,index) => {
        setSelectedLetters(prevSelectedLetters => [...prevSelectedLetters, letter]);
        setKeyboardLetterSelected2(prevState => {
            const newState = [...prevState];
            newState[index] = true;
            return newState;
        });
    }

    const handleLetterClick3 = (letter,index) => {
        setSelectedLetters(prevSelectedLetters => [...prevSelectedLetters, letter]);
        setKeyboardLetterSelected3(prevState => {
            const newState = [...prevState];
            newState[index] = true;
            return newState;
        });
    }
   const pauseGame = () =>{
    setGamePaused(true);
   }

   const progressBarWidth = 90;

   // Calculate the remaining progress percentage
   const remainingProgress = (progressBar.length / 8) * 90; // Assuming 8 is the maximum length
   
   // Set the width of the :after element dynamically
   const progressBarStyle = {
    width: `${progressBarWidth - remainingProgress}%`,
    transition: 'width 0.3s ease', // Transition effect for width property
};


    return (
        <section className="flex flex-col gap-5 h-[100svh] p-8 xl:justify-around">
           
            <section>
                <div className='flex justify-between slide-in-top xl:justify-evenly'>
                    <div className='flex items-center gap-3'>
                    <button 
                    onClick={pauseGame}
                    className='px-2 py-4 special-button rounded-full'>
                    <svg className="h-[20px] xl:h-[2rem] xl:w-[3rem]"xmlns="http://www.w3.org/2000/svg" width="38" height="32" fill="none" viewBox="0 0 38 32">
                        <path fill="#fff" d="M0 0h38v7H0zM0 13h38v6H0zM0 25h38v7H0z"/>
                    </svg>
                    </button>
                    <p className='text-3xl text-white xl:text-5xl'>{selectedCategory}</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div id="progress-bar" className='h-3 bg-white rounded-full w-20 relative xl:w-40'>
                            <div className="bg-[#261676] absolute h-2 rounded-full top-[2px] left-1"style={progressBarStyle}></div>
                        </div>
                    <svg className="h-1/2 xl:h-full"xmlns="http://www.w3.org/2000/svg" width="54" height="50" fill="none" viewBox="0 0 54 50"><path fill="url(#a)" d="m26.667 49.467-3.867-3.52C9.067 33.493 0 25.253 0 15.2 0 6.96 6.453.533 14.667.533c4.64 0 9.093 2.16 12 5.547 2.906-3.387 7.36-5.547 12-5.547C46.88.533 53.333 6.96 53.333 15.2c0 10.053-9.066 18.293-22.8 30.747l-3.866 3.52Z"/><defs><linearGradient id="a" x1="26.667" x2="26.667" y1="8.567" y2="49.467" gradientUnits="userSpaceOnUse"><stop stop-color="#FE71FE"/><stop offset="1" stop-color="#7199FF"/></linearGradient></defs></svg>
                    </div>
                </div>
            </section>
            <section className='flex flex-col gap-5 justify-center items-center '>
                {randomNameToGuess && (
                    <div className="flex gap-5 justify-center flex-wrap mt-[10rem] slide-in-left">
                        {/* Map over each word */}
                        {splitNameArray.map((word, index) => (
                            <div key={index} className="flex gap-3">
                                {/* Map over each letter in the word */}
                                {word.split('').map((letter, letterIndex) => (
                                    <div key={letterIndex} className={`p-1 w-[1.8rem] h-[3rem] bg-blue-900 text-white text-3xl xl:text-5xl flex justify-center items-center rounded-md  xl:w-[4rem] xl:h-[5rem]  ${selectedLetters.includes(letter) ? "border-and-shadow":""}`}>{selectedLetters.includes(letter) ? letter: ""}</div>
                                ))}
                            </div>
                        ))}
                    </div>
                )}

                {/* Render keyboard */}
                <div className="flex flex-col  items-center gap-3 mt-[5rem] slide-in-right">
                    <div className="flex gap-2">
                        {slicedKeyboard.map((letter, index) => (
                            <div 
                            key={index} 
                            className={`p-2 w-[2.2rem] h-[3rem] bg-white text-3xl rounded-md uppercase xl:w-[4rem] xl:h-[5rem] xl:text-5xl flex justify-center items-center cursor-pointer hover:scale-95 transition delay-75 ${isKeyboardLetterSelected[index] ? 'opacity-50' : ''}`} 
                            onClick={() => handleLetterClick(letter,index)}>{letter}</div>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        {slicedKeyboard2.map((letter, index) => (
                            <div key={index} className={`p-2 w-[2.2rem] h-[3rem] bg-white text-3xl rounded-md uppercase xl:w-[4rem] xl:h-[5rem] xl:text-5xl flex justify-center items-center cursor-pointer hover:scale-95 transition delay-75 ${isKeyboardLetterSelected2[index] ? 'opacity-50' : ''}`}  onClick={() => handleLetterClick2(letter,index)}>{letter}</div>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        {slicedKeyboard3.map((letter, index) => (
                            <div key={index} className={`p-2 w-[2.2rem] h-[3rem] bg-white text-3xl rounded-md uppercase xl:w-[4rem] xl:h-[5rem] xl:text-5xl flex justify-center items-center cursor-pointer hover:scale-95 transition delay-75 ${isKeyboardLetterSelected3[index] ? 'opacity-50' : ''}`}  onClick={() => handleLetterClick3(letter,index)}>{letter}</div>
                        ))}
                    </div>
                </div>
        
            </section>

            {isGameWon? <GameWon
            
            quitGame={quitGame}
            isGameLost={isGameLost}
            restartGame={restartGame}
            continueGameSameCategory={continueGameSameCategory}/>:""}
            {isGamePaused?<GamePause
           
            quitGame={quitGame}
            restartGame={restartGame}
            continueGameFromPause={continueGameFromPause}/>:""}
            
        </section>
    );
};

export default MainGame;
