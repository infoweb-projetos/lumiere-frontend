import * as React from 'react';
import * as Toast from '@radix-ui/react-toast';
import { MontInfo } from '../texts/monteserrat/info';

interface PropsToast {
  titulo: string;
  description: string;
  open: boolean;
  // eslint-disable-next-line no-unused-vars
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToastDemo = ({ titulo, description }: PropsToast) => {
  const [open, setOpen] = React.useState(false);
  const timerRef = React.useRef(0);
  window.clearTimeout(timerRef.current);
  timerRef.current = window.setTimeout(() => {
    setOpen(true);
  }, 100);

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        className="data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=end]:animate-swipeOut flex flex-col gap-x-[15px] rounded-md bg-semantic-red p-[15px] font-mont shadow-black data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
        open={open}
        onOpenChange={setOpen}
      >
        <Toast.Title className="mb-[5px] font-mont text-[15px] font-bold text-gray-200 [grid-area:_title]">
          {titulo}
        </Toast.Title>
        <Toast.Description asChild>
          <MontInfo className="text-[12px] text-white/80">{description}</MontInfo>
        </Toast.Description>
      </Toast.Root>
      <Toast.Viewport className="fixed bottom-0 right-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-[10px] p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]" />
    </Toast.Provider>
  );
};

export default ToastDemo;
