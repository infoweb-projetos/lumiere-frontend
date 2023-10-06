import React, { useState } from 'react'
import { MontH1 } from '../../texts/monteserrat/h1';
import { MontP } from '../../texts/monteserrat/p';
import { ICardProps } from '../card.interface.ts';
import { Rating } from 'react-simple-star-rating'
import { ButtonYellow } from '../../buttons/button-yellow-icon/index.tsx';
import { string } from 'yup';


export const Comentario = ({ name, description, rating, photourl, referencia} :  ICardProps) =>{
    const onPointerMove = (value: number, index: number) => value=parseInt(rating);

    return(
        <>
        <div className='bg-white flex flex-col p-10'>
            <div className='bg-white flex flex-row ml-20'>
                <div className="flex justify-end">
                    <img className="w-[90px]" src={photourl}></img>
                </div>
                <div className="flex flex-col ml-10">
                    <div className="flex flex-row justify-center ">
                        <MontH1 className=" text-[33px] mr-4">{name}</MontH1>
                        <Rating onClick={onPointerMove} size={40} disableFillHover={true} allowHover={false} fillColor="#D1BC87" SVGstyle={{'display':'inline'}}initialValue={parseInt(rating)}/>
                    </div>
                    <MontP className='text-[24px] mt-2'>{description}</MontP>
                </div>    
        </div>
        <div className='bg-gray-100 opacity-20 w-5/4 h-[1px] mt-20 ml-20'></div>
    
    </div>
             
        </>
    )
}