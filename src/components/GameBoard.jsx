// import {useState} from 'react';

const InitialGame = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
]
export default function GameBoard({playerChange}){
    // const [GameBoard,setGameBoard] = useState(InitialGame)

    // function handleBoardCLick(RowIndex,ColIndex){
    //     setGameBoard((previousBoard)=>{
    //         const updatedBoard = [...previousBoard.map(innerArrays => [...innerArrays])];
    //         updatedBoard[RowIndex][ColIndex] = activePlayerIcon;
    //         return updatedBoard;
    //     })
    //     playerChange();
    // }
    return(
        <ol id="game-board">
            {GameBoard.map((row,RowIndex)=>(
            <li key={RowIndex}>
            <ol>
                {row.map((PlayerIcon,ColIndex)=>(
                <li key={ColIndex}>
                    {/* <button onClick={()=>{handleBoardCLick(RowIndex,ColIndex)}}>{PlayerIcon}</button> */}
                    <button onClick={playerChange}>{PlayerIcon}</button>
                </li>
                ))}
            </ol>
            </li>
            ))}
        </ol>
    );
}
