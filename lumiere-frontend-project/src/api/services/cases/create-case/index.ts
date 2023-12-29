import axiosInstance from '../../../axiosinstance';
import { CreateCase, CreateCaseResponse } from './criarCaso.interface';

export const createCase = async ({ titulo, descricao, emailCliente }: CreateCase): Promise<CreateCaseResponse> => {
  const user = await axiosInstance.post<CreateCaseResponse>('/caso', {
    titulo,
    descricao,
    emailCliente,
  });

  return user.data;
};
