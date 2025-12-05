import type IProtocol from '@/Interface/protocolInterface'
import apiCore from '../api'
import { ref } from 'vue'
import type IProtocolRelated from '@/Interface/protocolRelatedInterface'
import type { IProtocolStatus } from '@/Interface/protocolInterface'

class ProtocolService {
  protected baseURL = ref<string>('')
  constructor() {
    this.baseURL.value = '/api/protocol/'
  }

  public getProtocolList = async () => {
    try {
      const response = await apiCore.get<IProtocol[]>(`${this.baseURL.value}`)
      return response.data
    } catch (error) {
      throw error
    }
  }

  public getProtocolById = async (id: string) => {
    try {
      const response = await apiCore.get<IProtocolRelated>(`${this.baseURL.value}${id}/related`)
      return response.data
    } catch (error) {
      throw error
    }
  }

  public patchProtocol = async (id: string, protocolData: IProtocolStatus) => {
    try {
      const response = await apiCore.patch(
        `${this.baseURL.value}${id}/new-status`,
        {},
        {
          params: { new_status: protocolData },
        },
      )
      return response.data
    } catch (error) {
      throw error
    }
  }
}
export default new ProtocolService()
