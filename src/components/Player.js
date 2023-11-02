import { useState } from "react";

export default function Player({ initailName, symbol }) {
  const [playerName, setPlayerName] = useState(initailName)
  const [isEditing, setIsEditing] = useState(false);

  function editingHandler() {
    setIsEditing((editing) => !editing);
  }

  function editHandler(e){
    //console.log(e.target.value);
    setPlayerName(e.target.value);
  }

  return (
    <li>
      <span className="player">
        {isEditing && <input type="text" required value={playerName} onChange={editHandler}></input>}
        {!isEditing && <span className="player-name">{playerName}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editingHandler}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
