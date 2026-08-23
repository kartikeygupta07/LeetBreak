function QuestionCard({ title, difficulty, pattern }) {
  return (
    <div className="bg-surface border border-border rounded-lg p-4 hover:border-accent transition-colors cursor-pointer">
      <h2 className="text-lg font-semibold text-text">{title}</h2>
      <div className="flex gap-2 mt-2">
        <span className="text-xs px-2 py-1 rounded bg-bg text-text-muted">{pattern}</span>
        <span className="text-xs px-2 py-1 rounded bg-bg text-success">{difficulty}</span>
      </div>
    </div>
  )
}

export default QuestionCard