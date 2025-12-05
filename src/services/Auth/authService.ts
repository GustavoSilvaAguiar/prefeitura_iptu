import apiCore from '@/services/api'
import { useAuthStore } from '@/stores/authStore'
import { ref } from 'vue'

class AuthService {
  protected baseURL = ref<string>('')
  constructor() {
    this.baseURL.value = '/api/auth'
  }

  public login = async (login: string, password: string) => {
    try {
      const authData = new URLSearchParams()
      authData.append('username', login)
      authData.append('password', password)

      const response = await apiCore.post(`${this.baseURL.value}/login`, authData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json; charset=utf-8',
        },
      })

      const authStore = useAuthStore()
      authStore.setUser(response.data)

      return response.data
    } catch (error) {
      throw error
    }
  }

  public logout = async () => {
    //const { data } = await apiCore.post(`${this.baseURL.value}/logout`)
    const authStore = useAuthStore()
    authStore.logout()
    //return data
  }
}

export default new AuthService()
