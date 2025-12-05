export default interface IProtocolRelated {
  id: number
  nome_imovel_analisado: string
  ai_analysis: {
    Estrutura: string
    Esquadrias: string
    Piso: string
    Forro: string
    'Instalação Elétrica': string
    'Instalação Sanitária': string
    'Revestimento Interno': string
    'Acabamento Interno': string
    'Revestimento Externo': string
    'Acabamento Externo': string
    Cobertura: string
    Benfeitorias: string[]
    'Tipo de Imóvel': string
    Explicacao: string
    Descricao: string
  }
  bic: {
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
      localizacao_unidade: string | null
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
}
