import {Link} from 'react-router';
import {Button} from '@/components/ui/button';
import {Skeleton} from '@/components/ui/skeleton';
import Header from '@/components/Header';
import {ArrowLeft} from 'lucide-react';

const GameSkeleton = () => {
    return (
        <div className='min-h-screen bg-background'>
            <Header />
            <div className='container px-4 py-8'>
                <div className='flex items-center gap-2 mb-6'>
                    <Button variant='ghost' size='sm' asChild>
                        <Link to='/'><ArrowLeft className='h-4 w-4 mr-1' /> Back</Link>
                    </Button>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    <div className='lg:col-span-2'>
                        <Skeleton className='w-full aspect-video rounded-xl' />
                        <div className='mt-6 space-y-4'>
                            <Skeleton className='h-8 w-3/4' />
                            <Skeleton className='h-4 w-full' />
                            <Skeleton className='h-4 w-full' />
                            <Skeleton className='h-4 w-2/3' />
                        </div>
                    </div>

                    <div className='bg-card rounded-xl p-6 h-fit'>
                        <Skeleton className='h-40 w-full rounded-lg mb-6' />
                        <Skeleton className='h-8 w-full mb-4' />
                        <Skeleton className='h-10 w-full' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameSkeleton;
