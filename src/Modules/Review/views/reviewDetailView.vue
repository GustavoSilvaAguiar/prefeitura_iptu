<template>
  <div class="loading" v-if="loading">
    <v-progress-circular size="80" color="primary" indeterminate></v-progress-circular>
  </div>

  <div v-if="!loading">
    <div class="headerPage">
      <h1>
        Inscrição Municipal: <strong>{{ inscricaoMunicipal }}</strong>
      </h1>
      <InputTextComponent
        :prepend-inner-icon="'mdi-magnify'"
        class="searchInput"
        title="Buscar"
        variant="outlined"
      />
    </div>
    <div>
      <p>
        Endereço do Imóvel:
        <strong
          >Logradouro: {{ protocolData?.bic?.endereco_imovel?.logradouro }}, Bairro:
          {{ protocolData?.bic?.endereco_imovel?.bairro }}, Quadra:
          {{ protocolData?.bic?.endereco_imovel?.quadra }}</strong
        >
      </p>
      <p>
        Tipo: <strong>{{ protocolData?.bic?.dados_edificacao?.tipo || '' }}</strong>
      </p>
    </div>
    <div class="parent">
      <div class="col1">
        <v-carousel class="div1">
          <v-carousel-item
            src="https://img.olx.com.br/images/87/879529954121177.jpg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="https://img.olx.com.br/images/89/892577355844736.webp"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="https://img.olx.com.br/images/97/978573596977577.webp"
            cover
          ></v-carousel-item>
          <v-carousel-item
            src="https://img.olx.com.br/images/98/982595594360159.webp"
            cover
          ></v-carousel-item>
          <v-carousel-item
            src="https://img.olx.com.br/images/99/994518716475576.webp"
            cover
          ></v-carousel-item>
          <v-carousel-item
            src="https://img.olx.com.br/images/14/141502114867410.webp"
            cover
          ></v-carousel-item>
          <v-carousel-item
            src="https://img.olx.com.br/images/16/169553837784523.webp"
            cover
          ></v-carousel-item>
          <v-carousel-item
            src="https://img.olx.com.br/images/19/198590476816973.webp"
            cover
          ></v-carousel-item>
        </v-carousel>

        <v-card class="div3" color="primary" variant="elevated" elevation="4">
          <template v-slot:title>
            <v-chip
              size="small"
              color="secondary"
              variant="flat"
              base-color="black"
              class="text-white"
            >
              Descrição IA
            </v-chip>
          </template>

          <v-card-text class="card-text">
            {{ protocolData?.ai_analysis?.Descricao }}
          </v-card-text>
        </v-card>
        <v-card class="div3" color="primary" variant="elevated" elevation="4">
          <template v-slot:title>
            <v-chip
              size="small"
              color="secondary"
              variant="flat"
              base-color="black"
              class="text-white"
            >
              Explicação IA
            </v-chip>
          </template>

          <v-card-text class="card-text">
            {{ protocolData?.ai_analysis?.Explicacao }}
          </v-card-text>
        </v-card>
      </div>
      <div class="col2">
        <div class="div2">
          <SelectComponent
            label="Instalação Sanitária"
            v-model="protocolData.ai_analysis['Instalação Sanitária']"
            :items="['interna', 'completa', 'mais de uma', 'externa', 'sem']"
          />
          <!-- <SelectComponent
            label="Inst."
            :items="['interna', 'completa', 'mais de uma', 'externa', 'sem']"
          /> -->
          <SelectComponent
            label="Acabamento Interno"
            v-model="protocolData.ai_analysis['Acabamento Interno']"
            :items="['pintura lavavel', 'pintura simples', 'caiação', 'especial', 'sem']"
          />
          <SelectComponent
            label="Acabamento Externo"
            v-model="protocolData.ai_analysis['Acabamento Externo']"
            :items="['pintura lavavel', 'pintura simples', 'caiação', 'especial', 'sem']"
          />
          <SelectComponent
            label="Estrutura"
            v-model="protocolData.ai_analysis['Estrutura']"
            :items="[
              'alvenaria',
              'concreto',
              'mista',
              'madeira tratada',
              'metalica',
              'adobe/taipa/rudimentar',
            ]"
          />
          <SelectComponent
            label="Esquadrias"
            v-model="protocolData.ai_analysis['Esquadrias']"
            :items="['ferro', 'aluminio', 'madeira', 'rustica', 'especial', 'sem']"
          />
          <SelectComponent
            label="Pisos"
            v-model="protocolData.ai_analysis['Piso']"
            :items="['ceramica', 'cimento', 'taco', 'tijolo', 'terra', 'especial/porcelanato']"
          />
          <SelectComponent
            label="Forro"
            v-model="protocolData.ai_analysis['Forro']"
            :items="['laje', 'madeira', 'gesso simples/pvc', 'especial', 'sem']"
          />
          <SelectComponent
            label="Instalação Elétrica"
            v-model="protocolData.ai_analysis['Instalação Elétrica']"
            :items="['embutida', 'semi embutida', 'externa', 'sem']"
          />
        </div>
      </div>
    </div>
    <v-expansion-panels class="mb-10">
      <v-expansion-panel color="primary" title="Analisar documento BiC.">
        <template #text>
          <div class="parent2">
            <v-card class="div11" color="" variant="elevated" elevation="4">
              <div class="card-title">Endereço do Imóvel</div>
              <v-card-text class="card-text">
                <RowInfoComponent title="Logradouro" :info="bicData?.endereco_imovel?.logradouro" />
                <RowInfoComponent title="Bairro" :info="bicData?.endereco_imovel?.bairro" />
                <RowInfoComponent title="Quadra" :info="bicData?.endereco_imovel?.quadra" />
              </v-card-text>
            </v-card>
            <v-card class="div22" variant="elevated" elevation="4">
              <div class="card-title">Informações da Edificação. Doc. BIC.</div>
              <v-card-text class="card-text">
                <RowInfoComponent
                  title="Número de Pavimentos"
                  :info="bicData?.dados_edificacao?.numero_pavimentos?.toString()"
                />
                <RowInfoComponent title="Tipo" :info="bicData?.dados_edificacao?.tipo" />
                <RowInfoComponent title="Posição" :info="bicData?.dados_edificacao?.posicao" />
                <RowInfoComponent title="Estrutura" :info="bicData?.dados_edificacao?.estrutura" />
                <RowInfoComponent
                  title="Localização da Unidade"
                  :info="bicData?.dados_edificacao?.localizacao_unidade?.toString()"
                />
                <RowInfoComponent title="Esquadria" :info="bicData?.dados_edificacao?.esquadria" />
                <RowInfoComponent title="Piso" :info="bicData?.dados_edificacao?.piso" />
                <RowInfoComponent title="Forro" :info="bicData?.dados_edificacao?.forro" />
                <RowInfoComponent
                  title="Inst. Elétrica"
                  :info="bicData?.dados_edificacao?.inst_eletrica"
                />
                <RowInfoComponent
                  title="Inst. Sanitária"
                  :info="bicData?.dados_edificacao?.inst_sanitaria"
                />
                <RowInfoComponent title="Inst." :info="bicData?.dados_edificacao?.inst" />
                <RowInfoComponent
                  title="Acab. Interno"
                  :info="bicData?.dados_edificacao?.acab_interno"
                />
                <RowInfoComponent
                  title="Acab. Externo"
                  :info="bicData?.dados_edificacao?.acab_externo"
                />
                <RowInfoComponent title="Cobertura" :info="bicData?.dados_edificacao?.cobertura" />
                <RowInfoComponent
                  title="Conservação"
                  :info="bicData?.dados_edificacao?.conservacao"
                />
              </v-card-text>
            </v-card>
            <v-card class="div33" variant="elevated" elevation="4">
              <div class="card-title">Dados do Imóvel</div>
              <v-card-text class="card-text">
                <RowInfoComponent
                  title="Área Terreno"
                  :info="bicData?.dados_imovel?.area_terreno_m2?.toString()"
                />
                <RowInfoComponent
                  title="Testada"
                  :info="bicData?.dados_imovel?.testada_m?.toString()"
                />
                <RowInfoComponent
                  title="Área Edif."
                  :info="bicData?.dados_imovel?.area_edif?.toString()"
                />
                <RowInfoComponent title="Solo" :info="bicData?.dados_imovel?.solo" />
                <RowInfoComponent title="Situação" :info="bicData?.dados_imovel?.situacao" />
                <RowInfoComponent title="Topografia" :info="bicData?.dados_imovel?.topografia" />
                <RowInfoComponent title="Nível" :info="bicData?.dados_imovel?.nivel" />
                <RowInfoComponent title="Uso" :info="bicData?.dados_imovel?.uso" />
                <RowInfoComponent title="Forma Uso" :info="bicData?.dados_imovel?.forma_uso" />
              </v-card-text>
            </v-card>
            <div class="div44">
              <p>
                Esses são dados que estão no cadastro sem as análises realizadas pela
                <strong>IA.</strong>
              </p>
            </div>
          </div>
        </template>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-divider class="my-4"></v-divider>
    <div class="btn-wrap">
      <div>
        <BtnComponent>Nova Análise da IA</BtnComponent>
        <BtnComponent>Atualizar documento BIC</BtnComponent>
      </div>
      <div>
        <BtnComponent color="secondary" @click="concludeReview">Concluir Análise</BtnComponent>
        <BtnComponent color="secondary" @click="patchAiReview">Salvar Atributos IA</BtnComponent>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BtnComponent from '@/components/BtnComponent.vue'
import InputTextComponent from '@/components/InputTextComponent.vue'
import RowInfoComponent from '@/components/RowInfoComponent.vue'
import SelectComponent from '@/components/SelectComponent.vue'
import type IAi from '@/Interface/aiInterface'
import type IBic from '@/Interface/bicInterface'
import type IProtocolRelated from '@/Interface/protocolRelatedInterface'
import aiService from '@/services/AI/aiService'
import bicService from '@/services/Bic/bicService'
import protocolService from '@/services/Protocol/protocolService'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useToast } from 'vue-toastification'
import { useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const inscricaoMunicipal = route.params.inscricaoMunicipal
const protocolId = route.params.id
const protocolServiceInstance = protocolService
const aiServiceInstance = aiService
const bicServiceInstance = bicService
const protocolData = ref<IProtocolRelated>({} as IProtocolRelated)
const bicData = ref<IBic>({} as IBic)
const loading = ref(true)

const toast = useToast()
onMounted(async () => {
  loading.value = true
  try {
    const [protocol, bic] = await Promise.all([
      protocolServiceInstance.getProtocolById(protocolId as string),
      bicServiceInstance.getBicByIncricaoMunicipal(inscricaoMunicipal as string),
    ])

    protocolData.value = protocol
    bicData.value = bic

    console.log('Dados do Protocolo:', protocolData.value)
    console.log('Dados do BIC:', bicData.value)
  } catch (error) {
    console.error('Erro ao carregar os dados:', error)
  } finally {
    loading.value = false
  }
})

const concludeReview = async () => {
  await protocolServiceInstance
    .patchProtocol(protocolId as string, 'closed')
    .then(() => {
      toast.success('Análise concluída com sucesso.')
      router.push('/')
    })
    .catch((error) => {
      toast.error('Erro ao concluir a análise.')
      console.error('Erro ao concluir a análise:', error)
    })
}

const patchAiReview = async () => {
  if (!protocolData.value.id) return
  try {
    const payload = {
      instalacao_sanitaria: protocolData.value.ai_analysis['Instalação Sanitária'],
      acabamento_interno: protocolData.value.ai_analysis['Acabamento Interno'],
      acabamento_externo: protocolData.value.ai_analysis['Acabamento Externo'],
      estrutura: protocolData.value.ai_analysis.Estrutura,
      revestimento_interno: protocolData.value.ai_analysis['Revestimento Interno'],
      revestimento_externo: protocolData.value.ai_analysis['Revestimento Externo'],
      cobertura: protocolData.value.ai_analysis.Cobertura,
      benfeitorias: protocolData.value.ai_analysis.Benfeitorias,
      tipo_imovel: protocolData.value.ai_analysis['Tipo de Imóvel'],
      esquadrias: protocolData.value.ai_analysis.Esquadrias,
      piso: protocolData.value.ai_analysis.Piso,
      forro: protocolData.value.ai_analysis.Forro,
      instalacao_eletrica: protocolData.value.ai_analysis['Instalação Elétrica'],
    } as IAi
    await aiServiceInstance.patchAIReview(protocolData.value.id.toString(), payload).then(() => {
      toast.success('Análise da IA atualizada com sucesso.')
    })
    console.log('Análise da IA atualizada com sucesso.')
  } catch (error) {
    toast.error('Erro ao atualizar a análise da IA.')
    console.error('Erro ao atualizar a análise da IA:', error)
  }
}
</script>

<style lang="scss" scoped>
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

.parent {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  margin-top: 16px;
  .col1 {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .col2 {
    flex: 1;
  }
}

.parent2 {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 8px;
}

.div22 {
  grid-column: span 2 / span 2;
  grid-row: span 3 / span 3;
}

.div33 {
  grid-row: span 2 / span 2;
  grid-column-start: 1;
  grid-row-start: 2;
}

.div44 {
  grid-column: span 3 / span 3;
  grid-row: span 3 / span 3;
  grid-column-start: 4;
  grid-row-start: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;

  p {
    font-size: x-large;
    text-align: start;
    strong {
      color: $secondary-color;
    }
  }
}

.card-title {
  font-size: medium;
  background-color: $primary-color;
  padding: 8px 16px;
}

.btn-wrap {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 32px;
  margin-bottom: 32px;

  div {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 30%;
  }
}
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
}
</style>
