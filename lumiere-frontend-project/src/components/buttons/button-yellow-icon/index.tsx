import { Horse, Heart, Cube } from '@phosphor-icons/react';

interface YellowProps{
    size: "sm" | "xl",
    titulo: string,
    type: string,
}
const Button_yellow = (props:YellowProps) =>{
    const tratarClique = () => {
        console.log(props.titulo)
    }

    return(
        <>
        <div>
            {
                props.size == "sm" ? 
                (<button className=
                    "text-black bg-secondary-500 font-mont text-sm px-8 py-4 rounded shadow-black font-semibold"  type={props.type} onClick={tratarClique}>{props.titulo}</button>) 
                    : 
                (<button className=
                    "text-black bg-secondary-500 text-xl font-mont px-8 py-4 rounded shadow-black font-semibold"  type={props.type} onClick={tratarClique}>{props.titulo}</button>)
            }
        </div>
        </>
    )
}

export default Button_yellow;