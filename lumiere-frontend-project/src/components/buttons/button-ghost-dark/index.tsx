import { IButtonProps } from '../button.interface';
export const Button_ghost_dark = ({ size, title, type = 'button', func }: IButtonProps) => {
  const handClick = () => {
    if(func){
      func();
    }
  };

  return (
    <>
      {size === 'sm' ? (
       <button
       className=" bg-primary-800 font-mont text-sm px-8 py-4 text-gray-200 rounded shadow-black font-semibold hover:bg-blue-600 transition-all active:bg-primary-500"
       type={type}
       onClick={handClick}
     >
       {title}
     </button>
      ) : size === 'xl' ? (
        <button
          className="text-gray-200 bg-primary-800 text-xl font-mont px-8 py-4 rounded shadow-black font-semibold hover:bg-blue-600 transition-all active:bg-primary-500"
          type={type}
          onClick={handClick}
        >
          {title}
        </button>
        ) : (
          <p className="text-sm"> "Esse tamanho não existe"</p>
        )
        }
    </>
  );
};
