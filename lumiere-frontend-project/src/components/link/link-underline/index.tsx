import { ILinkProps } from '../link.interface';

export const LinkUnderline = ({ href, text }: ILinkProps) => {
  return (
    <a href={href} className="group">
      <p>{text}</p>
      <div className="group-hover: w-0 border-b border-b-gray-300 transition-all duration-200 group-hover:w-full"></div>
    </a>
  );
};
