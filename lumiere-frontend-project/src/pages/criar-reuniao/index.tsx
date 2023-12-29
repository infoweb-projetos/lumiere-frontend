import { GetCase } from '@/api/services/cases/get-case';
import { PostMeet } from '@/api/services/meeting/post-meeting';
import { Case } from '@/api/services/user/me';
import { Button_blue } from '@/components/buttons/button-blue-icon';
import { DatePickerDemo } from '@/components/date-picker';
import { InputText } from '@/components/input/input-text';
import { Label } from '@/components/label';
import { Menu } from '@/components/menu/menu';
import { DisplayH1 } from '@/components/texts/display-sm/h1';
import { MontInfo } from '@/components/texts/monteserrat/info';
import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';

export interface Root {
  descricao: string;
  localizacao: string;
  dataReuniao: Date;
  emailCliente: string;
}

export interface ErrorsCreateMeet {
  localizacao?: string;
  dataReuniao?: string;
  descricao?: string;
  emailCliente?: string;
}

export const CreateMeet = () => {
  const navigate = useNavigate();
  const [caso, setCaso] = useState<Case | undefined>();
  const [reuniao, setReuniao] = useState<Root>({
    dataReuniao: new Date(),
    descricao: '',
    emailCliente: '',
    localizacao: '',
  });

  const { id } = useParams();

  const mutateReuniao = useMutation(PostMeet, {
    onSuccess: (data) => {
      navigate(-1);
    },
  });

  const mutateCaso = useMutation(GetCase, {
    onSuccess: (data) => {
      setCaso(data);
    },
    onError: () => {
      navigate(-1);
    },
  });

  useEffect(() => {
    if (id) {
      mutateCaso.mutate({
        id,
      });
    }
  }, []);

  const validationSchema = Yup.object().shape({
    localizacao: Yup.string().required('Por favor, insira uma localização').min(3, 'É necessário mais de 3 caracteres'),
    dataReuniao: Yup.date().required('Parace que esqueceu a data!'),
    descricao: Yup.string().required('Por favor, insira uma descrição').min(3, 'É necessário mais de 3 caracteres'),
    emailCliente: Yup.string().email('Insira um email válido').required('Insira um email válido'),
  });

  const [validationFormError, setValidationFormError] = useState<ErrorsCreateMeet>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      await validationSchema.validate(reuniao, { abortEarly: false });
      setValidationFormError({});

      if (caso) {
        mutateReuniao.mutate({
          casoId: caso.id,
          dataReuniao: String(reuniao.dataReuniao),
          descricao: reuniao.descricao,
          emailCliente: reuniao.emailCliente,
          localizacao: reuniao.localizacao,
        });
      }
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors: ErrorsCreateMeet = {};
        error.inner.forEach((err) => {
          validationErrors[err.path as keyof ErrorsCreateMeet] = err.message;
        });
        setValidationFormError(validationErrors);
      }
    }
  };

  return (
    <>
      <Menu />
      <main className=" flex min-h-screen w-full flex-col items-center scroll-smooth bg-gray-200 pb-4 pt-24">
        <div className="flex  w-full max-w-[1500px] flex-col gap-4">
          <div className="rounded bg-white p-8">
            <DisplayH1 className="mb-8">Criar Reunião</DisplayH1>
            <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <Label forLabel="Localização">Localização</Label>
                <InputText
                  value={reuniao.localizacao}
                  name="Localização"
                  placeholder="Localização"
                  erro={validationFormError.localizacao ? true : false}
                  onChange={(e) =>
                    setReuniao((prev) => ({
                      ...prev,
                      localizacao: e,
                    }))
                  }
                />
                <MontInfo className="text-semantic-red">{validationFormError.localizacao}</MontInfo>
              </div>
              <div className="flex flex-col gap-2">
                <Label forLabel="Data">Data</Label>
                <DatePickerDemo
                  date={reuniao.dataReuniao}
                  setDate={(e) =>
                    setReuniao((prev) => ({
                      ...prev,
                      dataReuniao: e,
                    }))
                  }
                />
                <MontInfo className="text-semantic-red">{validationFormError.dataReuniao}</MontInfo>
              </div>
              <div className="flex flex-col gap-2">
                <Label forLabel="Descrição">Descrição</Label>
                <textarea
                  className={`h-40 resize-none rounded border-[1px] bg-gray-200 px-4 py-2 font-mont text-gray-800 transition-all focus:outline-none focus:outline-offset-0 focus:outline-gray-400/50 ${
                    validationFormError.descricao && 'border-semantic-red'
                  }`}
                  value={reuniao.descricao}
                  name="Descrição"
                  placeholder="Descrição"
                  onChange={(e) => {
                    setReuniao((prev) => ({
                      ...prev,
                      descricao: e.target.value,
                    }));
                  }}
                />
                <MontInfo className="text-semantic-red">{validationFormError.descricao}</MontInfo>
              </div>
              <div className="flex flex-col gap-2">
                <Label forLabel="Email do cliente">Email do cliente</Label>
                <InputText
                  value={reuniao.emailCliente}
                  name="Email do cliente"
                  placeholder="Email do cliente"
                  erro={validationFormError.emailCliente ? true : false}
                  onChange={(e) =>
                    setReuniao((prev) => ({
                      ...prev,
                      emailCliente: e,
                    }))
                  }
                />
                <MontInfo className="text-semantic-red">{validationFormError.emailCliente}</MontInfo>
              </div>
              <Button_blue title="Criar" size="sm" type="submit" />
            </form>
          </div>
        </div>
      </main>
    </>
  );
};
