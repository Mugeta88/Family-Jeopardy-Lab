import QuestionCard from "./QuestionCard";

export default function CategoryColumn({ category, onSelectQuestion, usedQuestions }) {
  return (
    <div className="category-column">
      <h2>{category.category}</h2>

      {category.questions.map((q) => (
        <QuestionCard
          key={q.id}
          question={q}
          onSelectQuestion={onSelectQuestion}
          disabled={usedQuestions.includes(q.id)}
        />
      ))}
    </div>
  );
}