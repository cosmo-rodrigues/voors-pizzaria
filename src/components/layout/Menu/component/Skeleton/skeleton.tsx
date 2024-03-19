import { Skeleton } from '@/components/ui/skeleton';

export const SkeletonComponent = () => {
  return (
    <div
      className='
      flex flex-col justify-between items-center
      bg-gray-200 p-4 rounded-lg text-center
      group hover:bg-white dark:hover:bg-slate-400/50
      dark:shadow-white/50 hover:shadow-2xl
      hover:shadow-slate-900/50 transition-al
      h-[380px] w=[280px]'
    >
      <Skeleton className='h-[150px] w-[150px] rounded-full' />

      <div className='space-y-2 py-5'>
        <Skeleton className='h-6 w-[100px]' />
      </div>
      <div className='space-y-2'>
        <Skeleton className='h-4 w-[250px]' />
        <Skeleton className='h-4 w-[200px]' />
      </div>

      <div className='space-y-2 pt-5'>
        <Skeleton className='h-8 w-[150px] rounded-full' />
      </div>
    </div>
  );
};
