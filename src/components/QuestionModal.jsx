import { useState } from "react";

export default function QuestionModal({
  question,
  onCorrect,
  onIncorrect,
  onClose,
  activePlayerName
}) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>{activePlayerName}'s Turn</h2>

        <p className="question-text">{question.question}</p>

        {showAnswer && (
          <p className="answer-text">
            <strong>Answer:</strong> {question.answer}
          </p>
        )}

        <div className="modal-buttons">
          {!showAnswer ? (
            <button onClick={() => setShowAnswer(true)}>
              Show Answer
            </button>
          ) : (
            <>
              <button className="correct" onClick={onCorrect}>
                Correct ✅
              </button>
              <button className="incorrect" onClick={onIncorrect}>
                Incorrect ❌
              </button>
            </>
          )}

          <button className="close" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}