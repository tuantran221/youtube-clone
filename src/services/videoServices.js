import axios from 'axios'
import { YOUTUBE_API_KEY, YOUTUBE_API_ENDPOINTS } from '../constant/apiEndpoints'

export const getVideos = async (query) => {
  try {
    const response = await axios.get(YOUTUBE_API_ENDPOINTS.SEARCH, {
      params: {
        key: YOUTUBE_API_KEY,
        part: 'snippet',
        type: 'video',
        q: query
      }
    })

    return response.data.items
  } catch (error) {
    console.error('Error fetching videos:', error)
    throw error
  }
}

export const getVideoById = async (videoId) => {
  try {
    const response = await axios.get(YOUTUBE_API_ENDPOINTS.VIDEO, {
      params: {
        key: YOUTUBE_API_KEY,
        part: 'snippet',
        id: videoId
      }
    })

    return response.data.items[0]
  } catch (error) {
    console.error('Error fetching video by ID:', error)
    throw error
  }
}
