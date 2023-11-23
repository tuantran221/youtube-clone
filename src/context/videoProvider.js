import React, { createContext, useContext, useState, useEffect } from 'react'
import { getVideos } from '../services/videoServices'

const VideoContext = createContext()

export const useVideoContext = () => useContext(VideoContext)

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    // Fetch a list of videos
    getVideos(50)
      .then((items) => {
        setVideos(items)
      })
      .catch((error) => {
        console.error('Error fetching videos:', error)
      })
  }, [])

  return <VideoContext.Provider value={{ videos }}>{children}</VideoContext.Provider>
}
