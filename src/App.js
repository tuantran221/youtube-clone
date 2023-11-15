import PageContainer from './layouts/PageContainer'
import Header from './layouts/Header'
import Home from './pages/Home'
import VideoDetail from './pages/VideoDetail'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <PageContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video" element={<VideoDetail />} />
          </Routes>
        </PageContainer>
      </Router>
    </div>
  )
}

export default App
