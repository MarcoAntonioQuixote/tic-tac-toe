import React from 'react'
import Grid from '../Grid.js';
import StatusBar from '../StatusBar.js';

function GamePage({currentPlayer,handleTurn}) {
  return (
    <>
        <Grid currentPlayer={currentPlayer} handleTurn={handleTurn}/>
        <StatusBar currentPlayer={currentPlayer} />
    </>
  )
}

export default GamePage