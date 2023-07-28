import React, { useState } from 'react'
import { MontH1 } from '../../texts/monteserrat/h1';
import { MontP } from '../../texts/monteserrat/p';
import { ICardProps } from '../card.interface.ts';
import { Rating } from 'react-simple-star-rating'
import { ButtonYellow } from '../../buttons/button-yellow-icon/index.tsx';
import { Button_ghost_dark } from '../../buttons/button-ghost-dark/index.tsx';
import { Link, Route, useParams,  } from "react-router-dom";
  


export const CardMenuBottom = ({name, description, rating, photourl} :  ICardProps) =>{
    const onPointerMove = (value: number, index: number) => value=parseInt(rating);

    return(
        
        <div className='bg-white flex flex-row  rounded border-2 border-gray-200  '>
            <div className="flex flex-col justify-between pt-4">
            <div className="p-8">
                <Rating onClick={onPointerMove} disableFillHover={true} allowHover={false} fillColor="#D1BC87" SVGstyle={{'display':'inline'}}initialValue={parseInt(rating)}/>
                <MontH1>{name}</MontH1>
                <MontP className="pb-10">{description}</MontP>
            </div>
            <img className='h-3/5 object-cover' src={photourl}></img>
            </div>
        </div>
    )
}