import { Label } from '../../components/label';
import { Button_ghost_dark } from '../../components/buttons/button-ghost-dark';
import { InputText } from '../../components/input/input-text';
import { InputPassword } from '../../components/input/input-password';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { signIn } from '../../api/auth/signIn';
import { DisplayH1 } from '../../components/texts/display-sm/h1';
import { MontInfo } from '../../components/texts/monteserrat/info';
import { ApiError } from '../../api/auth/singIninterface';
import { LinkUnderline } from '../../components/link/link-underline';
import { validationLoginSchema } from './validation';
import { ErrorsForm } from './login.interface';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [mainError, setMainError] = useState('');
  const [validationFormError, setValidationFormError] = useState<ErrorsForm>({ email: '', password: '' });
  const navigate = useNavigate();

  const SignIn = useMutation(signIn, {
    onSuccess(data) {
      localStorage.setItem('token', data.access_token);
      navigate('/Casos');
    },
    onError(error: ApiError) {
      setMainError(error.response!.data.message);
    },
  });

  const validateForm = async (): Promise<boolean> => {
    try {
      await validationLoginSchema.validate(
        {
          email,
          password,
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

  const handleLogin = async (): Promise<void> => {
    const isValid = await validateForm();
    if (isValid) {
      SignIn.mutate({
        email,
        senha: password,
      });
    }
  };

  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center gap-20">
      <img src="/logo-blue-text.svg" alt="Logo azul escrito Advocacia Lumiere" />
      <div className="flex w-96 flex-col gap-4 rounded border border-gray-200 p-8">
        <DisplayH1>Login</DisplayH1>
        <Label forLabel="email">Email</Label>
        <InputText erro={false} name="email" placeholder="email" value={email} onChange={setEmail} />
        {validationFormError.email && <MontInfo className="text-semantic-red">{validationFormError.email}</MontInfo>}
        <Label forLabel="password">Senha</Label>
        <InputPassword erro={false} name="password" placeholder="senha" value={password} onChange={setPassword} />
        {validationFormError.password && (
          <MontInfo className="text-semantic-red">{validationFormError.password}</MontInfo>
        )}

        <Button_ghost_dark className="w-full" type="button" title="Entrar" size="sm" func={handleLogin} />
        {mainError != '' && <MontInfo className="text-semantic-red">{mainError}</MontInfo>}
        <div className="flex items-center gap-1">
          <MontInfo>Novo aqui?</MontInfo>
          <LinkUnderline className="w-[5.3em] text-gray-300" href="/Cadastro" text="Cadastre-se"></LinkUnderline>
        </div>
      </div>
    </div>
  );
};
