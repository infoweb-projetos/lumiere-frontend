import axiosInstance from '../../axiosinstance';
import { SignUpLawyer, SignUpLawyerResponse } from './singUpLawyer.interface';

export const signUpLawyer = async ({
  email,
  nome,
  cnpj,
  senha,
}: SignUpLawyer): Promise<SignUpLawyerResponse> => {
  const user = await axiosInstance.post<SignUpLawyerResponse>('/advogado', {
    email,
    nome,
    cnpj,
    senha,
    historico: null,
    areaDeAtuacao: null,
  });

  return user.data;
};
