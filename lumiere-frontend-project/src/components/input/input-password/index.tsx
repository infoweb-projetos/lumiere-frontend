import { IInput } from '../input.interface';

interface IInputPassword extends IInput {
  placeholder: string;
  value?: string;
}

export const InputPassword = ({ placeholder, className, name, value, erro }: IInputPassword) => {
  return (
    <input
      type={'password'}
      id={name}
      name={name}
      value={value && value}
      className={`h-10 rounded border-[1px] bg-gray-200 pl-4 pr-4 font-mont text-gray-800 transition-all focus:outline-none focus:outline-offset-0 focus:outline-gray-400/50 ${
        className ? className : ''
      } ${erro ? 'border-semantic-red' : ''}`}
      placeholder={placeholder}
    />
  );
};
