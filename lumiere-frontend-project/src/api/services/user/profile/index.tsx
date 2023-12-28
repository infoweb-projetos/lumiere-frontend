import axiosInstance from "../../../axiosinstance";

export interface Root {
    id: string
    nome: string
    email: string
    criadoEm: string
    cnpj: string
    historico: any
    isAdvogado: boolean
    areaDeAtuacao: any
    senha: string 
    casos: Caso[]
    categorias: Categoria[]
    reunioes: Reuni[]
  }
  
  export interface Caso {
    id: string
    titulo: string
    descricao: string
    criadoEm: string
    atualizadoEm: string
    clienteId: string
    advogadoId: string
    pagamentoId: string
  }
  
  export interface Categoria {
    id: string
    nome: string
  }
  
  export interface Reuni {
    id: string
    descricao: string
    localizacao: string
    dataReuniao: string
    criadoEm: string
    atualizadoEm: string
    clienteId: string
    advogadoId: string
    casoId: string
  }

export const Profile = async (): Promise<Root> => {
  const user = await axiosInstance.get<Root>(`/profile/me`);
  return user.data;
};