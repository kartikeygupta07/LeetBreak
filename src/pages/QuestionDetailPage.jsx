import SortVisualizer from '../components/SortVisualizer'
import { useParams } from 'react-router-dom'
import questions from '../data/questions'

function QuestionDetailPage() {
  const { id } = useParams()
  const question = questions.find(q => q.id === Number(id))

  if (!question) return <div className="p-6">Question not found</div>

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-accent mb-2">{question.title}</h1>
      <p className="text-text-muted mb-6">{question.difficulty} · {question.pattern}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-surface border border-border rounded-lg p-4">Description / Constraints</div>
        <div className="bg-surface border border-border rounded-lg p-4">Complexity</div>
        <div className="bg-surface border border-border rounded-lg p-4 md:col-span-2"><SortVisualizer /></div>
        <div className="bg-surface border border-border rounded-lg p-4 md:col-span-2">Pseudocode</div>
      </div>
    </div>
  )
}

export default QuestionDetailPage