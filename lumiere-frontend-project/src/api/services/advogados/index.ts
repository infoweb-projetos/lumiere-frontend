import axiosInstance from '../../axiosinstance';
import { SignUpLawyer, SignUpLawyerResponse } from './singUpLawyer.interface';

export const signUpLawyer = async ({
  email,
  nome,
  cnpj,
}: SignUpLawyer): Promise<SignUpLawyerResponse> => {
  const user = await axiosInstance.post<SignUpLawyerResponse>('/advogado', {
    email,
    nome,
    cnpj,
    historico: null,
    areaDeAtuacao: null,
  });

  return user.data;
};
