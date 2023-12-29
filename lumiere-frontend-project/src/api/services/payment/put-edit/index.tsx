import axiosInstance from '@/api/axiosinstance';
import { Payment } from '../get-payment';

interface Params {
  id: string;
  pago: boolean;
  quantia?: number;
}

export const PutPayment = async ({ id, pago, quantia }: Params): Promise<Payment> => {
  const payments = await axiosInstance.put<Payment>(`/pagamento/${id}`, {
    pago,
    quantia,
  });

  return payments.data;
};
