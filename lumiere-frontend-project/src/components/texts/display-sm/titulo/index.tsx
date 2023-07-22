import { ITextProps } from '../../text.interface';

export const DisplayTitulo = ({ children, className }: ITextProps) => {
  return <p className={`font-dm text-5xl text-gray-800 ${className ? className : ''} `}>{children}</p>;
};
