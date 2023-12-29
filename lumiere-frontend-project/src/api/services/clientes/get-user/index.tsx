import axiosInstance from '@/api/axiosinstance';

export const GetClient = async (): Promise<any> => {
  const user = await axiosInstance.get<any>(`/cliente`);

  return user.data;
};
