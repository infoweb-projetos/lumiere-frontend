import { ITextProps } from '../../text.interface';

export const MontH2 = ({ children, className }: ITextProps) => {
  return <h2 className={`text- font-mont font-bold text-gray-800 ${className ? className : ''} `}>{children}</h2>;
};