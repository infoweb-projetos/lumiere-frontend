import { useLocation, useParams } from "react-router-dom"

interface PropsAdv{
    id : number | null,
}
export const AdvogadoIndividual = ({id} : PropsAdv) => {
    console.log(id)
    return(
        <>
        <h1>{id}</h1>
        </>
    )
}
