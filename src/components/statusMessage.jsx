const StatusMessage = ({winner, isXNext, squares}) => {
  const noMovesLeft = squares.every((squereValue) => squereValue !== null);
  const nextPlayer = isXNext ? 'X' : 'O';

  const renderStatusMessage = () => {
    if (winner) {
      return `winner is ${winner}`;
    }

    if (!winner && noMovesLeft) {
      return `O and X Tied `;
    }

    if (!winner && !noMovesLeft) {
      return `The next Player is ${nextPlayer}`;
    }
    return null;
  };

  return <h2 className="statusMessage">{renderStatusMessage()}</h2>;
};
export default StatusMessage;
