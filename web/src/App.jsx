import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ModelDetail from './pages/ModelDetail.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/models/:slug" element={<ModelDetail />} />
    </Routes>
  )
}

export default App
