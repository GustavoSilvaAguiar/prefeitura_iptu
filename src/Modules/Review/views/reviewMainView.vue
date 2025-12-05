<!-- eslint-disable vue/valid-v-slot -->
<template>
  <div class="teste">
    <div class="headerPage">
      <h1>Lista de <strong>Protocolos</strong></h1>
      <InputTextComponent
        :prepend-inner-icon="'mdi-magnify'"
        class="searchInput"
        title="Buscar"
        variant="outlined"
      />
    </div>

    <v-card class="mx-auto testee" variant="elevated" elevation="4">
      <template v-slot:title>
        <span class="">Você agora tem <strong>apoio da IA</strong> para análise das Imagens!</span>
      </template>

      <v-card-text class="card-text">
        A plataforma identifica automaticamente elementos, padrões e informações relevantes nas
        imagens enviadas, acelerando sua interpretação e oferecendo insights imediatos para decisões
        mais rápidas e precisas.
      </v-card-text>
    </v-card>

    <div class="table-wrap">
      <v-data-table-server
        v-model:options="options"
        :items="paginatedItems"
        :items-length="protocolList.length"
        :loading="loading"
        :headers="headers"
        class="elevation-3"
        @click:row="onRowClick"
      >
        <template #item.status="{ value }">
          <v-chip size="small" :color="getStatusColor(value)" class="text-white">
            {{ getStatusValue(value) }}
          </v-chip>
        </template>

        <template #item.data_criacao="{ value }">
          {{ new Date(value).toLocaleDateString('pt-BR') }}
        </template>
      </v-data-table-server>
    </div>
  </div>
</template>

<script setup lang="ts">
import InputTextComponent from '@/components/InputTextComponent.vue'
import type IProtocol from '@/Interface/protocolInterface'
import protocolService from '@/services/Protocol/protocolService'
import { onMounted, ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'

const loading = ref(false)
const protocolList = ref<IProtocol[]>([])
const router = useRouter()

// Carregar protocolos
onMounted(async () => {
  loading.value = true
  try {
    protocolList.value = await protocolService.getProtocolList()
    console.log('Protocolos carregados:', protocolList.value)
  } catch (error) {
    console.error('Erro ao carregar protocolos:', error)
  } finally {
    loading.value = false
  }
})

// Cabeçalhos
const headers = [
  { title: 'Nº Protocolo', key: 'id', sortable: true },
  { title: 'Tipo', key: 'tipo_imovel_analisado', sortable: true },
  { title: 'Data de Criação', key: 'data_criacao', sortable: true },
  { title: 'Inscrição Municipal', key: 'inscricao_municipal_imovel_analisado', sortable: true },
  { title: 'Status', key: 'status', sortable: false },
]

// Paginação
const options = ref({
  page: 1,
  itemsPerPage: 10,
  sortBy: [],
})

const paginatedItems = computed(() => {
  const start = (options.value.page - 1) * options.value.itemsPerPage
  const end = start + options.value.itemsPerPage
  return protocolList.value.slice(start, end)
})

watch(
  () => options.value,
  () => {
    loading.value = true
    setTimeout(() => {
      loading.value = false
    }, 300)
  },
  { deep: true },
)

function getStatusColor(status: string) {
  switch (status) {
    case 'open':
      return 'amber-darken-3'
    case 'closed':
      return 'blue-darken-3'
    case 'in review':
      return 'green-darken-3'
    default:
      return 'grey-darken-1'
  }
}

function getStatusValue(status: string) {
  switch (status) {
    case 'open':
      return 'Aberto para análise'
    case 'closed':
      return 'Doc. BIC concluído'
    case 'in review':
      return 'Aberto para Conclusão'
    default:
      return 'Desconhecido'
  }
}

type ReviewRow = {
  id: string
  tipo_imovel_analisado: string
  data_criacao: string
  inscricao_municipal_imovel_analisado: string
  status: string
}

function isWrappedRow(obj: unknown): obj is { item: ReviewRow } {
  return Boolean(obj && typeof obj === 'object' && 'item' in (obj as object))
}

function onRowClick(event: Event | MouseEvent, item: ReviewRow | { item: ReviewRow }) {
  const row = isWrappedRow(item) ? item.item : (item as ReviewRow)
  router.push(`/detail/${row.inscricao_municipal_imovel_analisado}/${row.id}`)
}
</script>

<style lang="scss" scoped>
.teste {
  height: 100%;
}
.headerPage {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  h1 {
    font-size: 1.5rem;
  }

  .searchInput {
    max-width: 20%;
  }
}

.card-text {
  background-color: white;
}

.testee {
  background-color: $secondary-color;
  margin-bottom: 32px;
  margin-top: 32px;
}

.table-wrap {
  padding-bottom: 50px;
}
</style>
