import { ITextProps } from '../../text.interface';

export const DisplayH3 = ({ children, className }: ITextProps) => {
  return <p className={`font-dm text-xl text-gray-800 ${className ? className : ''} `}>{children}</p>;
};
