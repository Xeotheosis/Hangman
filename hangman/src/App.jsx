import { useState } from 'react'
import './App.css'
import Data from "./assets/data.json"
import MainMenu from './MainMenu';
import HowToPlay from './HowToPlay';
import PickCategory from './PickCategory';
import MainGame from './MainGame';
import GameWon from './GameWon';

function App() {
  


  const [isGameStarted, setGameStarted] = useState(false);
  const [isHowToPlay,setHowToPlay] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [randomNameToGuess, setRandomNameToGuess] = useState(null);
  const [splitNameArray, setSplitNameArray] = useState([]);


 

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    const selectedCategoryName = Data.categories[category];
    const randomIndex = Math.floor(Math.random() * selectedCategoryName.length);
    const randomNameToGuess = selectedCategoryName[randomIndex].name;
    setRandomNameToGuess(randomNameToGuess);
  
    const nameArray = randomNameToGuess.split(' ');
    const splitNameArray = nameArray.map(word => word.toLowerCase());
    setSplitNameArray(splitNameArray); // Update the state with the lowercase splitNameArray
  };
  

  const goToHowToPlayScreen = () => {

    setGameStarted(true);
    setHowToPlay(true);
}

const goToMainScreen = () => {
  setGameStarted(false);
  setHowToPlay(false)
}

const goToPlayScreen = () => {
  setGameStarted(true);
}





  return (
    <section>
      {!isGameStarted &&(
        <MainMenu 
        goToPlayScreen = {goToPlayScreen}
        goToHowToPlayScreen={goToHowToPlayScreen}/>
      )}

      {isHowToPlay && (
        <HowToPlay 
        goToMainScreen={goToMainScreen}/>
      )}

      {isGameStarted&& !isHowToPlay && !selectedCategory &&(
        <PickCategory
        onSelectCategory={handleCategorySelect}
        goToMainScreen={goToMainScreen}/>
      )}


{splitNameArray.length > 0 && selectedCategory && (
  <MainGame
  setGameStarted={setGameStarted}
  setSelectedCategory={setSelectedCategory}
    category={selectedCategory}
    handleCategorySellect={handleCategorySelect}
    randomNameToGuess={randomNameToGuess}
    splitNameArray={splitNameArray}
    selectedCategory={selectedCategory}
  />
)}
    </section>
  )
}

export default App
