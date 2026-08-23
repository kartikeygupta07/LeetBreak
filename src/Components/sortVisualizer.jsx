import { useState, useEffect } from 'react'
import getBubbleSortSteps from '../utils/bubbleSortSteps'

const initialArray = [8, 3, 6, 1, 9, 2]

function SortVisualizer() {
  const [steps] = useState(() => getBubbleSortSteps(initialArray))
  const [current, setCurrent] = useState(0)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (!playing) return
    if (current >= steps.length - 1) {
      setPlaying(false)
      return
    }
    const timer = setTimeout(() => setCurrent(c => c + 1), 600)
    return () => clearTimeout(timer)
  }, [playing, current, steps.length])

  const step = steps[current]
  const maxVal = Math.max(...initialArray)

  return (
    <div>
      <div className="flex items-end gap-2 h-48 mb-6">
        {step.array.map((val, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t-md flex items-end justify-center text-sm font-semibold pb-1 transition-all ${
              step.comparing.includes(i) ? 'bg-accent text-bg' : 'bg-border text-text'
            }`}
            style={{ height: `${(val / maxVal) * 100}%` }}
          >
            {val}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setCurrent(0)}
          className="px-3 py-1.5 rounded bg-surface border border-border text-text hover:border-accent"
        >
          Reset
        </button>
        <button
          onClick={() => setCurrent(c => Math.max(0, c - 1))}
          className="px-3 py-1.5 rounded bg-surface border border-border text-text hover:border-accent"
        >
          Back
        </button>
        <button
          onClick={() => setPlaying(p => !p)}
          className="px-4 py-1.5 rounded bg-accent text-bg font-semibold"
        >
          {playing ? 'Pause' : 'Play'}
        </button>
        <button
          onClick={() => setCurrent(c => Math.min(steps.length - 1, c + 1))}
          className="px-3 py-1.5 rounded bg-surface border border-border text-text hover:border-accent"
        >
          Next
        </button>
        <span className="text-text-muted text-sm ml-auto">
          Step {current + 1} / {steps.length}
        </span>
      </div>
    </div>
  )
}

export default SortVisualizer