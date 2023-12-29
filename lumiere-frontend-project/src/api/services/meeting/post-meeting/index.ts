import axiosInstance from '../../../axiosinstance';
import { Meeting } from '../../user/me';

interface Params {
  descricao: string;
  localizacao: string;
  dataReuniao: string;
  emailCliente: string;
  casoId: string;
}

export const PostMeet = async ({
  casoId,
  dataReuniao,
  descricao,
  emailCliente,
  localizacao,
}: Params): Promise<Meeting> => {
  const user = await axiosInstance.post<Meeting>('/reuniao', {
    casoId,
    dataReuniao,
    descricao,
    emailCliente,
    localizacao,
  });

  return user.data;
};
