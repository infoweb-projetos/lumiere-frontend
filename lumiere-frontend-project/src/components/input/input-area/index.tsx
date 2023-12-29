import { IInput } from '../input.interface';

interface IInputText extends IInput {
  placeholder: string;
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (text: string) => void;
}

export const InputTextArea = ({ placeholder, className, name, value, erro, onChange }: IInputText) => {
  return (
    <textarea
      id={name}
      name={name}
      value={value && value}
      onChange={(e) => onChange(e.target.value)}
      className={`h-10 rounded border-[1px] bg-gray-200 pl-4 pr-4 font-mont text-gray-800 transition-all focus:outline-none focus:outline-offset-0 focus:outline-gray-400/50 ${
        className ? className : ''
      } ${erro ? 'border-semantic-red' : ''}`}
      placeholder={placeholder}
    />
  );
};
