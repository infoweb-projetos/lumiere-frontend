import { Horse, Heart, Cube } from '@phosphor-icons/react';
interface BlueProps{
    size: "sm" | "xl",
    titulo: string,
    type: string,
}
const Button_blue = (props:BlueProps) =>{
    const tratarClique = () => {
        console.log(props.titulo)
    }

    return(
        <>
        <div>
            {
                props.size == "sm" ? 
                (<button className=
                    "text-white bg-primary-500 font-mont text-sm px-8 py-4 rounded shadow-black font-semibold hover:scale-2"  type={props.type} onClick={tratarClique}>{props.titulo}</button>) 
                    : 
                (<button className=
                    "text-white bg-primary-500 text-xl font-mont px-8 py-4 rounded shadow-black font-semibold"  type={props.type} onClick={tratarClique}>{props.titulo}</button>)
            }
        </div>
        </>
    )
}

export default Button_blue;