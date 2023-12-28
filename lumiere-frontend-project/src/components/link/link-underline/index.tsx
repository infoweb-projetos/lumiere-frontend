import { ILinkProps } from '../link.interface';

export const LinkUnderline = ({ href, text, className }: ILinkProps) => {
  return (
    <a
      href={href}
      style={{ textDecoration: 'none' }}
      className={`group relative text-black no-underline hover:text-black/70 ${className ? className : ''}`}
    >
      {text}
      <div className="group-hover: w-0 border-b border-b-gray-300 transition-all duration-200 group-hover:w-full"></div>
    </a>
  );
};
