import { IInput } from '../input.interface';

interface IInputText extends IInput {
  placeholder: string;
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (text: string) => void;
}

export const InputEdit = ({ placeholder, className, name, value, erro, onChange }: IInputText) => {
  return (
    <input
      placeholder={placeholder}
      type={'text'}
      id={name}
      name={name}
      value={value && value}
      onChange={(e) => onChange(e.target.value)}
      className={`font-mont bg-blue-300  h-10 ${
        className ? className : ''
      } ${erro ? 'border-semantic-red' : ''}`}
    
    />
  );
};
