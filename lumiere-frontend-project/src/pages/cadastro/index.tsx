import { useState } from 'react';
import { InputCheckbox } from '../../components/input/input-check';
import { InputPassword } from '../../components/input/input-password';
import { InputText } from '../../components/input/input-text';
import { Label } from '../../components/label';
import { MontH1 } from '../../components/texts/monteserrat/h1';
import { MontInfo } from '../../components/texts/monteserrat/info';
import { Button_blue } from '../../components/buttons/button-blue-icon';

const Cadastro = () => {
  const [fase, setFase] = useState(1);
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <form className="flex w-96 flex-col items-center justify-center gap-4 rounded border-2 border-gray-200 p-8">
        <div className="w-full text-left">
          <MontH1>Cadastro</MontH1>
        </div>
        {fase === 1 && (
          <div className="flex flex-col gap-4">
            <div className="flex w-full flex-col">
              <Label forLabel="name">Name</Label>
              <InputText erro={false} placeholder="name" name="name" />
            </div>
            <div className="flex w-full flex-col">
              <Label forLabel="password">Senha</Label>
              <InputPassword erro={false} placeholder="password" name="password" />
            </div>
            <div className="flex w-full flex-col">
              <Label forLabel="passwordConfirm">Confirmar a senha</Label>
              <InputPassword erro={false} placeholder="password" name="passwordConfirm" />
            </div>
            <div className="flex gap-4">
              <InputCheckbox erro={false} placeholder="check" name="privicy" />
              <Label forLabel="privicy" className="text-info">
                <MontInfo className="text-[14px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</MontInfo>
              </Label>
            </div>
            <Button_blue size="sm" title="Continuar" func={() => setFase(fase + 1)} />
          </div>
        )}
        {fase === 2 && (
          <div className="flex w-full flex-col gap-4">
            <div className="flex w-full flex-col">
              <Label forLabel="name">Name</Label>
              <InputText erro={false} placeholder="name" name="name" />
            </div>
            <div className="flex w-full flex-col">
              <Label forLabel="password">Senha</Label>
              <InputPassword erro={false} placeholder="password" name="password" />
            </div>
            <div className="flex w-full flex-col">
              <Label forLabel="passwordConfirm">Confirmar a senha</Label>
              <InputPassword erro={false} placeholder="password" name="passwordConfirm" />
            </div>
            <Button_blue size="sm" title="Continuar" func={() => setFase(fase - 1)} />
          </div>
        )}
      </form>
    </div>
  );
};

export default Cadastro;
