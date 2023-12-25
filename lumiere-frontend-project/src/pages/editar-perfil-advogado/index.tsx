import {DateCalendar} from '@mui/x-date-pickers/DateCalendar'; 
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { ErrorsForm} from './caso.interface';
import { useMutation, useQuery } from 'react-query';
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
import { useNavigate, useParams } from 'react-router-dom';
import { editLawyer, signUpLawyer } from '../../api/services/advogados';
import { SignUpLawyerResponse } from '../../api/services/advogados/singUpLawyer.interface';
import { validationEditarSchema } from './editar.validation';
import { InputPassword } from '../../components/input/input-password';
import { MontP } from '../../components/texts/monteserrat/p';
import { Switch } from '@radix-ui/react-switch';
import * as React from 'react';
import * as Toast from '@radix-ui/react-toast';
import { Button_blue } from '../../components/buttons/button-blue-icon';
import axios from 'axios';
import { GetLawyer } from '../../api/services/advogados/get-lawyers';
import { InputEdit } from '../../components/input/input-edit';

interface PropsAdvsList {
    id: number;
    nome: string;
    email: string;
    cnpj: string;
    historico: string  | null;
    areaDeAtuacao: string | null;
  } 


export default function EditarPerfil () {

    const a = false;
    const advs = useQuery(['advs'], GetLawyer);
    const token = localStorage.getItem('token');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [descricao, setDecricao] = useState('');

    const timerRef = React.useRef(0);



    const [responseError, setResponseError] = useState('');
    const [validationFormError, setValidationFormError] = useState<ErrorsForm>({
      email: '',
      password: '',
      name: '',
      passwordConfirm: '',
    });

    const signUpLawyerMutation = useMutation(editLawyer, { //put right here
        onSuccess: (data: SignUpLawyerResponse) => {
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
          await validationEditarSchema.validate(
            {
              name: name,
              email: email,
              password: password,
              passwordConfirm: passwordConfirm,
              cnpj: cnpjMask(cnpj),
              historico: descricao,
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
          signUpLawyerMutation.mutate({
            email: email,
            nome: name,
            cnpj: cnpjMask(cnpj),
            senha: password,
            historico: descricao ? descricao : null,
            areaDeAtuacao: null,
          });
        }
      }
    
      function cnpjMask(value: string) {
        const onlyDigits = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
        const formattedCnpj = onlyDigits
          .slice(0, 14) // Limita o CNPJ a 14 dígitos
          .replace(/(\d{2})(\d)/, '$1.$2') // Aplica a formatação com pontos e barras
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1/$2')
          .replace(/(\d{4})(\d)/, '$1-$2');
        return formattedCnpj;
      }
    
      return (
        <>
        
        {a ? <MenuNoLogin /> : <MenuLogin />}
        {advs.isFetched &&
          advs.data &&
          advs.data.map((adv) => {
            if (token == adv.id) {
                setName(adv.nome)
            }
            console.log(name)
          })}
        <main className='bg-gray-200'>
          <DisplayH1 className='pl-32 pr-32 pt-24 pb-8'>Meu Perfil</DisplayH1>
            <div className="bg-blue-300 flex flex-row pl-32 pr-32">
              <div className='flex flex-row'>
                <div><img className="-rotate-90 " src="/elizia-advogada.svg" alt=''/></div>
                <InputEdit className="ml-10" placeholder={name} onChange={setName} erro={false} name="name" value={name} ></InputEdit>
            </div>
          </div>
        </main>
        
        </>
                    
            
                            
      );
    };
    