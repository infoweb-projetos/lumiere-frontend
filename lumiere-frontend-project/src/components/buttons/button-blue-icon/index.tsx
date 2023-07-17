interface BlueProps {
  size: 'sm' | 'xl';
  titulo: string;
  type: 'button' | 'submit' | 'reset' | undefined;
}
export const Button_blue = (props: BlueProps) => {
  const tratarClique = () => {
    console.log(props.titulo);
  };

  return (
    <>
      {props.size == 'sm' ? (
        <button
          className="text-gray-200 bg-primary-500 font-mont text-sm px-8 py-4 rounded shadow-black font-semibold hover:scale-2"
          type={props.type}
          onClick={tratarClique}
        >
          {props.titulo}
        </button>
      ) : (
        props.size == 'xl' && (
          <button
            className="text-gray-200 bg-primary-500 text-xl font-mont px-8 py-4 rounded shadow-black font-semibold"
            type={props.type}
            onClick={tratarClique}
          >
            {props.titulo}
          </button>
        )
      )}
    </>
  );
};
