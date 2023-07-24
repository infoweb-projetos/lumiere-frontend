import React, { useState } from 'react'
import { MontH1 } from '../../texts/monteserrat/h1';
import { MontP } from '../../texts/monteserrat/p';
import { ICardProps } from '../card.interface.ts';
import { Rating } from 'react-simple-star-rating'
import { ButtonYellow } from '../../buttons/button-yellow-icon/index.tsx';
import { Button_ghost_dark } from '../../buttons/button-ghost-dark/index.tsx';


export const CardProcurarAdvogados = ({name, description, rating, photourl} :  ICardProps) =>{
    const onPointerMove = (value: number, index: number) => value=parseInt(rating);

    return(
        <div className='bg-white flex flex-row w-2/4 rounded border-2 border-gray-200'>
            <img className='object-cover'src={photourl}></img>
            <div className=' pl-8 h-80 flex flex-col justify-around'>
            <div className="flex flex-row w-full justify-between">
                <MontH1>{name}</MontH1>
                <Rating onClick={onPointerMove} disableFillHover={true} allowHover={false} fillColor="#D1BC87" SVGstyle={{'display':'inline'}}initialValue={parseInt(rating)}/>
                
            </div>
            
            <MontP>{description}</MontP>
            <div className='h-20 flex items-center'><Button_ghost_dark title="Contactar" size="sm"></Button_ghost_dark></div>
            </div>
        </div>
    )
}