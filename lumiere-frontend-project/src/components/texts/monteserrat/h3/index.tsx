import { ITextProps } from '../../text.interface';

export const MontH3 = ({ children, className }: ITextProps) => {
  return <h3 className={`font-mont text-xl font-bold text-gray-800 ${className ? className : ''} `}>{children}</h3>;
};
