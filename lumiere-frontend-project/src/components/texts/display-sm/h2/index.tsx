import { ITextProps } from '../../text.interface';

export const DisplayH2 = ({ children, className }: ITextProps) => {
  return <p className={`text- font-dm text-gray-800 ${className ? className : ''} `}>{children}</p>;
};
