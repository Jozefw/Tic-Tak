import Players from "./components/players.jsx";
import GameBoard from './components/GameBoard.jsx';

function App() {
    return (
        <main>
            <div id="game-container">
                <ol id="players">
                    <Players initialName="Player 1" symbol="X"></Players>
                    <Players initialName="Player 2" symbol="0"></Players>
                </ol>
                <GameBoard/>
            </div>
            LOG
        </main>
    )
}

export default App
