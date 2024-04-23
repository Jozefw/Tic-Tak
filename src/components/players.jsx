import {useState} from "react";


export default function Players({initialName,symbol,isActivePlayer}) {

    const [isEditing,setIsEditing] = useState(false);
    const [playerName,setPlayerName] = useState(initialName);


    function HandleEdit(){
        setIsEditing((editing)=>!editing);
    }

    function HandleChange(event){
        setPlayerName(event.target.value)
    }

    let editedPlayerName = <span className="player-name">{playerName}</span>;

    if(isEditing){
        editedPlayerName = <input type='text' required value={playerName} onChange={HandleChange} />
    }

    return (
        <li className={isActivePlayer ? 'active': undefined}>
            <span>
                {editedPlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={HandleEdit}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}