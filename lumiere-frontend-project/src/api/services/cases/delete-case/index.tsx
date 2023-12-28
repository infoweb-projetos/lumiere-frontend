import axiosInstance from '@/api/axiosinstance';

interface Case {
  id: string;
}

interface Params {
  id: string;
}

export const DeleteCase = async ({ id }: Params): Promise<Case> => {
  const deletedCase = await axiosInstance.delete<Case>(`/caso/${id}`, {
    data: {
      id,
    },
  });

  return deletedCase.data;
};
