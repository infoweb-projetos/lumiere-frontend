import React, { useState } from 'react'
import { MontH1 } from '../../texts/monteserrat/h1';
import { MontP } from '../../texts/monteserrat/p';
import { ICardProps } from '../card.interface.ts';
import { Rating } from 'react-simple-star-rating'
import { ButtonYellow } from '../../buttons/button-yellow-icon/index.tsx';
import { string } from 'yup';


export const CardPageAdvogadoIndividual = ({ name, description, rating, photourl, referencia} :  ICardProps) =>{
    const onPointerMove = (value: number, index: number) => value=parseInt(rating);

    return(
        <div className='bg-blue-300 flex flex-row pb-4 pt-28 w-full pl-20 pr-20'>
            <div className='flex flex-col w-1/4 items-center'>
                <div className='flex flex-row justify-center '>
                    <MontH1 className="text-white text-[24px] mr-4">{name}</MontH1>
                    <Rating onClick={onPointerMove} size={35} disableFillHover={true} allowHover={false} fillColor="#D1BC87" SVGstyle={{'display':'inline'}}initialValue={parseInt(rating)}/>
                </div>
                <img className='-rotate-90 w-96'src={photourl}></img>
            </div>
            <div className="flex flex-col w-1/4 items-center mr-10">
                <div>
                    <div className="pb-8">
                        <MontH1 className="text-white pb-2">Casos vencidos</MontH1>
                        <img src="/verde-bola.svg"></img>
                    </div>
                    <div className="pb-8">
                        <MontH1 className="text-white pb-2">Casos perdidos</MontH1>
                        <img src="/vermelho-bola.svg"></img>
                    </div>
                    <div>
                        <MontH1 className="text-white pb-2">CNPJ</MontH1>
                        <MontP children={string}className="text-white pb-2">12.345.678/0002-00</MontP>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-3/6">
                <div className="pb-8">
                    <MontH1 className="text-white pb-2">Histórico de atuação</MontH1>
                    <MontP children={string}className="text-white pb-2">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words</MontP>
                </div>
                <div className="pb-8">
                    <MontH1 className="text-white pb-2">Áreas de atuação</MontH1>
                    <div className="flex">
                        <MontP children={string}className="p-2 bg-white rounded-sm ">FAMILIAR</MontP>
                        <MontP children={string}className="p-2 bg-white rounded-sm ml-5">ROUBOS</MontP>
                    </div>
                </div>
                <ButtonYellow title={"Entrar em contato"} size={"xl"}></ButtonYellow>
            </div>
        </div>
    )
}