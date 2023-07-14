import { Horse, Heart, Cube } from '@phosphor-icons/react';
import Button_blue from './components/buttons/button-blue-icon';
import Button_yellow from './components/buttons/button-yellow-icon';

function App() {
  return (
    <>
      {/*<div className="text-3xl font-bold content-center flex justify-center items-center h-screen">
        <p className="bg-blue-400">
          Tailwind funcionou, Baixe a extensão Tailwind CSS IntelliSense
          <br />
          Feito com Vite, Tailwind, Axios, @phosphor-icons/react, Prettier e ESLint
        </p>
        <Horse />
        <Heart color="#AE2983" weight="fill" size={32} />
        <Cube color="teal" weight="duotone" />
  */}
        <Button_blue titulo="Button" size="xl"/>
        <Button_yellow titulo="Button" size="xl"/>
    </>
  );
}

export default App;
