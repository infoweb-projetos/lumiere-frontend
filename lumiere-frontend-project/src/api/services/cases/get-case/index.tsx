import axiosInstance from '@/api/axiosinstance';
import { Case } from '../../user/me';

interface Params {
  id: string;
}

export const GetCase = async ({ id }: Params): Promise<Case> => {
  const user = await axiosInstance.get<Case>(`/caso/${id}`);

  return user.data;
};
