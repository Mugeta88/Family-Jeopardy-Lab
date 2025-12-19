export default function QuestionCard({ question, onSelectQuestion, disabled }) {
  return (
    <button
      className="question-card"
      disabled={disabled}
      onClick={() => onSelectQuestion(question)}
    >
      {disabled ? "—" : question.value}
    </button>
  );
}
