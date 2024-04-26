import {useState} from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import StartPage from './components/Pages/StartPage.js';
import GamePage from './components/Pages/GamePage.js';
import Navbar from './components/Navbar.js';

function App() {
    const [currentPlayer, setCurrentPlayer] = useState('X')
    const [slots, setSlots] = useState(new Array(9).fill(undefined))

    const handleTurn = (slotToFill,cP) => {
        //set tile value to currentPlayer
        setSlots(prev => {
            prev[slotToFill] = cP;
            return prev;
        })

        // switch current player
        if (currentPlayer === 'X') {
            setCurrentPlayer('O')
        } else {
            setCurrentPlayer('X')
        }

        // check for a winner

        //run logic to see if there are 3 in a row [slots]
    }

    

  return (
    <div className="App-header">
        <h2>Tic Tac Toe</h2>

        <Navbar />

        <Routes>
            <Route path='/' element={<StartPage />} />
            <Route path='/play' element={
                <GamePage 
                    currentPlayer={currentPlayer}
                    handleTurn={handleTurn}
                />
            } />
        </Routes>

    </div>
  );
}

export default App;
