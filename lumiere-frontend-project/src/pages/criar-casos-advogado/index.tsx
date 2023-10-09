import {DateCalendar} from '@mui/x-date-pickers/DateCalendar'; 
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import * as React from 'react';
import { useState } from 'react';
import * as Yup from 'yup';
import { ErrorsForm} from './caso.interface';
import { useMutation } from 'react-query';
import {createCaseSchema} from './caso.validation'
import { ApiError, CreateCaseResponse } from '../../api/services/casos/criarCaso.interface';
import { createCase } from '../../api/services/casos';
import { MenuLogin } from '../../components/menu/menu-login';
import { MenuNoLogin } from '../../components/menu/menu-no-login';
import { DisplayH1 } from '../../components/texts/display-sm/h1';
import { Label } from '../../components/label';
import { InputText } from '../../components/input/input-text';
import { MontInfo } from '../../components/texts/monteserrat/info';
import { InputTextArea } from '../../components/input/input-textarea';

export default function CriarCaso () {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [nomeCliente, setnomeCliente] = useState('');
    const timerRef = React.useRef(0);
    const [open, setOpen] = React.useState(false);
    const a = false;

    const [responseError, setResponseError] = useState('');
    const [validationFormError, setValidationFormError] = useState<ErrorsForm>({
      titulo: '',
      descricao: '',
      nomecliente: '',
    });

    const createCaseMutation = useMutation(createCase, {
        onSuccess: (data: CreateCaseResponse) => {
          console.log(data);
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
            nomecliente: nomeCliente,
          });
        }
      }
      return(
        <>
          {a ? <MenuNoLogin /> : <MenuLogin />}
          <main className=" bg-gray-200 p-48 min-h-screen">
            <div className='bg-white pt-16 pb-16 pl-24 pr-24'>
            <div className="flex flex-col mb-8">
              <DisplayH1 className='text-[#4A4A4A] mb-4 text-[40px]'>Procurar advogados</DisplayH1>
              <label className="font-mont text-[20px] font-semibold">Titulo</label>
              <InputText className="bg-white "erro={false} placeholder="Ex: Pensão alimentícia" name="titulo" value={titulo} onChange={setTitulo} />
              <MontInfo className="text-semantic-red">{validationFormError.titulo}</MontInfo>
            </div>
            <div className=" flex flex-col mb-8">
              <label className="font-mont text-[20px] font-semibold">Descrição</label>
              <InputTextArea className="bg-white h-36" erro={false} placeholder="" name="descricao" value={descricao} onChange={setDescricao} />
              <MontInfo className="text-semantic-red">{validationFormError.descricao}</MontInfo>
            </div>
            <div className=" flex flex-col mb-8">
              <label className="font-mont text-[20px] font-semibold">Nome do cliente</label>
              <InputText className="bg-white" erro={false} placeholder="Ex: Maria das Graças" name="nome" value={nomeCliente} onChange={setnomeCliente} />
              <MontInfo className="text-semantic-red">{validationFormError.nomecliente}</MontInfo>
            </div>


            </div>

          </main>        
        
        
        </>

        )

}
