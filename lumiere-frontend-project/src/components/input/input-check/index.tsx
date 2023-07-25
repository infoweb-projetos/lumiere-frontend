import { Check } from '@phosphor-icons/react';
import { IInput } from '../input.interface';

interface IInputCheckbox extends IInput {
  placeholder: string;
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: boolean) => void;
}

export const InputCheckbox = ({ placeholder, className, name, value, erro = true, onChange }: IInputCheckbox) => {
  return (
    <div className="relative">
      <label htmlFor={name}>
        <Check
          size={18}
          className="absolute left-0 top-0 z-10 translate-x-[15%] translate-y-[15%] text-gray-300 transition-all"
        />
      </label>
      <input
        type={'checkbox'}
        id={name}
        name={name}
        onChange={(e) => onChange(e.target.checked)}
        value={value && value}
        className={`required:border-red-500 relative z-0 h-6 w-6 appearance-none rounded border-[1px] bg-gray-200 transition-all checked:bg-primary-800  ${
          className ? className : ''
        }${erro ? 'border-semantic-red' : ''}`}
        placeholder={placeholder}
      />
    </div>
  );
};
