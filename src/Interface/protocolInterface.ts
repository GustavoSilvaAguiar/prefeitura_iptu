export default interface IProtocol {
  id: number
  ai_analysis_id: number
  tipo_imovel_analisado: string
  data_criacao: Date
  inscricao_municipal_imovel_analisado: string
  status: 'open' | 'in review' | 'closed'
}

export type IProtocolStatus = 'open' | 'in review' | 'closed'
