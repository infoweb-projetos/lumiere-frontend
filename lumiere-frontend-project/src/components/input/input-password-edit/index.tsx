import { Eye, EyeSlash } from '@phosphor-icons/react';
import { IInput } from '../input.interface';
import { useState } from 'react';

interface IInputPassword extends IInput {
  placeholder: string;
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (text: string) => void;
}

export const InputPasswordEdit = ({ placeholder, className, name, value, erro, onChange }: IInputPassword) => {
  const [see, setSee] = useState(false);
  return (
    <div className="relative">
      <input
        type={see ? 'text' : 'password'}
        id={name}
        name={name}
        value={value && value}
        onChange={(e) => onChange(e.target.value)}
        className={`h-10 w-full rounded border-[1px] bg-transparent pl-4 pr-12 font-mont text-gray-800 transition-all focus:outline-none focus:outline-offset-0 focus:outline-blue-300 ${
          className ? className : ''
        } ${erro ? 'border-semantic-red' : ''}`}
        placeholder={placeholder}
      />
      <button onClick={() => setSee(!see)} className="absolute right-[3%] top-[10%]" type="button">
        {see ? (
          <Eye size={32} weight="fill" className="rounded-full p-1 text-primary-500 hover:bg-gray-500" />
        ) : (
          <EyeSlash size={32} weight="fill" className="rounded-full p-1 text-primary-500 hover:bg-gray-500" />
        )}
      </button>
    </div>
  );
};