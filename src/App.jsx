import { useState } from "react";
import { questionBank } from "./data/questionBank";
import Board from "./components/Board";
import QuestionModal from "./components/QuestionModal";
import ScoreBoard from "./components/ScoreBoard";
import EndGameModal from "./components/EndGameModal";

export default function App() {
  const TOTAL_QUESTIONS = questionBank.reduce(
    (total, category) => total + category.questions.length,
    0
  );

  const [players, setPlayers] = useState([
    { name: "Player 1", score: 0 },
    { name: "Player 2", score: 0 }
  ]);

  const [activePlayer, setActivePlayer] = useState(0);
  const [usedQuestions, setUsedQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const handleSelectQuestion = (question) => {
    if (usedQuestions.includes(question.id) || gameOver) return;

    setSelectedQuestion(question);
  };

  const handleCorrect = () => {
    const updatedPlayers = [...players];
    updatedPlayers[activePlayer].score += selectedQuestion.value;
    setPlayers(updatedPlayers);

    endTurn();
  };

  const handleIncorrect = () => {
    endTurn();
  };

  const endTurn = () => {
    setUsedQuestions((prev) => [...prev, selectedQuestion.id]);

    setSelectedQuestion(null);

    // Check for game end
    if (usedQuestions.length + 1 >= TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setActivePlayer((prev) => (prev + 1) % players.length);
    }
  };

  const restartGame = () => {
    setPlayers([
      { name: "Player 1", score: 0 },
      { name: "Player 2", score: 0 }
    ]);
    setUsedQuestions([]);
    setSelectedQuestion(null);
    setActivePlayer(0);
    setGameOver(false);
  };

  return (
    <div className="app">
      <h1>🎄 Family Jeopardy 🎄</h1>

      <ScoreBoard players={players} activePlayer={activePlayer} />

      {!gameOver && (
        <Board
          categories={questionBank}
          onSelectQuestion={handleSelectQuestion}
          usedQuestions={usedQuestions}
        />
      )}

      {selectedQuestion && (
        <QuestionModal
          question={selectedQuestion}
          activePlayerName={players[activePlayer].name}
          onCorrect={handleCorrect}
          onIncorrect={handleIncorrect}
          onClose={() => setSelectedQuestion(null)}
        />
      )}

      {gameOver && (
        <EndGameModal players={players} onRestart={restartGame} />
      )}
    </div>
  );
}
