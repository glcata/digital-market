import {Link} from 'react-router';
import {useGetCategoriesQuery} from '@/common/store/api';
import {Skeleton} from '@/common/components/@radix-ui/skeleton';
import {cn} from '@/common/lib/utils';
import {ArrowRight} from 'lucide-react';

const Categories = () => {
    const {data: categories, isLoading} = useGetCategoriesQuery();

    if (isLoading) {
        return (
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {Array(8).fill(0).map((_, i) => (
                    <Skeleton key={i} className='h-32 rounded-xl' />
                ))}
            </div>
        );
    }

    return (
        <div className='mt-12'>
            <div className='flex justify-between items-center mb-6'>
                <h2 className='text-2xl font-bold'>Categories</h2>
                <Link to='/categories' className='text-sm text-gaming-DEFAULT flex items-center hover:underline'>
                    View all <ArrowRight className='h-3.5 w-3.5 ml-1' />
                </Link>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {categories?.map((category) => (
                    <Link
                        key={category.id}
                        to={`/category/${category.slug}`}
                        className='relative overflow-hidden rounded-xl h-32 group card-hover-effect'
                    >
                        <img
                            src={category.image}
                            alt={category.name}
                            className='w-full h-full object-cover'
                        />
                        <div className={cn(
                            'absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/80 via-black/50 to-transparent',
                            'transition-all duration-300 group-hover:from-gaming-DEFAULT/80'
                        )}>
                            <h3 className='text-xl font-bold text-white'>{category.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Categories;
