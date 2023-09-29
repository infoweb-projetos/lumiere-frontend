import {DateCalendar} from '@mui/x-date-pickers/DateCalendar'; 
import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';
import { ErrorsForm} from './caso.interface';

const CriarCaso = () => {
    const [titulo, setTitulo] = useState();
    const [descricao, setDescricao] = useState();
    const [nomeCliente, setnomeCliente] = useState();

    const [responseError, setResponseError] = useState('');
    const [validationFormError, setValidationFormError] = useState<ErrorsForm>({
      titulo: '',
      descricao: '',
      nomecliente: '',
      createdAt: '',
    });


}