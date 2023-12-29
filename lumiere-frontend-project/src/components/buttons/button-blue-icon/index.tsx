import { IButtonProps } from '../button.interface';
export const Button_blue = ({ size, title, type = 'button', referencia, func, className }: IButtonProps) => {
  const handClick = () => {
    if (func) {
      void func();
    }
  };

  return (
    <>
      {size === 'sm' && referencia === undefined ? (
        <button
          className={`${className!} flex h-11 w-fit items-center justify-center rounded bg-primary-500 px-8 py-4 font-mont text-sm font-semibold text-gray-200 transition-all hover:bg-blue-600 active:bg-primary-500`}
          type={type}
          onClick={handClick}
        >
          {title}
        </button>
      ) : size === 'xl' && referencia === undefined ? (
        <button
          className={`${className!} rounded bg-primary-500 px-8 py-4 font-mont text-xl font-semibold text-gray-200 transition-all hover:bg-blue-600 active:bg-primary-500`}
          type={type}
          onClick={handClick}
        >
          {title}
        </button>
      ) : size === 'sm' && referencia ? (
        <a href={referencia} style={{ textDecoration: 'none' }}>
          <button
            className={`${className!} flex h-11 w-fit items-center justify-center rounded bg-primary-500 px-8 py-4 font-mont text-sm font-semibold text-gray-200 transition-all hover:bg-blue-600 active:bg-primary-500`}
            type={type}
          >
            {title}
          </button>
        </a>
      ) : size === 'xl' && referencia ? (
        <a href={referencia} style={{ textDecoration: 'none' }}>
          <button
            className={`${className!} rounded bg-primary-500 px-8 py-4 font-mont text-xl font-semibold text-gray-200 transition-all hover:bg-blue-600 active:bg-primary-500`}
            type={type}
          >
            {title}
          </button>
        </a>
      ) : (
        <div>Não existe</div>
      )}
    </>
  );
};
