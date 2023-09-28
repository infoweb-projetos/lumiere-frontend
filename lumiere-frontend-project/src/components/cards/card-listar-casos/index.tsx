import React, { useState } from 'react'
import { MontH1 } from '../../texts/monteserrat/h1';
import { MontP } from '../../texts/monteserrat/p';
import { Rating } from 'react-simple-star-rating'
import { ButtonYellow } from '../../buttons/button-yellow-icon/index.tsx';

interface ILinha {
    titulo: string;
    createdAt: string;
    id: string;
    advogadoId: string,
}

export const LinhaCaso = ({titulo, createdAt, id, advogadoId} :  ILinha) =>{
    return(
        <>
            <input type="checkbox" className="accent-secondary-500 max-h-10"/>
            <h1 className=" bg-secondary-500 font-mont rounded-sm p-2 w-fit text-yellow-100">{titulo}</h1>        
            <h1 className=" font-mont ">{createdAt.toLocaleString()}</h1>  
        </>
    )
}