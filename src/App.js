import React from 'react'
import PageContainer from './layouts/PageContainer'
import Header from './layouts/Header'
import Home from './pages/home/Home'
import VideoDetail from './pages/watch/VideoDetail'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { VideoProvider } from './context/videoProvider'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <PageContainer>
          <VideoProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:videoId" element={<VideoDetail />} />
            </Routes>
          </VideoProvider>
        </PageContainer>
      </Router>
    </div>
  )
}

export default App
