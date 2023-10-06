export interface IButtonProps {
  size: 'sm' | 'xl';
  title: string;
  type?: 'button' | 'submit' | 'reset'; // type pode ser opcional
  func?: (() => void) | (() => Promise<void>);
  className?: string;
  referencia?: string;
}
