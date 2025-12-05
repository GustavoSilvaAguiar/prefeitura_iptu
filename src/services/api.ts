import axios from 'axios'
import { useAuthStore } from '@/stores/authStore'
import router from '@/router'

const apiCore = axios.create({
  baseURL: 'https://product2-api-cuxta43sba-uc.a.run.app/',
  //baseURL: 'http://localhost:8080/',
})

apiCore.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore()
    const token = authStore.user.access_token
    console.log('Token no interceptor de requisição:', token) // Log do token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Interceptor de resposta para tratar token expirado
apiCore.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log('Erro na resposta da API:', error) // Log do erro
    if (error.response && error.response.status === 401) {
      console.log('Token expirado ou inválido. Redirecionando para login.') // Log do token expirado
      const authStore = useAuthStore()
      authStore.logout?.() // Se existir método logout, limpe o estado
      router.push('/login') // Redireciona para a rota de login
    }
    return Promise.reject(error)
  },
)

export default apiCore
