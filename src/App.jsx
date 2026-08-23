import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import QuestionListPage from './pages/QuestionListPage'
import QuestionDetailPage from './pages/QuestionDetailPage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg text-text">
        <Navbar />
        <Routes>
          <Route path="/" element={<QuestionListPage />} />
          <Route path="/question/:id" element={<QuestionDetailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App