import React from 'react'
import { useParams } from 'react-router-dom'
import RealatedVideos from '../../components/relatedVideo'
import { useVideoContext } from '../../context/videoProvider'
import './style.scss'

const VideoDetail = () => {
  const id = useParams()
  const { videos } = useVideoContext()

  const video = videos.find((item) => item.id.videoId === id.videoId)
  console.log(videos[0].snippet.title)
  return (
    <div className="video-detail">
      <div className="video-detail__watch">
        <iframe
          width="800"
          height="450"
          src={`https://www.youtube.com/embed/${id.videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="iframe"
        ></iframe>
        <div className="video-detail__watch__title">
          {video && <span>{video.snippet.title}</span>}
        </div>
      </div>
      <div className="video-detail__related">
        <RealatedVideos />
      </div>
    </div>
  )
}

export default VideoDetail
