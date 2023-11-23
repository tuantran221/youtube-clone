import React, { useState, useEffect } from 'react'
import { getVideos } from '../../services/videoServices'
import VideoCard from '../videoCard'
import { Link } from 'react-router-dom'
import './style.scss'
const RealatedVideos = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    // Fetch a list of videos
    getVideos(5)
      .then((items) => {
        setVideos(items)
      })
      .catch((error) => {
        console.error('Error fetching videos:', error)
      })
  }, [])
  return (
    <div className="related-videos">
      {videos.map((item, index) => (
        <Link key={index} to={`/${item.id.videoId}`} className="home__link">
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

export default RealatedVideos
