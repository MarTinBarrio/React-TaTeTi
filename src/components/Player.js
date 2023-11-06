import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false);

  function editingHandler() {
    setIsEditing((editing) => !editing);
    if(isEditing){
      onChangeName(symbol, playerName);
    }
  }

  function editHandler(e){
    //console.log(e.target.value);
    setPlayerName(e.target.value);
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {isEditing && <input type="text" required value={playerName} onChange={editHandler}></input>}
        {!isEditing && <span className="player-name">{playerName}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editingHandler}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
