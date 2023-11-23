import React from 'react'
import VideoCard from '../../components/videoCard'
import './style.scss'
import { Link } from 'react-router-dom'
import { useVideoContext } from '../../context/videoProvider'
const Home = () => {
  const { videos } = useVideoContext()

  return (
    <div className="home">
      {videos.map((item, index) => (
        <Link key={index} to={`/${item.id.videoId}`} className="home__link">
          <VideoCard
            thumbnail={item.snippet.thumbnails.high.url}
            title={item.snippet.title}
            author={item.snippet.channelTitle}
          />
        </Link>
      ))}
    </div>
  )
}

export default Home
