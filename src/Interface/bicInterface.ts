export default interface IBic {
  inscricao_municipal: number
  endereco_imovel: {
    logradouro: string
    bairro: string
    quadra: string
  }
  dados_imovel: {
    area_terreno_m2: number
    testada_m: number
    area_edif: number
    solo: string
    situacao: string
    topografia: string
    nivel: string
    uso: string
    forma_uso: string
  }
  dados_edificacao: {
    numero_pavimentos: number
    tipo: string
    posicao: string
    estrutura: string
    localizacao_unidade: number
    esquadria: string
    piso: string
    forro: string
    inst_eletrica: string
    inst_sanitaria: string
    inst: string
    acab_interno: string
    acab_externo: string
    cobertura: string
    conservacao: string
  }
}
