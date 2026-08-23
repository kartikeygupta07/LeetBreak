import { useState } from 'react'
import { Link } from 'react-router-dom'
import QuestionCard from '../components/QuestionCard'
import questions from '../data/questions'

function QuestionListPage() {
  const [search, setSearch] = useState('')

  const filtered = questions.filter(q =>
    q.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <input
        type="text"
        placeholder="Search questions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-surface border border-border rounded-lg px-4 py-2 text-text mb-6 outline-none focus:border-accent"
      />
      <div className="flex flex-col gap-3">
        {filtered.map(q => (
          <Link key={q.id} to={`/question/${q.id}`}>
            <QuestionCard title={q.title} difficulty={q.difficulty} pattern={q.pattern} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default QuestionListPage