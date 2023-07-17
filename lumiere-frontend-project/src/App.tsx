import { Button_blue } from './components/buttons/button-blue-icon';
import { ButtonYellow } from './components/buttons/button-yellow-icon';

function App() {
  return (
    <>
      <div className="text-3xl font-bold content-center flex justify-center items-center h-screen gap-8">
        <Button_blue titulo="Button" size="sm" type={'button'} />
        <ButtonYellow title="Button" size="xl" />
      </div>
    </>
  );
}

export default App;
