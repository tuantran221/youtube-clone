import React from 'react'
import { useParams } from 'react-router-dom'

const VideoDetail = () => {
  const id = useParams()

  return (
    <div className="video-detail">
      <iframe
        width="800"
        height="400"
        src={`https://www.youtube.com/embed/${id.videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default VideoDetail
