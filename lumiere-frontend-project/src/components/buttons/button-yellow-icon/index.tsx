import { IButtonProps } from '../button.interface';
// nome junto e maiúsculo
export const ButtonYellow = ({ size, title, type = 'button', func }: IButtonProps) => {
  const handClick = () => {
    if (func) {
      void func();
    }
  };

  return (
    <>
      {size === 'sm' ? (
        <button
          className=" flex h-11 w-fit items-center justify-center rounded bg-secondary-800 px-8 py-4 font-mont text-sm font-semibold text-gray-200 transition-all hover:bg-yellow-500 active:bg-secondary-500"
          type={type}
          onClick={handClick}
        >
          {title}
        </button>
      ) : size === 'xl' ? (
        <button
          className=" w-fit rounded bg-secondary-800 px-8 py-4 font-mont text-xl font-semibold text-gray-200 transition-all hover:bg-yellow-500 active:bg-secondary-500"
          type={type}
          onClick={handClick}
        >
          {title}
        </button>
      ) : (
        <p className=" text-sm">Esse tamanho não existe</p>
      )}
    </>
  );
};
