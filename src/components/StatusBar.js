
function StatusBar({currentPlayer}) {

  return (
    <div style={{border: 'solid white 2px'}} onClick={() => console.log('status bar')}>StatusBar, current player is {currentPlayer}</div>
  )
}

export default StatusBar