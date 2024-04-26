import React from 'react'
import SlotTile from './SlotTile.js'


function Grid({currentPlayer,handleTurn}) {
  
  const showSlots = slots.map((value,index) => {
    return (
      <SlotTile 
        value={value} 
        index={index} 
        key={index} 
        currentPlayer={currentPlayer}
        handleTurn={handleTurn}
      /> 
    )
  })

  return (
    <div className='grid'>
      {showSlots}
    </div>
  )
}

export default Grid