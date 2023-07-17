import { IButtonProps } from '../button.interface';
// nome junto e maiúsculo
export const ButtonYellow = ({ size, title, type = 'button', func }: IButtonProps) => {
  const handClick = () => {
    if (func) {
      // verifa se function foi passada
      func(); // () => void
    }
  };

  return (
    <>
      {size === 'sm' ? (
        <button
          className=" bg-secondary-800 font-mont text-sm px-8 py-4 text-gray-200 rounded shadow-black font-semibold hover:bg-yellow-500 transition-all active:bg-secondary-500"
          type={type}
          onClick={handClick}
        >
          {title}
        </button>
      ) : size === 'xl' ? (
        <button
          className="text-gray-200 bg-secondary-800 text-xl font-mont px-8 py-4 rounded shadow-black font-semibold hover:bg-yellow-500 transition-all active:bg-secondary-500"
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
