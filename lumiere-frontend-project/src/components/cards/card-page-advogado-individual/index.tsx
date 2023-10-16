import { MontH3 } from '../../texts/monteserrat/h3';
import { MontP } from '../../texts/monteserrat/p';
import { ICardProps } from '../card.interface.ts';
import { Rating } from 'react-simple-star-rating'
import { ButtonYellow } from '../../buttons/button-yellow-icon/index.tsx';


export const CardPageAdvogadoIndividual = ({ name, photourl} :  ICardProps) =>{
    // const onPointerMove = (value: number, index: number) => value=parseInt(rating);

    return(
        <div className='bg-blue-300 flex flex-row pb-4 pt-28 w-full pl-20 pr-20 justify-center'>
            <div className='flex flex-row max-w-[1500px]'>
            <div className='flex flex-col w-1/4 items-center'>
                <div className='flex flex-row justify-center '>
                    <MontH3 className="text-white mr-4">{name}</MontH3>
                    <Rating size={35} disableFillHover={true} allowHover={false} fillColor="#D1BC87" SVGstyle={{'display':'inline'}}initialValue={parseInt("4")}/>
                </div>
                <img className='-rotate-90 w-80 object-cover' src={photourl}></img>
            </div>
            <div className="flex flex-col w-1/4 items-center mr-10">
                <div>
                    <div className="pb-8">
                        <MontH3 className="text-white pb-2">Casos vencidos</MontH3>
                        <img src="/verde-bola.svg"></img>
                    </div>
                    <div className="pb-8">
                        <MontH3 className="text-white pb-2">Casos perdidos</MontH3>
                        <img src="/vermelho-bola.svg"></img>
                    </div>
                    <div>
                        <MontH3 className="text-white pb-2">CNPJ</MontH3>
                        <MontP className="text-white pb-2">12.345.678/0002-00</MontP>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-3/6">
                <div className="pb-8">
                    <MontH3 className="text-white pb-2">Histórico de atuação</MontH3>
                    <MontP className="text-white pb-2">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words</MontP>
                </div>
                <div className="pb-8">
                    <MontH3 className="text-white pb-2">Áreas de atuação</MontH3>
                    <div className="flex">
                        <MontP className="p-2 bg-white rounded-sm ">FAMILIAR</MontP>
                        <MontP className="p-2 bg-white rounded-sm ml-5">ROUBOS</MontP>
                    </div>
                </div>
                <ButtonYellow title={"Entrar em contato"} size={"xl"}></ButtonYellow>
            </div>
            </div>
        </div>
    )
}