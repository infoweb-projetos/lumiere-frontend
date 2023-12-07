import axiosInstance from '../../axiosinstance';
import { SignUpLawyer, SignUpLawyerResponse } from './singUpLawyer.interface';

export const signUpLawyer = async ({
  email,
  nome,
  cnpj,
  senha,
  historico,
}: SignUpLawyer): Promise<SignUpLawyerResponse> => {
  const user = await axiosInstance.post<SignUpLawyerResponse>('/advogado', {
    email,
    nome,
    cnpj,
    senha,
    historico,
    areaDeAtuacao: null,
  });

  return user.data;
};

export const editLawyer = async ({
  email,
  nome,
  cnpj,
  senha,
  historico,
}: SignUpLawyer): Promise<SignUpLawyerResponse> => {
  const user = await axiosInstance.put<SignUpLawyerResponse>('/advogado', {
    email,
    nome,
    cnpj,
    senha,
    historico,
    areaDeAtuacao: null,
  });

  return user.data;
};

