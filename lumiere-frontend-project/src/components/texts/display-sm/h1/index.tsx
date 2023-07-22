import { ITextProps } from '../../text.interface';

export const DisplayH1 = ({ children, className }: ITextProps) => {
  return <p className={`font-dm text-3xl text-gray-800 ${className ? className : ''} `}>{children}</p>;
};
