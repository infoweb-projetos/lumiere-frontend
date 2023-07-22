import { MenuLogin } from './components/menu/menu-login';
import { MenuNoLogin } from './components/menu/menu-no-login';
import { DisplayTitulo } from './components/texts/display-sm/titulo';
import { MontH1 } from './components/texts/monteserrat/h1';
import { MontP } from './components/texts/monteserrat/p';

function App() {
  const a = false;
  return (
    <>
      {a ? <MenuNoLogin /> : <MenuLogin />}

      {/*  */}
      <div className="mt-16 flex h-[1000px] flex-col content-center items-center bg-gray-200 p-8 text-3xl font-bold">
        <div className="space-y-8">
          <DisplayTitulo>Melhores Advogados</DisplayTitulo>
          <MontH1>Advogados</MontH1>
          <MontP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi possimus dolor dolorem corporis officiis
            voluptas saepe odio placeat aliquam, iusto fugit ut, in doloremque dolorum recusandae eaque provident iste
            a.
          </MontP>
          <MontP className=" text-right text-semantic-red">Erro no console</MontP>
          <MontH1>Lawyers</MontH1>
          <MontP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi possimus dolor dolorem corporis officiis
            voluptas saepe odio placeat aliquam, iusto fugit ut, in doloremque dolorum recusandae eaque provident iste
            a.
          </MontP>
        </div>
      </div>
    </>
  );
}

export default App;
