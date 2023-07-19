import { IButtonProps } from '../button.interface';
export const Button_ghost_light = ({ size, title, type = 'button', func }: IButtonProps) => {
  const handClick = () => {
    if(func){
      func();
    }
  };

  return (
    <>
      {size === 'sm' ? (
       <button
       className=" bg-gray-200 border-gray-800 font-mont text-sm px-8 py-4 text-gray-800 rounded shadow-black font-semibold hover:bg-gray-400 transition-all active:bg-gray-200"
       type={type}
       onClick={handClick}
     >
       {title}
     </button>
      ) : size === 'xl' ? (
        <button
          className="text-gray-800 bg-gray-200 text-xl font-mont px-8 py-4 rounded shadow-black font-semibold hover:bg-gray-400 transition-all active:bg-gray-200"
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
