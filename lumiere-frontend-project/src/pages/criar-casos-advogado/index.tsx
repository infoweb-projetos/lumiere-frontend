import {DateCalendar} from '@mui/x-date-pickers/DateCalendar'; 
import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';
import * as Yup from 'yup';
import { ErrorsForm} from './caso.interface';
import { useMutation } from 'react-query';
import {createCaseSchema} from './caso.validation'
import { ApiError, CreateCaseResponse } from '../../api/services/casos/criarCaso.interface';
import { createCase } from '../../api/services/casos';
import { MenuLogin } from '../../components/menu/menu-login';
import { MenuNoLogin } from '../../components/menu/menu-no-login';

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
          <main className="pt-24 bg-gray-200 pl-16 pr-16 min-h-screen">
            
            
          </main>        
        
        
        </>

        )

}
