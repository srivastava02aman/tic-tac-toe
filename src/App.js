import React,{ useEffect, useState } from "react";
import Square from "./Square";

const intitalState = ["","","","","","","","",""];

function App() {
  //  initialstate used in the usestate passing to the component like empty string..
  const [gameState,updateGameState] = useState(intitalState);
// is xturn or not update on the grid. 
  const [XTurn, updateXTurn] = useState (false);
  

  //function used inside the component onclick.
  const squareClicked = (index) =>{
     let string = Array.from(gameState);
     string[index] = XTurn? "X":"O";
     updateGameState(string);
     updateXTurn(!XTurn);
  }
  
useEffect(()=> {
const winner = checkWinner();
if(winner){
  alert(`Congrats! ${winner} won the game!`)
  updateGameState(intitalState)
}
},[gameState])

const checkWinner = () => {

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      return gameState[a];
    }
  }
  return null;
}
  



  return ( <>
    <p className="heading">Tic Tac Toe</p>
    <div className="app-header">
      <div className="row jc-center">
      <Square className="b-bottom-right" state={gameState[0]} onClick={()=> squareClicked(0)}/>
      <Square className="b-bottom-right" state={gameState[1]} onClick={()=> squareClicked(1)}/>
      <Square className="b-bottom" state={gameState[2]} onClick={()=> squareClicked(2)}/>
      </div>
      <div className="row jc-center">
      <Square className="b-bottom-right" state={gameState[3]} onClick={()=> squareClicked(3)}/>
      <Square className="b-bottom-right" state={gameState[4]} onClick={()=> squareClicked(4)}/>
      <Square className="b-bottom" state={gameState[5]} onClick={()=> squareClicked(5)}/>
      </div>
      <div className="row jc-center">
      <Square className="b-right" state={gameState[6]} onClick={()=> squareClicked(6)}/>
      <Square className="b-right" state={gameState[7]} onClick={()=> squareClicked(7)}/>
      <Square state={gameState[8]} onClick={()=> squareClicked(8)}/>
      </div>
      <button className="clear-button" onClick={()=> updateGameState(intitalState)}>Clear</button>
    </div>
    </>
  );
}

export default App;
