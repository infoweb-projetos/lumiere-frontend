import { Label } from '../../components/label';
import { Button_ghost_dark } from '../../components/buttons/button-ghost-dark';
import { InputText } from '../../components/input/input-text';
import { InputPassword } from '../../components/input/input-password';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { signIn } from '../../api/auth/signIn';

export const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const SignIn = useMutation(signIn, {
    onSuccess(data) {
      console.log(data);
      localStorage.setItem('token', data.accessToken);
    },
    onError(error) {
      console.log(error);
    },
  });

  const handleLogin = () => {
    SignIn.mutate({
      email,
      senha: password,
    });
  };
  return (
    <div className="flex min-h-screen w-screen items-center justify-center">
      <div className="flex flex-col gap-4 rounded border border-gray-50 p-8">
        <Label forLabel="email">Email</Label>
        <InputText erro={false} name="email" placeholder="Email" value={email} onChange={setEmail} />
        <Label forLabel="password">Senha</Label>
        <InputPassword erro={false} name="password" placeholder="Password" value={password} onChange={setPassword} />
        <Button_ghost_dark type="button" title="Thank God" size="sm" func={handleLogin} />
      </div>
    </div>
  );
};
