import { ReactNode } from 'react';

interface ILabel {
  forLabel: string;
  children: ReactNode;
  className?: string;
}

export const Label = ({ forLabel, children, className }: ILabel) => {
  return (
    <label htmlFor={forLabel} className={`font-mont text-gray-800 ${className ? className : ''}`}>
      {children}
    </label>
  );
};
