import type IBic from '@/Interface/bicInterface'
import apiCore from '@/services/api'
import { ref } from 'vue'

class BicService {
  protected baseURL = ref<string>('')
  constructor() {
    this.baseURL.value = '/api/property/bic'
  }

  public getBicByIncricaoMunicipal = async (inscricaoMunicipal: string) => {
    try {
      const response = await apiCore.get<IBic>(`${this.baseURL.value}/${inscricaoMunicipal}`)
      return response.data
    } catch (error) {
      throw error
    }
  }
}

export default new BicService()
