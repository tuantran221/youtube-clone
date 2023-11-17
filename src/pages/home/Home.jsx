import React, { useState, useEffect } from 'react'
import { getVideos } from '../../services/videoServices'
import VideoCard from '../../components/videoCard'
const Home = () => {
  const [videos, setVideos] = useState([])
  console.log(videos)
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
    <div>
      {videos.map((item, index) => (
        <VideoCard
          key={index}
          thumbnail={item.snippet.thumbnails.high.url}
          title={item.snippet.description}
          author={item.snippet.channelTitle}
          // date={item.snippet.publishedAt}
        />
      ))}
    </div>
  )
}

export default Home
