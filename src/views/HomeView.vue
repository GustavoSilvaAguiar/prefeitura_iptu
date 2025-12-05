<template>
  <main>
    <div class="wrap">
      <div class="header">
        <img src="@/assets/prefeitura_logo.png" height="50px" />
        <p>Um Projeto de P&D: Prefeitura de Goiânia & CEIA/UFG</p>
        <div class="avatar-wrap">
          <div>Olá, Auditor da Prefeitura</div>
          <v-menu min-width="200px">
            <template v-slot:activator="{ props }">
              <v-btn icon v-bind="props">
                <v-avatar color="brown" size="large">
                  <span class="text-h5">{{ user.initials }}</span>
                </v-avatar>
              </v-btn>
            </template>
            <v-card>
              <v-card-text>
                <div class="mx-auto text-center">
                  <v-avatar color="brown">
                    <span class="text-h5">{{ user.initials }}</span>
                  </v-avatar>
                  <h3>{{ user.fullName }}</h3>
                  <p class="text-caption mt-1">
                    {{ user.email }}
                  </p>
                  <!-- <v-divider class="my-3"></v-divider>
                  <v-btn variant="text" rounded> Edit Account </v-btn>
                  <v-divider class="my-3"></v-divider> -->
                  <v-btn variant="text" rounded to="/login"> Logout </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-menu>
        </div>
      </div>

      <div class="routerWrap">
        <BreadCrumbsComponent />
        <RouterView />
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import BreadCrumbsComponent from '@/components/BreadCrumbsComponent.vue'

const user = {
  initials: 'JD',
  fullName: 'John Doe',
  email: 'john.doe@doe.com',
}
</script>
<style scoped lang="scss">
.wrap {
  padding: 16px 64px;
  height: 100vh;
  overflow: hidden;

  .header {
    background-color: $primary-color;
    border-radius: 16px;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .routerWrap {
    height: calc(100% - 98px);
    overflow: auto;
    padding: 32px 8px;
  }
  .avatar-wrap {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
</style>
