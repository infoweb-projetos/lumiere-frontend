export interface IButtonProps {
  size: 'sm' | 'xl';
  title: string;
  type?: 'button' | 'submit' | 'reset'; // type pode ser opcional
  func?: () => void;
  className?: string;
  referencia?: string;
}
