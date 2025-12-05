import { defineStore } from 'pinia'
import { ref } from 'vue'

interface IUserLogin {
  token_type: string
  access_token: string | null
}

export const useAuthStore = defineStore(
  'authStore',
  () => {
    const user = ref<IUserLogin>(
      localStorage.getItem('user-prefeitura-iptu')
        ? JSON.parse(localStorage.getItem('user-prefeitura-iptu') as string)
        : { token_type: '', access_token: null },
    )

    function setUser(newUser: IUserLogin) {
      user.value = newUser
      localStorage.setItem('user-prefeitura-iptu', JSON.stringify(newUser))
    }

    function logout() {
      user.value = { token_type: '', access_token: null }
      localStorage.removeItem('user-prefeitura-iptu')
    }

    return { user, setUser, logout }
  },
  {
    persist: {
      key: 'authStore',
      storage: localStorage,
    },
  },
)
