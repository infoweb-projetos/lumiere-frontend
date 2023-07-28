import React, { useState } from 'react'
import { MontH1 } from '../../texts/monteserrat/h1';
import { MontP } from '../../texts/monteserrat/p';
import { ICardProps } from '../card.interface.ts';
import { Rating } from 'react-simple-star-rating'
import { ButtonYellow } from '../../buttons/button-yellow-icon/index.tsx';


export const CardAmarelo = ({name, description, rating, photourl} :  ICardProps) =>{
    const onPointerMove = (value: number, index: number) => value=parseInt(rating);

    return(
        <div className='bg-white flex flex-col rounded'>
            <img className='mb-4'src={photourl}></img>
            <div className=' pl-8 max-w-xs h-80 flex flex-col justify-around'>
                <Rating onClick={onPointerMove} disableFillHover={true} allowHover={false} fillColor="#3F3F3F" SVGstyle={{'display':'inline'}}initialValue={parseInt(rating)}/>
                <MontH1>{name}</MontH1>
                <MontP>{description}</MontP>
            <div className='h-20 flex items-center'><ButtonYellow title="Contactar" size="sm"></ButtonYellow></div>
            </div>
        </div>
    )
}