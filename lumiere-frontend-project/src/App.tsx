import { MenuLogin } from './components/menu/menu-login';
import { MenuNoLogin } from './components/menu/menu-no-login';

function App() {
  const a = false;
  return (
    <>
      {a ? <MenuNoLogin /> : <MenuLogin />}

      {/*  */}
      <div className="mt-16 flex h-[1000px] flex-col content-center items-center bg-gray-200 p-8 text-3xl font-bold"></div>
    </>
  );
}

export default App;
