import {useState} from 'react';
import Board from './components/board';
import {calculateWinner} from './winner';
import StatusMessage from './components/statusMessage';
import Restart from './components/restart';
const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [isXNext, setXnext] = useState(false);

  const winner = calculateWinner(squares);

  const handleSquareClick = (clickedPosition) => {
    if (squares[clickedPosition] || winner) {
      return;
    }
    setSquares((currentSquares) => {
      return currentSquares.map((squareVal, position) => {
        if (clickedPosition === position) {
          return isXNext ? 'X' : 'O';
        }
        return squareVal;
      });
    });
    setXnext((currentX) => !currentX);
  };
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <br />
      <StatusMessage winner={winner} isXNext={isXNext} squares={squares} />
      <Board squares={squares} handleSquareClick={handleSquareClick} />
      <Restart squares={squares} />
    </div>
  );
};
export default App;
