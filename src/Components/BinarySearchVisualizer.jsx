import { useState, useEffect } from 'react'
import getBinarySearchSteps from '../utils/binarySearchSteps'

const array = [2, 5, 8, 12, 16, 23, 38, 45, 56, 72]
const target = 23

function BinarySearchVisualizer() {
  const [steps] = useState(() => getBinarySearchSteps(array, target))
  const [current, setCurrent] = useState(0)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (!playing) return
    if (current >= steps.length - 1) {
      setPlaying(false)
      return
    }
    const timer = setTimeout(() => setCurrent(c => c + 1), 900)
    return () => clearTimeout(timer)
  }, [playing, current, steps.length])

  const step = steps[current]

  return (
    <div>
      <p className="text-text-muted text-sm mb-4">Searching for <span className="text-accent font-semibold">{target}</span></p>

      <div className="flex gap-2 mb-6">
        {array.map((val, i) => {
          let style = 'bg-border text-text'
          if (i < step.low || i > step.high) style = 'bg-bg text-text-muted opacity-40'
          if (i === step.mid) style = step.found ? 'bg-success text-bg' : 'bg-accent text-bg'

          return (
            <div key={i} className={`flex-1 h-14 rounded-md flex items-center justify-center text-sm font-semibold transition-all ${style}`}>
              {val}
            </div>
          )
        })}
      </div>

      <div className="flex items-center gap-3">
        <button onClick={() => setCurrent(0)} className="px-3 py-1.5 rounded bg-surface border border-border text-text hover:border-accent">Reset</button>
        <button onClick={() => setCurrent(c => Math.max(0, c - 1))} className="px-3 py-1.5 rounded bg-surface border border-border text-text hover:border-accent">Back</button>
        <button onClick={() => setPlaying(p => !p)} className="px-4 py-1.5 rounded bg-accent text-bg font-semibold">{playing ? 'Pause' : 'Play'}</button>
        <button onClick={() => setCurrent(c => Math.min(steps.length - 1, c + 1))} className="px-3 py-1.5 rounded bg-surface border border-border text-text hover:border-accent">Next</button>
        <span className="text-text-muted text-sm ml-auto">Step {current + 1} / {steps.length}</span>
      </div>
    </div>
  )
}

export default BinarySearchVisualizer