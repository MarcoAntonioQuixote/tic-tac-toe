import React from 'react'

function SlotTile({value,index,currentPlayer,handleTurn}) {


  const clickSlot = () => {
    console.log(`Clicked ${index} for ${currentPlayer}`)
    handleTurn(index,currentPlayer)
  }

  return (
    <div className='slot' onClick={clickSlot}>{value}</div>
  )
}

export default SlotTile