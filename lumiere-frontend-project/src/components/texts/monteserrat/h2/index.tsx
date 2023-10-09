import { ITextProps } from '../../text.interface';

export const MontH2 = ({ children, className }: ITextProps) => {
  return <h2 className={` font-mont text-2xl font-bold text-gray-800  ${className ? className : ''} `}>{children}</h2>;
};
