export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      dm_associado: {
        Row: {
          associado_id: number | null
          cep: string | null
          cidade: string | null
          cnpj: string | null
          dt_alteracao: string | null
          dt_atualizacao: string | null
          dt_desativacao: string | null
          dt_inauguracao: string | null
          email: string | null
          end_bairro: string | null
          end_complemento: string | null
          end_logradouro: string | null
          end_numero: string | null
          erp: string | null
          erp_versao: string | null
          fantasia: string | null
          inscricao_estadual: string | null
          layout_versao: number | null
          lista_preco_descricao: string | null
          lista_preco_dt_alteracao: string | null
          lista_preco_dt_criacao: string | null
          lista_preco_id: number | null
          lista_preco_situacao: string | null
          qtd_colaboradores: number | null
          razao_social: string | null
          rede: string | null
          status_cadastro: string | null
          telefone: string | null
          uf: string | null
        }
        Insert: {
          associado_id?: number | null
          cep?: string | null
          cidade?: string | null
          cnpj?: string | null
          dt_alteracao?: string | null
          dt_atualizacao?: string | null
          dt_desativacao?: string | null
          dt_inauguracao?: string | null
          email?: string | null
          end_bairro?: string | null
          end_complemento?: string | null
          end_logradouro?: string | null
          end_numero?: string | null
          erp?: string | null
          erp_versao?: string | null
          fantasia?: string | null
          inscricao_estadual?: string | null
          layout_versao?: number | null
          lista_preco_descricao?: string | null
          lista_preco_dt_alteracao?: string | null
          lista_preco_dt_criacao?: string | null
          lista_preco_id?: number | null
          lista_preco_situacao?: string | null
          qtd_colaboradores?: number | null
          razao_social?: string | null
          rede?: string | null
          status_cadastro?: string | null
          telefone?: string | null
          uf?: string | null
        }
        Update: {
          associado_id?: number | null
          cep?: string | null
          cidade?: string | null
          cnpj?: string | null
          dt_alteracao?: string | null
          dt_atualizacao?: string | null
          dt_desativacao?: string | null
          dt_inauguracao?: string | null
          email?: string | null
          end_bairro?: string | null
          end_complemento?: string | null
          end_logradouro?: string | null
          end_numero?: string | null
          erp?: string | null
          erp_versao?: string | null
          fantasia?: string | null
          inscricao_estadual?: string | null
          layout_versao?: number | null
          lista_preco_descricao?: string | null
          lista_preco_dt_alteracao?: string | null
          lista_preco_dt_criacao?: string | null
          lista_preco_id?: number | null
          lista_preco_situacao?: string | null
          qtd_colaboradores?: number | null
          razao_social?: string | null
          rede?: string | null
          status_cadastro?: string | null
          telefone?: string | null
          uf?: string | null
        }
        Relationships: []
      }
      dm_produto: {
        Row: {
          apresentacao: string | null
          apresentacao_qtd: string | null
          apresentacao_tipo: string | null
          apresentacao_tipo_abrev: string | null
          cadastro_associado_id: number | null
          cod_barras: string | null
          cod_ms: string | null
          concentracao: string | null
          descricao: string | null
          descricao_completa: string | null
          descricao_tipo_enviado: string | null
          dt_alteracao: string | null
          dt_atualizacao: string | null
          dt_cadastro: string | null
          dt_inativacao: string | null
          dt_ultimo_movimento: string | null
          fabricante_cnpj: string | null
          fabricante_divisao: string | null
          fabricante_fantasia: string | null
          fabricante_holding: string | null
          fabricante_razao: string | null
          farmacologico_descricao: string | null
          flag_produto_pbm: number | null
          fracao: number | null
          grupo: string | null
          gs1_dt_envio: string | null
          gs1_status: string | null
          lista: string | null
          marca: string | null
          ncm: number | null
          ncm_descricao: string | null
          pbm_perc_desconto: string | null
          pbm_programa: string | null
          pbm_provedor: string | null
          portaria: string | null
          preco_controlado: string | null
          preco_controlado_dt_alteracao: string | null
          preco_dt_alteracao: string | null
          principio_ativo: string | null
          produto_id: number | null
          produto_id_transferido: number | null
          receita_cor: string | null
          receita_validade: number | null
          situacao_cadastro: string | null
          status_cadastro: string | null
          tipo: string | null
          tipo_id: number | null
          unidade_medida: string | null
          unidade_medida_abrev: string | null
          uso_continuo: string | null
        }
        Insert: {
          apresentacao?: string | null
          apresentacao_qtd?: string | null
          apresentacao_tipo?: string | null
          apresentacao_tipo_abrev?: string | null
          cadastro_associado_id?: number | null
          cod_barras?: string | null
          cod_ms?: string | null
          concentracao?: string | null
          descricao?: string | null
          descricao_completa?: string | null
          descricao_tipo_enviado?: string | null
          dt_alteracao?: string | null
          dt_atualizacao?: string | null
          dt_cadastro?: string | null
          dt_inativacao?: string | null
          dt_ultimo_movimento?: string | null
          fabricante_cnpj?: string | null
          fabricante_divisao?: string | null
          fabricante_fantasia?: string | null
          fabricante_holding?: string | null
          fabricante_razao?: string | null
          farmacologico_descricao?: string | null
          flag_produto_pbm?: number | null
          fracao?: number | null
          grupo?: string | null
          gs1_dt_envio?: string | null
          gs1_status?: string | null
          lista?: string | null
          marca?: string | null
          ncm?: number | null
          ncm_descricao?: string | null
          pbm_perc_desconto?: string | null
          pbm_programa?: string | null
          pbm_provedor?: string | null
          portaria?: string | null
          preco_controlado?: string | null
          preco_controlado_dt_alteracao?: string | null
          preco_dt_alteracao?: string | null
          principio_ativo?: string | null
          produto_id?: number | null
          produto_id_transferido?: number | null
          receita_cor?: string | null
          receita_validade?: number | null
          situacao_cadastro?: string | null
          status_cadastro?: string | null
          tipo?: string | null
          tipo_id?: number | null
          unidade_medida?: string | null
          unidade_medida_abrev?: string | null
          uso_continuo?: string | null
        }
        Update: {
          apresentacao?: string | null
          apresentacao_qtd?: string | null
          apresentacao_tipo?: string | null
          apresentacao_tipo_abrev?: string | null
          cadastro_associado_id?: number | null
          cod_barras?: string | null
          cod_ms?: string | null
          concentracao?: string | null
          descricao?: string | null
          descricao_completa?: string | null
          descricao_tipo_enviado?: string | null
          dt_alteracao?: string | null
          dt_atualizacao?: string | null
          dt_cadastro?: string | null
          dt_inativacao?: string | null
          dt_ultimo_movimento?: string | null
          fabricante_cnpj?: string | null
          fabricante_divisao?: string | null
          fabricante_fantasia?: string | null
          fabricante_holding?: string | null
          fabricante_razao?: string | null
          farmacologico_descricao?: string | null
          flag_produto_pbm?: number | null
          fracao?: number | null
          grupo?: string | null
          gs1_dt_envio?: string | null
          gs1_status?: string | null
          lista?: string | null
          marca?: string | null
          ncm?: number | null
          ncm_descricao?: string | null
          pbm_perc_desconto?: string | null
          pbm_programa?: string | null
          pbm_provedor?: string | null
          portaria?: string | null
          preco_controlado?: string | null
          preco_controlado_dt_alteracao?: string | null
          preco_dt_alteracao?: string | null
          principio_ativo?: string | null
          produto_id?: number | null
          produto_id_transferido?: number | null
          receita_cor?: string | null
          receita_validade?: number | null
          situacao_cadastro?: string | null
          status_cadastro?: string | null
          tipo?: string | null
          tipo_id?: number | null
          unidade_medida?: string | null
          unidade_medida_abrev?: string | null
          uso_continuo?: string | null
        }
        Relationships: []
      }
      ft_venda: {
        Row: {
          anomes: number | null
          associado_id: number | null
          chave_venda: string | null
          cliente_id: number | null
          cod_barras_vendido: string | null
          colaborador_id: number | null
          data_aux: string | null
          dt_ano: number | null
          dt_atualizacao: string | null
          dt_dia: number | null
          dt_lancamento: string | null
          dt_mes: number | null
          dt_referencia: string | null
          flag_delivery: number | null
          flag_ecommerce: number | null
          flag_produto_prescrito: number | null
          hr_referencia: string | null
          nota_numero: string | null
          nota_serie: string | null
          nota_tipo: string | null
          operacao: string | null
          pbm_venda: string | null
          produto_id: number | null
          produto_prescrito_tipo: string | null
          qtd_estoque: number | null
          serie_ecf: string | null
          tipo_pagamento: string | null
          unidade: number | null
          valor_bruto: number | null
          valor_cmv: number | null
          valor_liquido: number | null
          valor_total_nota: number | null
          venda_id: number | null
        }
        Insert: {
          anomes?: number | null
          associado_id?: number | null
          chave_venda?: string | null
          cliente_id?: number | null
          cod_barras_vendido?: string | null
          colaborador_id?: number | null
          data_aux?: string | null
          dt_ano?: number | null
          dt_atualizacao?: string | null
          dt_dia?: number | null
          dt_lancamento?: string | null
          dt_mes?: number | null
          dt_referencia?: string | null
          flag_delivery?: number | null
          flag_ecommerce?: number | null
          flag_produto_prescrito?: number | null
          hr_referencia?: string | null
          nota_numero?: string | null
          nota_serie?: string | null
          nota_tipo?: string | null
          operacao?: string | null
          pbm_venda?: string | null
          produto_id?: number | null
          produto_prescrito_tipo?: string | null
          qtd_estoque?: number | null
          serie_ecf?: string | null
          tipo_pagamento?: string | null
          unidade?: number | null
          valor_bruto?: number | null
          valor_cmv?: number | null
          valor_liquido?: number | null
          valor_total_nota?: number | null
          venda_id?: number | null
        }
        Update: {
          anomes?: number | null
          associado_id?: number | null
          chave_venda?: string | null
          cliente_id?: number | null
          cod_barras_vendido?: string | null
          colaborador_id?: number | null
          data_aux?: string | null
          dt_ano?: number | null
          dt_atualizacao?: string | null
          dt_dia?: number | null
          dt_lancamento?: string | null
          dt_mes?: number | null
          dt_referencia?: string | null
          flag_delivery?: number | null
          flag_ecommerce?: number | null
          flag_produto_prescrito?: number | null
          hr_referencia?: string | null
          nota_numero?: string | null
          nota_serie?: string | null
          nota_tipo?: string | null
          operacao?: string | null
          pbm_venda?: string | null
          produto_id?: number | null
          produto_prescrito_tipo?: string | null
          qtd_estoque?: number | null
          serie_ecf?: string | null
          tipo_pagamento?: string | null
          unidade?: number | null
          valor_bruto?: number | null
          valor_cmv?: number | null
          valor_liquido?: number | null
          valor_total_nota?: number | null
          venda_id?: number | null
        }
        Relationships: []
      }
      teste: {
        Row: {
          id: number
        }
        Insert: {
          id: number
        }
        Update: {
          id?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
