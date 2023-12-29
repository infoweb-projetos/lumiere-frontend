import { PutPayment } from '@/api/services/payment/put-edit';
import { Button_blue } from '@/components/buttons/button-blue-icon';
import { CardCredit } from '@/components/card-credit';
import { InputText } from '@/components/input/input-text';
import { Label } from '@/components/label';
import { MontH3 } from '@/components/texts/monteserrat/h3';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialogHeader,
} from '@/components/ui/alert-dialog';
import { useState } from 'react';
import ReactLoading from 'react-loading';
import { useMutation } from 'react-query';
import { validationCardSchema } from './validation';
import * as Yup from 'yup';
import { ErrorsForm } from './interface.dialog';
import { ApiError } from '@/api/auth/singIninterface';
import { MontInfo } from '@/components/texts/monteserrat/info';

interface PropsDialog {
  id: string;
  value: number;
  refetchPayment: () => void;
}

export const Dialog = ({ value, id, refetchPayment }: PropsDialog) => {
  const [numberCard, setNumberCard] = useState<string>('');
  const [dateEnd, setDateEnd] = useState<string>('');
  const [cvc, setcvc] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [validationFormError, setValidationFormError] = useState<ErrorsForm>({
    cvc: '',
    dateEnd: '',
    name: '',
    numberCard: '',
  });

  const mutatePagamento = useMutation(PutPayment, {
    onSuccess: () => {
      setOpen(false);
      refetchPayment();
    },
    onError: (err: ApiError) => {
      setOpen(false);
    },
  });

  function formatarNumeroCartao(numero: string): string {
    const numerosApenas = numero.replace(/\D/g, '');
    const numeroFormatado = numerosApenas.replace(/(\d{4})(?=\d)/g, '$1 ');
    return numeroFormatado.slice(0, 19);
  }

  function formatarDataExpiracao(data: string): string {
    const numerosApenas = data.replace(/\D/g, '');
    const dataFormatada = numerosApenas.replace(/(\d{2})(\d{2})/, '$1/$2');
    return dataFormatada.slice(0, 5);
  }

  function formatarCVC(cvc: string): string {
    const numerosApenas = cvc.replace(/\D/g, '');
    return numerosApenas.slice(0, 3);
  }

  const handlePegar = async () => {
    const isValid = await validateForm();

    if (isValid) {
      mutatePagamento.mutate({
        id,
        pago: true,
        quantia: value,
      });
    }
  };

  const validateForm = async (): Promise<boolean> => {
    try {
      await validationCardSchema.validate(
        {
          numberCard: formatarNumeroCartao(numberCard),
          dateEnd: formatarDataExpiracao(dateEnd),
          cvc: formatarCVC(cvc),
          name,
        },
        {
          abortEarly: false,
        },
      );
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors = error.inner.reduce<ErrorsForm>((errors, err) => {
          errors[err.path as keyof ErrorsForm] = err.message;
          return errors;
        }, {});
        setValidationFormError(validationErrors);
      }
      return false;
    }
    setValidationFormError({});
    return true;
  };

  return (
    <AlertDialog defaultOpen={false} onOpenChange={setOpen} open={open}>
      <AlertDialogTrigger>
        <Button_blue size={'sm'} title={'Pagar'} />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex w-full justify-center">
            <CardCredit
              numberCard={formatarNumeroCartao(numberCard)}
              dateEnd={formatarDataExpiracao(dateEnd)}
              name={name}
            />
          </div>
          <div>
            <MontInfo>Valor a se pagar</MontInfo>
            <MontH3> R$ {value}</MontH3>
          </div>
          <form action="" className="grid grid-cols-[1fr_100px_100px] gap-2">
            <div>
              <Label className="text-sm text-gray-800" forLabel="Número do Cartão">
                Número do Cartão
              </Label>
              <InputText
                className="w-full"
                placeholder="Número"
                erro={false}
                value={formatarNumeroCartao(numberCard)}
                onChange={setNumberCard}
                name="Número do Cartão"
              />
              <MontInfo className=" text-semantic-red">{validationFormError.numberCard}</MontInfo>
            </div>
            <div>
              <Label className="text-sm text-gray-800" forLabel="Número do Cartão">
                Data
              </Label>
              <InputText
                className="w-full"
                placeholder="Expirar"
                erro={false}
                value={formatarDataExpiracao(dateEnd)}
                onChange={setDateEnd}
                name="dateEnd"
              />
              <MontInfo className=" text-semantic-red">{validationFormError.dateEnd}</MontInfo>
            </div>
            <div>
              <Label className="text-sm text-gray-800" forLabel="Número do Cartão">
                CVC
              </Label>
              <InputText
                className="w-full"
                placeholder="Número"
                erro={false}
                value={formatarCVC(cvc)}
                onChange={setcvc}
                name="cvc"
              />
              <MontInfo className=" text-semantic-red">{validationFormError.cvc}</MontInfo>
            </div>

            <div>
              <Label className="text-sm text-gray-800" forLabel="Número do Cartão">
                Nome
              </Label>
              <InputText
                className="w-full"
                placeholder="Nome"
                erro={false}
                value={name}
                onChange={setName}
                name="name"
              />
              <MontInfo className=" text-semantic-red">{validationFormError.name}</MontInfo>
            </div>
            <div>
              <Label className="text-sm text-gray-800" forLabel="Número do Cartão">
                Opção
              </Label>
              <InputText
                onChange={() => {
                  console.log();
                }}
                disabled
                className="w-full"
                placeholder="option"
                erro={false}
                value={'Débito'}
                name="option"
              />
            </div>
          </form>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="h-[44px] font-mont">Cancelar</AlertDialogCancel>
          <button
            disabled={mutatePagamento.isLoading}
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={() => handlePegar()}
            className="flex h-11 items-center justify-center rounded bg-semantic-green p-5 font-mont text-white hover:bg-semantic-green/90 "
          >
            {mutatePagamento.isLoading ? (
              <ReactLoading type={'bubbles'} color={'#fff'} height={'24px'} width={'24px'} />
            ) : (
              'Pagar'
            )}
          </button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
