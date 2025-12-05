<template>
  <div class="main_wrap">
    <div class="login_wrap">
      <p>
        Revisão do IPTU com <strong>IA.</strong><br />
        <strong>Acessar conta!</strong>
      </p>
      <img src="@/assets/casa_login.png" alt="Logo" />
      <InputTextComponent
        bg-color="primary"
        class="InputTextComponent"
        variant="outlined"
        title="E-mail"
        v-model="username"
      />
      <InputTextComponent
        bg-color="primary"
        class="InputTextComponent"
        title="Senha"
        v-model="password"
        type="password"
      />
      <BtnComponent @click="login" class="BtnComponent" color="secondary">Login</BtnComponent>
      <BtnComponent class="BtnComponent" color="primary">Esqueceu a senha?</BtnComponent>
      <BtnComponent class="BtnComponent">Cadastrar</BtnComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
import BtnComponent from '@/components/BtnComponent.vue'
import InputTextComponent from '@/components/InputTextComponent.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import authService from '@/services/Auth/authService'

const username = ref('ttt@gmail.com')
const password = ref('12345678')

const router = useRouter()

const login = async () => {
  await authService
    .login(username.value, password.value)
    .then(() => {
      router.push('/')
    })
    .catch((error) => {
      console.error('Erro ao fazer login', error)
    })
}
</script>

<style lang="scss" scoped>
.main_wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: auto;
  .login_wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    min-width: 30%;

    p {
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 1.5rem;
    }
    img {
      height: auto;
      margin-bottom: 1.5rem;
    }
    .InputTextComponent {
      width: 100%;
      margin-bottom: 1rem;
    }
    .BtnComponent {
      margin-top: 1rem;
    }
  }
}
</style>
