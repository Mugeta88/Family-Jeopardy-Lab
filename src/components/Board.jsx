import CategoryColumn from "./CategoryColumn";

export default function Board({ categories, onSelectQuestion, usedQuestions }) {
  return (
    <div className="board">
      {categories.map((cat) => (
        <CategoryColumn
          key={cat.category}
          category={cat}
          onSelectQuestion={onSelectQuestion}
          usedQuestions={usedQuestions}
        />
      ))}
    </div>
  );
}