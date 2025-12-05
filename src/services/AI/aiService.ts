import { ref } from 'vue'
import apiCore from '../api'
import type IAi from '@/Interface/aiInterface'

class AIService {
  protected baseURL = ref<string>('')
  constructor() {
    this.baseURL.value = '/api/ai-analysis'
  }

  public patchAIReview = async (id: string, reviewData: IAi) => {
    try {
      const response = await apiCore.patch(`${this.baseURL.value}/${id}`, reviewData)
      return response.data
    } catch (error) {
      throw error
    }
  }
}

export default new AIService()
