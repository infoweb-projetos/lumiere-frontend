import { ITextProps } from '../../text.interface';

export const DisplaySubTitulo = ({ children, className }: ITextProps) => {
  return <p className={`font-dm text-4xl text-gray-800 ${className ? className : ''} `}>{children}</p>;
};
