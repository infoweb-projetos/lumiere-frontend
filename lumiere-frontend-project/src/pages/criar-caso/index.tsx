import * as React from 'react';
import { useState } from 'react';
import * as Yup from 'yup';
import { ErrorsForm } from './caso.interface';
import { useMutation } from 'react-query';
import { createCaseSchema } from './caso.validation';
import { MenuLogin } from '../../components/menu/menu-login';
import { MenuNoLogin } from '../../components/menu/menu-no-login';
import { DisplayH1 } from '../../components/texts/display-sm/h1';
import { InputText } from '../../components/input/input-text';
import { MontInfo } from '../../components/texts/monteserrat/info';
import * as Toast from '@radix-ui/react-toast';
import { useNavigate } from 'react-router-dom';
import 'react-day-picker/dist/style.css';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { ApiError } from '@/api/auth/singIninterface';
import { createCase } from '@/api/services/cases/create-case';
import { CreateCaseResponse } from '@/api/services/cases/create-case/criarCaso.interface';
import { InputTextArea } from '@/components/input/input-area';
import { Menu } from '@/components/menu/menu';

export default function CriarCaso() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [nomeCliente, setnomeCliente] = useState('');
  const timerRef = React.useRef(0);
  const [open, setOpen] = React.useState(false);
  const a = false;
  const navigate = useNavigate();

  const [selected, setSelected] = useState<Date>();

  const [responseError, setResponseError] = useState('');
  const [validationFormError, setValidationFormError] = useState<ErrorsForm>({
    titulo: '',
    descricao: '',
    nomecliente: '',
  });

  const createCaseMutation = useMutation(createCase, {
    onSuccess: () => {
      navigate(-1);
    },
    onError: (error: ApiError) => {
      window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => {
        setOpen(true);
      }, 100);
      setResponseError(error.response?.data.message || 'Um erro inesperado ocorreu.');
    },
  });

  const validateForm = async (): Promise<boolean> => {
    try {
      await createCaseSchema.validate(
        {
          titulo,
          descricao,
          nomecliente: nomeCliente,
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
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const isValid = await validateForm();

    if (isValid) {
      console.log(descricao);
      createCaseMutation.mutate({
        titulo: titulo,
        descricao: descricao,
        emailCliente: nomeCliente,
      });
    }
  }
  return (
    <>
      <Menu />
      <main className=" min-h-screen bg-gray-200 px-24 pt-24">
        <div className="rounded bg-white pb-16 pl-24 pr-24 pt-16">
          <div className="mb-8 flex flex-col">
            <DisplayH1 className="mb-4 text-[40px] text-[#4A4A4A]">Criar caso</DisplayH1>
            <label className="font-mont text-[20px] font-semibold">Titulo</label>
            <InputText
              className="bg-white "
              erro={false}
              placeholder="Ex: Pensão alimentícia"
              name="titulo"
              value={titulo}
              onChange={setTitulo}
            />
            <MontInfo className="text-semantic-red">{validationFormError.titulo}</MontInfo>
          </div>
          <div className=" mb-8 flex flex-col">
            <label className="font-mont text-[20px] font-semibold">Email do cliente</label>
            <InputText
              className="bg-white"
              erro={false}
              placeholder="Ex: Maria das Graças"
              name="nome"
              value={nomeCliente}
              onChange={setnomeCliente}
            />
            <MontInfo className="text-semantic-red">{validationFormError.nomecliente}</MontInfo>
          </div>
          <div className="flex w-full flex-row  justify-between gap-4">
            <div className=" mb-8 flex w-full flex-col">
              <label className="font-mont text-[20px] font-semibold">Descrição</label>
              <InputTextArea
                className="h-full w-full bg-white"
                erro={false}
                placeholder=""
                name="descricao"
                value={descricao}
                onChange={setDescricao}
              />
              <MontInfo className="text-semantic-red">{validationFormError.descricao}</MontInfo>
            </div>
            <DayPicker mode="single" selected={selected} onSelect={setSelected} className="font-mont" />
          </div>
        </div>
        <form className="flex w-full flex-row-reverse gap-4 bg-white pb-16 pr-24" onSubmit={onSubmit}>
          <button
            className="bg-text-[20px] w-fit rounded-sm bg-primary-500 pb-3 pl-6 pr-6 pt-3 font-mont text-white hover:bg-blue-800"
            type="submit"
          >
            Criar Caso
          </button>
        </form>
      </main>
    </>
  );
}
