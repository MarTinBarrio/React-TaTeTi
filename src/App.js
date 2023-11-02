import GameBoard from "./components/GameBoard"
import Player from "./components/Player"

function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">

          <Player playerName={"Player1"} symbol="X"/>
          <Player playerName={"Player2"} symbol="O"/>
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
    
  )
}

export default App
