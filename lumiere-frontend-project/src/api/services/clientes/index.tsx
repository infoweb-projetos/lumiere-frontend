import axiosInstance from '../../axiosinstance';
import { Cliente, ClienteResponse } from './Cliente.interface';

export const editCliente = async ({
  email,
  nome,
  senha,
}: Cliente): Promise<ClienteResponse> => {
  const user = await axiosInstance.put<ClienteResponse>('/cliente', {
    email,
    nome,
    senha,
  });

  return user.data;
};


