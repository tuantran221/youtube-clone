import React from 'react'
import './style.scss'

const VideoCard = ({ thumbnail, title, author }) => {
  return (
    <div className="card">
      <div className="card__thumbnail">
        <img src={thumbnail} alt="thumbnail" />
      </div>
      <div className="card__detail">
        <div className="card__detail__title">{title}</div>
        <span className="card__detail__author">{author}</span>
        {/* <span className="card__detail__date">{date}</span> */}
      </div>
    </div>
  )
}

export default VideoCard
