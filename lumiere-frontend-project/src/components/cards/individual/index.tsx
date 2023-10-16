import { useParams } from 'react-router-dom';
import { AdvogadoIndividual } from '../../../pages/advogado-individual/advogado-individual';

export default function Individual () {
    const {id} = useParams();
    return(
    <>
        <AdvogadoIndividual id={id? Number.parseInt(id) : null}/>    
    </>
    )
}