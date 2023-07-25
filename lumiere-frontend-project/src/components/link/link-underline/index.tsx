import { ILinkProps } from '../link.interface';

export const LinkUnderline = ({ href, text, className }: ILinkProps) => {
  return (
    <a href={href} className={`group relative ${className ? className : ''}`}>
      <p>{text}</p>
      <div className="group-hover: w-0 border-b border-b-gray-300 transition-all duration-200 group-hover:w-full"></div>
    </a>
  );
};
