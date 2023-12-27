import axiosInstance from '@/api/axiosinstance';

export interface User {
  id: string;
  nome: string;
  email: string;
  criadoEm: string;
  cnpj: string;
  historico: any;
  isAdvogado: boolean;
  areaDeAtuacao: any;
  casos: Case[];
  categorias: Categories[];
  reunioes: Meeting[];
}

export interface Case {
  id: string;
  titulo: string;
  descricao: string;
  criadoEm: string;
  atualizadoEm: string;
  clienteId: string;
  advogadoId: string;
  pagamentoId: string;
}

export interface Categories {
  id: string;
  nome: string;
}

export interface Meeting {
  id: string;
  descricao: string;
  localizacao: string;
  dataReuniao: string;
  criadoEm: string;
  atualizadoEm: string;
  clienteId: string;
  advogadoId: string;
  casoId: string;
}

export const GetUser = async (): Promise<User> => {
  const Users = await axiosInstance.get<User>('/profile/me');

  return Users.data;
};
