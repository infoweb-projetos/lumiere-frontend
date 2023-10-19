import React from 'react';

type WrapperProps = React.HTMLAttributes<HTMLDivElement>;

export const Wrapper = ({ children, ...rest }: WrapperProps) => {
  return (
    <div {...rest} className="flex min-h-screen w-screen justify-center bg-gray-200">
      {children}
    </div>
  );
};
