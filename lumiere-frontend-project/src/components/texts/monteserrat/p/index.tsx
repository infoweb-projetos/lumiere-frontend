import { ITextProps } from '../../text.interface';

export const MontP = ({ children, className }: ITextProps) => {
  return <p className={`font-mont text-base font-normal text-gray-800 ${className ? className : ''} `}>{children}</p>;
};
