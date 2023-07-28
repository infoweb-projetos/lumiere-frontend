import { ITextProps } from '../../text.interface';

export const MontInfo = ({ children, className }: ITextProps) => {
  return <p className={`font-mont text-sm font-normal text-gray-550 ${className ? className : ''} `}>{children}</p>;
};
