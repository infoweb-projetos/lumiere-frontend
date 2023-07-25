import axiosInstance from '../../axiosinstance';
import { SignUpLawyer, SignUpLawyerResponse } from './singUpLawyer.interface';

export const signUpLawyer = async ({
  email,
  password,
  nome,
  passwordConfirm,
  cnpj,
  historico,
}: SignUpLawyer): Promise<SignUpLawyerResponse> => {
  const user = await axiosInstance.post<SignUpLawyerResponse>('/advogado', {
    email,
    password,
    passwordConfirm,
    nome,
    cnpj,
    historico,
  });

  return user.data;
};
