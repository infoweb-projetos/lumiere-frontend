import { Button_blue } from './components/buttons/button-blue-icon';
import { ButtonYellow } from './components/buttons/button-yellow-icon';
import { Button_ghost_dark} from './components/buttons/button-ghost-dark';
import { Button_ghost_light} from './components/buttons/button-ghost-light';

function App() {
  return (
    <>
      <div className="text-3xl font-bold content-center flex justify-center items-center h-screen gap-8">
        <Button_blue title="Button" size="sm" type={'button'} />
        <Button_ghost_dark title="Button" size="sm" type={'button'} />
        <Button_ghost_light title="Button" size="sm" type={'button'} />
        <ButtonYellow title="Button" size="xl" />
      </div>
    </>
  );
}

export default App;