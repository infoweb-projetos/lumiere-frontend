import { useState } from 'react';
import { InputCheckbox } from '../../components/input/input-check';
import { InputPassword } from '../../components/input/input-password';
import { InputText } from '../../components/input/input-text';
import { Label } from '../../components/label';
import { MontInfo } from '../../components/texts/monteserrat/info';
import { Button_blue } from '../../components/buttons/button-blue-icon';
import { CaretLeft } from '@phosphor-icons/react';
import { MontP } from '../../components/texts/monteserrat/p';
import { ErrorsForm, ErrorsFormSecond } from './cadastro.interface';
import { validationCadastroSchemaFirst, validationCadastroSecond } from './cadastro.validation';
import { useMutation } from 'react-query';
import * as Yup from 'yup';
import { signUpLawyer } from '../../api/services/advogados';
import { ApiError, SignUpLawyerResponse } from '../../api/services/advogados/singUpLawyer.interface';
import { DisplayH1 } from '../../components/texts/display-sm/h1';
import * as Switch from '@radix-ui/react-switch';

const Cadastro = () => {
  const [fase, setFase] = useState(1);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [descricao, setDecricao] = useState('');
  const [privacy, setPrivacy] = useState(false);
  const [choise, setChoise] = useState(false);

  const [responseError, setResponseError] = useState('');
  const [validationFormError, setValidationFormError] = useState<ErrorsForm>({
    email: '',
    password: '',
    name: '',
    passwordConfirm: '',
    privacy: '',
  });

  const [validationFormErrorSecond, setValidationFormErrorSecond] = useState<ErrorsFormSecond>({
    historico: '',
    cnpj: '',
  });

  const signUpLawyerMutation = useMutation(signUpLawyer, {
    onSuccess: (data: SignUpLawyerResponse) => {
      console.log(data);
    },
    onError: (error: ApiError) => {
      setResponseError(error.response?.data.message || 'Um erro inesperado ocorreu.');
    },
  });

  const validateFormFirst = async (): Promise<boolean> => {
    try {
      await validationCadastroSchemaFirst.validate(
        {
          name: name,
          email: email,
          password: password,
          passwordConfirm: passwordConfirm,
          privacy: privacy,
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
  const validateFormSecond = async (): Promise<boolean> => {
    try {
      await validationCadastroSecond.validate(
        {
          cnpj: cnpjMask(cnpj),
          historico: descricao,
        },
        {
          abortEarly: false,
        },
      );
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors = error.inner.reduce<ErrorsFormSecond>((errors, err) => {
          errors[err.path as keyof ErrorsFormSecond] = err.message;
          return errors;
        }, {});
        setValidationFormErrorSecond(validationErrors);
      }
      return false;
    }
    setValidationFormError({});
    return true;
  };

  async function onSubmitFirst(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const isValid = await validateFormFirst();

    if (isValid) {
      console.log('ok');
      setFase(fase + 1);
    }
  }

  async function onSubmitClient(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const isValid = await validateFormFirst();

    if (isValid) {
      console.log('ok');
    }
  }

  async function onSubmitSecond(e: React.FormEvent<HTMLFormElement>) {
    console.log('oi');
    e.preventDefault();

    const isValid = await validateFormSecond();

    if (isValid) {
      console.log('ok');
      signUpLawyerMutation.mutate({
        email: email,
        nome: name,
        cnpj: cnpj,
        historico: descricao,
        password: password,
        passwordConfirm: passwordConfirm,
      });
    }
  }

  function cnpjMask(value: string) {
    return value
      .replace(/\D+/g, '') // não deixa ser digitado nenhuma letra
      .replace(/(\d{2})(\d)/, '$1.$2') // captura 2 grupos de número o primeiro com 2 digitos e o segundo de com 3 digitos, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de número
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2') // captura 2 grupos de número o primeiro e o segundo com 3 digitos, separados por /
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1'); // captura os dois últimos 2 números, com um - antes dos dois números
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="flex w-96 flex-col items-center justify-center gap-4 rounded border-2 border-gray-200 p-8 transition-all">
        <div className="w-full text-left">
          <DisplayH1>Cadastro</DisplayH1>
          {responseError && (
            <div className="rounded bg-semantic-red p-4 transition-all">
              <MontInfo className="text-white">{responseError}</MontInfo>
            </div>
          )}
        </div>

        {fase === 1 && (
          <form className="flex flex-col gap-6" onSubmit={choise ? onSubmitFirst : onSubmitClient}>
            <div className="flex w-full flex-col">
              <Label forLabel="name">Name</Label>
              <InputText onChange={setName} erro={false} placeholder="name" name="name" value={name} />
              <MontInfo className="text-semantic-red">{validationFormError.name}</MontInfo>
            </div>
            <div className="flex w-full flex-col">
              <Label forLabel="email">Email</Label>
              <InputText onChange={setEmail} value={email} erro={false} placeholder="email" name="email" />
              <MontInfo className="text-semantic-red">{validationFormError.email}</MontInfo>
            </div>
            <div className="flex w-full flex-col">
              <Label forLabel="password">Senha</Label>
              <InputPassword
                value={password}
                onChange={setPassword}
                erro={false}
                placeholder="password"
                name="password"
              />
              <MontInfo className="text-semantic-red">{validationFormError.password}</MontInfo>
            </div>
            <div className="flex w-full flex-col">
              <Label forLabel="passwordConfirm">Confirmar a senha</Label>
              <InputPassword
                value={passwordConfirm}
                onChange={setPasswordConfirm}
                erro={false}
                placeholder="password"
                name="passwordConfirm"
              />
              <MontInfo className="text-semantic-red">{validationFormError.passwordConfirm}</MontInfo>
            </div>
            <div className="flex w-full items-center justify-center gap-2">
              <label className="pr-[15px] text-[15px] leading-none text-white" htmlFor="airplane-mode">
                <MontP className="w-25">Cliente</MontP>
              </label>

              <Switch.Root
                className="relative h-[25px] w-[42px] cursor-default rounded-full border-[1px] border-gray-500 bg-gray-200 shadow-black outline-none transition-all duration-200 focus:shadow-black data-[state=checked]:bg-gray-800"
                id="airplane-mode"
                onClick={() => setChoise(!choise)}
              >
                <Switch.Thumb className=" block h-[14px] w-[14px] translate-x-0.5 rounded-full bg-gray-400 shadow-black transition-all duration-200  will-change-transform data-[state=checked]:h-[18px] data-[state=checked]:w-[18px] data-[state=checked]:translate-x-[19px] data-[state=checked]:bg-white" />
              </Switch.Root>
              <label className=" pr-[15px] text-[15px] leading-none text-white" htmlFor="airplane-mode">
                <MontP className="w-25">Advogado</MontP>
              </label>
            </div>
            <div className="flex gap-4">
              <InputCheckbox erro={false} placeholder="check" name="privicy" onChange={(e: boolean) => setPrivacy(e)} />
              <Label forLabel="privicy" className="text-info">
                <MontInfo className="inline text-[14px]">
                  Aceitar termos da empresa Lumiere.{' '}
                  <a href="google.com" className="inline transition-all hover:underline">
                    saiba mais
                  </a>
                </MontInfo>
              </Label>
            </div>
            <MontInfo className="text-semantic-red">{validationFormError.privacy}</MontInfo>

            <Button_blue size="sm" title={choise ? 'Próxima' : 'Cadastro'} type={'submit'} />
          </form>
        )}
        {fase === 2 && choise && (
          <form className="flex w-full flex-col gap-4" onSubmit={onSubmitSecond}>
            <button onClick={() => setFase(fase - 1)} className=" group flex items-center gap-2">
              <CaretLeft
                size={32}
                className="h-8 w-8 rounded-full transition-all hover:bg-gray-200 active:bg-gray-300"
              />
              <div className="">
                <MontP>Voltar</MontP>
                <div className="group-hover: w-0 border-b border-b-gray-300 transition-all duration-200 group-hover:w-full"></div>
              </div>
            </button>

            <div className="flex w-full flex-col">
              <Label forLabel="historico">Descrição</Label>
              <textarea
                maxLength={200}
                className=" rounded border-[1px] bg-gray-200 pl-4 pr-4 pt-2 font-mont text-gray-800 transition-all focus:outline-none focus:outline-offset-0 focus:outline-gray-400/50"
                name="historico"
                value={descricao}
                onChange={(e) => setDecricao(e.target.value)}
              ></textarea>
              <MontInfo className="text-semantic-red">{validationFormErrorSecond.historico}</MontInfo>
            </div>
            <div className="flex w-full flex-col">
              <Label forLabel="cnpj">CNPJ</Label>
              <InputText erro={false} placeholder="CNPJ" name="cnpj" value={cnpjMask(cnpj)} onChange={setCnpj} />
              <MontInfo className="text-semantic-red">{validationFormErrorSecond.cnpj}</MontInfo>
            </div>
            <Button_blue size="sm" title="Continuar" type="submit" />
          </form>
        )}
      </div>
    </div>
  );
};

export default Cadastro;
