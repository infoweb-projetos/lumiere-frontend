import { ITextProps } from '../../text.interface';

export const MontInfo = ({ children, className }: ITextProps) => {
  return <p className={`font-mont text-sm font-normal text-gray-800 ${className ? className : ''} `}>{children}</p>;
};
