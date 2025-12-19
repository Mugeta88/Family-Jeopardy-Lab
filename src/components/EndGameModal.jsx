export default function EndGameModal({ players, onRestart }) {
  const [player1, player2] = players;

  let resultText = "It's a Tie! 🤝";

  if (player1.score > player2.score) {
    resultText = `${player1.name} Wins! 🏆`;
  } else if (player2.score > player1.score) {
    resultText = `${player2.name} Wins! 🏆`;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>🎉 Game Over 🎉</h2>

        <p>{resultText}</p>

        <div className="final-scores">
          <p>{player1.name}: ${player1.score}</p>
          <p>{player2.name}: ${player2.score}</p>
        </div>

        <button onClick={onRestart}>Play Again</button>
      </div>
    </div>
  );
}