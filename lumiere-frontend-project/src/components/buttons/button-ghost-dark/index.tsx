import { IButtonProps } from '../button.interface';
export const Button_ghost_dark = ({ size, title, type = 'button', func }: IButtonProps) => {
  const handClick = () => {
    if (func) {
      func();
    }
  };

  return (
    <>
      {size === 'sm' ? (
        <button
          className="w-fit flex h-11 items-center justify-center rounded bg-primary-800 px-8 py-4 font-mont text-sm font-semibold text-gray-200 shadow-black transition-all hover:bg-blue-600 active:bg-primary-500"
          type={type}
          onClick={handClick}
        >
          {title}
        </button>
      ) : size === 'xl' ? (
        <button
          className="rounded bg-primary-800 px-8 py-4 font-mont text-xl font-semibold text-gray-200 shadow-black transition-all hover:bg-blue-600 active:bg-primary-500"
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
