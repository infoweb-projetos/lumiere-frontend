import { cn } from '@/lib/utils';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('animate-pulse rounded-md bg-gray-100/40 dark:bg-primary-500/40', className)} {...props} />;
}

export { Skeleton };
