import {DateCalendar} from '@mui/x-date-pickers/DateCalendar'; 
import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';
import * as Yup from 'yup';
import { ErrorsForm} from './caso.interface';
import { CreateCase } from '../../api/services/advogados';
import { useMutation } from 'react-query';
import { CreateCaseResponse } from '../../api/services/advogados/createCase.interface';
import {createCaseSchema} from './caso.validation'
import { ApiError } from '../../api/services/advogados/singUpLawyer.interface';

const CriarCaso = () => {
    const [titulo, setTitulo] = useState();
    const [descricao, setDescricao] = useState();
    const [nomeCliente, setnomeCliente] = useState();
    const timerRef = React.useRef(0);
    const [open, setOpen] = React.useState(false);

    const [responseError, setResponseError] = useState('');
    const [validationFormError, setValidationFormError] = useState<ErrorsForm>({
      titulo: '',
      descricao: '',
      nomecliente: '',
      createdAt: '',
    });

    const creatCaseMutation = useMutation(CreateCase, {
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
              titulo: titulo,
              descricao: descricao,
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

}