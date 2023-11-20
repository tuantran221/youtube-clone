import axios from 'axios'
import { YOUTUBE_API_KEY, YOUTUBE_API_ENDPOINTS } from '../constant/apiEndpoints'

export const getVideos = async (query) => {
  try {
    const response = await axios.get(YOUTUBE_API_ENDPOINTS.SEARCH, {
      params: {
        key: YOUTUBE_API_KEY,
        part: 'snippet',
        type: 'video',
        q: query,
        maxResults: 50
      }
    })

    return response.data.items
  } catch (error) {
    console.error('Error fetching videos:', error)
    throw error
  }
}
