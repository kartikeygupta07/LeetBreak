import BinarySearchVisualizer from '../components/BinarySearchVisualizer'
import { useParams } from 'react-router-dom'
import questions from '../data/questions'
import SortVisualizer from '../components/SortVisualizer'

function QuestionDetailPage() {
  const { id } = useParams()
  const question = questions.find(q => q.id === Number(id))

  if (!question) {
    return <div className="p-6">Question not found</div>
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-accent mb-2">{question.title}</h1>
      <p className="text-text-muted mb-6">{question.difficulty} · {question.pattern}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-surface border border-border rounded-lg p-4">
          <h3 className="text-text-muted text-xs uppercase mb-2">Constraints</h3>
          <p className="text-text text-sm">{question.constraints}</p>
        </div>

        <div className="bg-surface border border-border rounded-lg p-4">
          <h3 className="text-text-muted text-xs uppercase mb-2">Complexity</h3>
          <p className="text-text text-sm">{question.complexity}</p>
        </div>

        <div className="bg-surface border border-border rounded-lg p-4 md:col-span-2">
          <h3 className="text-text-muted text-xs uppercase mb-3">Visualization</h3>
          {question.engine === 'binarySearch' ? <BinarySearchVisualizer /> : <SortVisualizer />}
        </div>

        <div className="bg-surface border border-border rounded-lg p-4 md:col-span-2">
          <h3 className="text-text-muted text-xs uppercase mb-3">Pseudocode</h3>
          <div className="font-mono text-sm text-text-muted space-y-1">
            {question.pseudocode.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
        </div>
            </div>

      <a href={question.leetcodeUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-6 px-5 py-2.5 rounded-lg bg-accent text-bg font-semibold hover:opacity-90">Solve on LeetCode</a>
    </div>
  )
}

export default QuestionDetailPage