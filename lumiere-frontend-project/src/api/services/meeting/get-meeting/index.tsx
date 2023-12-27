import axiosInstance from '@/api/axiosinstance';
import { Meeting } from '../../user/me';

export interface GetMeets {
  atualizadoEm: string;
  casoId: string;
  criadoEm: string;
  dataReuniao: string;
  descricao: string;
  emailAdvogado: string;
  emailCliente: string;
  id: string;
  localizacao: string;
  nomeAdvogado: string;
  nomeCliente: string;
}

export const GetMeeting = async (): Promise<GetMeets[]> => {
  const payments = await axiosInstance.get<GetMeets[]>('/reuniao');

  return payments.data;
};
