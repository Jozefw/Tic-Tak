import {useState} from "react";

import Players from "./components/players.jsx";
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';

function App() {
    const [activePlayer,setActivePlayer] = useState('X');
    const [playerTurns,SetPlayerTurns] = useState('')

    function handlePlayerRotation(rowIndex, columnIndex) {
        setActivePlayer((CurrentPlayer) => CurrentPlayer === "X" ? "O" : "X");
        SetPlayerTurns(previousTurns => {
            const updatedTurns = [
                {
                    square: {
                        row: rowIndex,
                        col: columnIndex
                    },
                    player: activePlayer
                },
                ...previousTurns
            ];

        });
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Players
                        initialName="Player 1"
                        symbol="X"
                        isActivePlayer={activePlayer === "X"}></Players>
                    <Players
                        initialName="Player 2"
                        symbol="0"
                        isActivePlayer={activePlayer === "O"}></Players>
                </ol>
                <GameBoard playerChange={handlePlayerRotation} activePlayerIcon={activePlayer}/>
            </div>
            <Log></Log>
        </main>
    )
}

export default App
