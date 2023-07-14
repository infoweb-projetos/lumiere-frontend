import { Horse, Heart, Cube } from '@phosphor-icons/react';

function App() {
  return (
    <>
      <div className="flex h-screen content-center items-center justify-center text-3xl font-bold">
        <p className="bg-blue-400">
          Tailwind funcionou, Baixe a extensão Tailwind CSS IntelliSense
          <br />
          Feito com Vite, Tailwind, Axios, @phosphor-icons/react, Prettier e ESLint
        </p>
        <Horse />
        <Heart color="#AE2983" weight="fill" size={32} />
        <Cube color="teal" weight="duotone" />
      </div>
    </>
  );
}

export default App;
