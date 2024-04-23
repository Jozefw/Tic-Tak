import { useState } from "react";

import Players from "./components/players.jsx";
import GameBoard from './components/GameBoard.jsx';

function App() {
    const [activePlayer,setActivePlayer] = useState('X');

    function handlePlayerRotation(){
        setActivePlayer((CurrentPlayer)=>{
            CurrentPlayer === "X" ? "O" : "X"
        });
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Players initialName="Player 1" symbol="X" isActivePlayer={activePlayer === "X"}></Players>
                    <Players initialName="Player 2" symbol="0" isActivePlayer={activePlayer === "O"}></Players>
                </ol>
                <GameBoard playerChange={handlePlayerRotation} activePlayerIcon={activePlayer}/>
            </div>
            LOG
        </main>
    )
}

export default App
