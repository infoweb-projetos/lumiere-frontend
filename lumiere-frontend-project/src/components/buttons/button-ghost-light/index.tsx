import { IButtonProps } from '../button.interface';
export const Button_ghost_light = ({ size, title, type = 'button', func }: IButtonProps) => {
  const handClick = () => {
    if (func) {
      func();
    }
  };

  return (
    <>
      {size === 'sm' ? (
        <button
          className=" flex h-11 items-center justify-center rounded border border-gray-300 bg-gray-200 px-8 py-4 font-mont text-sm font-semibold text-gray-800 shadow-black transition-all hover:bg-gray-300 active:bg-gray-200"
          type={type}
          onClick={handClick}
        >
          {title}
        </button>
      ) : size === 'xl' ? (
        <button
          className="rounded bg-gray-200 px-8 py-4 font-mont text-xl font-semibold text-gray-800 shadow-black transition-all hover:bg-gray-400 active:bg-gray-200"
          type={type}
          onClick={handClick}
        >
          {title}
        </button>
      ) : (
        <p className="text-sm">Esse tamanho não existe</p>
      )}
    </>
  );
};