import { cn } from '@/lib/utils';
import { ComponentProps } from '@/types /component-props';

interface ContainerProps extends ComponentProps {}

export const Container = ({ className, children }: ContainerProps) => {
  return (
    <div className={cn('mx-auto w-full max-w-7xl', className)}>{children}</div>
  );
};
