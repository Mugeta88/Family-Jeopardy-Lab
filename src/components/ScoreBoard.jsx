export default function ScoreBoard({ players, activePlayer }) {
  return (
    <div className="scoreboard">
      {players.map((player, index) => (
        <div
          key={player.name}
          className={`player ${index === activePlayer ? "active" : ""}`}
        >
          <h3>{player.name}</h3>
          <p>${player.score}</p>
        </div>
      ))}
    </div>
  );
}