import { MenuLogin } from './components/menu/menu-login';
import { MenuNoLogin } from './components/menu/menu-no-login';



function App() {
  const a = false;
  return (
    <>

      {a ? <MenuNoLogin /> : <MenuLogin />}

      {/*  */}
    </>
  )
}

export default App;
