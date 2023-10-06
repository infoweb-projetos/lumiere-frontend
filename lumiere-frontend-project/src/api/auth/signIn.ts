import axiosInstance from '../axiosinstance';
import { SignInParams, SignInResponse } from './singIninterface';

export const signIn = async ({ email, senha }: SignInParams): Promise<SignInResponse> => {
  const user = await axiosInstance.post<SignInResponse>('/auth/login', {
    email,
    senha,
  });

  return user.data;
};
