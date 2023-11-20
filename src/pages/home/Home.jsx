import React, { useState, useEffect } from 'react'
import { getVideos } from '../../services/videoServices'
import VideoCard from '../../components/videoCard'
import './style.scss'
import { Link } from 'react-router-dom'
const Home = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    // Fetch a list of videos
    getVideos('your search query')
      .then((items) => {
        setVideos(items)
      })
      .catch((error) => {
        console.error('Error fetching videos:', error)
      })
  }, [])

  return (
    <div className="home">
      {videos.map((item, index) => (
        <Link key={index} to={`/${item.id.videoId}`} className="video-link">
          <VideoCard
            thumbnail={item.snippet.thumbnails.high.url}
            title={item.snippet.description}
            author={item.snippet.channelTitle}
          />
        </Link>
      ))}
    </div>
  )
}

export default Home
