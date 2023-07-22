import { ITextProps } from '../../text.interface';

export const MontH1 = ({ children, className }: ITextProps) => {
  return <h1 className={`font-mont text-3xl font-bold text-gray-800 ${className ? className : ''} `}>{children}</h1>;
};
