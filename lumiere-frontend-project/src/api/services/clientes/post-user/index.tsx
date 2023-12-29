import axiosInstance from '../../../axiosinstance';

interface Root {
  email: string;
  nome: string;
  senha: string;
}

export const signUpCliente = async ({ email, nome, senha }: Root): Promise<any> => {
  const user = await axiosInstance.post<any>('/cliente', {
    email,
    nome,
    senha,
  });

  return user.data;
};
