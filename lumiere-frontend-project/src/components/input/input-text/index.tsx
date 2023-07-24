import { IInput } from '../input.interface';

interface IInputText extends IInput {
  placeholder: string;
  value?: string;
}

export const InputText = ({ placeholder, className, name, value, erro }: IInputText) => {
  return (
    <input
      type={'text'}
      id={name}
      name={name}
      value={value && value}
      className={`h-10 rounded border-[1px] transition-all bg-gray-200 pl-4 pr-4 font-mont text-gray-800 focus:outline-none focus:outline-offset-0 focus:outline-gray-400/50 ${
        className ? className : ''
      } ${erro ? 'border-semantic-red' : ''}`}
      placeholder={placeholder}
    />
  );
};
