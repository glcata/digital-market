import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import {Button} from '@/components/ui/button';
import {Link} from 'react-router';
import {useGetFeaturedGamesQuery} from '@/store/api';
import {Skeleton} from '@/components/ui/skeleton';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './FeaturedGames.css';

const FeaturedGames = () => {
    const {data: featuredGames, isLoading, error} = useGetFeaturedGamesQuery();

    if (isLoading) {
        return (
            <div className='w-full h-[500px] rounded-xl overflow-hidden'>
                <Skeleton className='w-full h-full' />
            </div>
        );
    }

    if (error || !featuredGames?.length) {
        return (
            <div className='w-full h-[400px] flex items-center justify-center bg-muted rounded-xl'>
                <p>Failed to load featured games</p>
            </div>
        );
    }

    return (
        <div className='w-full relative rounded-xl overflow-hidden select-none'>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{clickable: true}}
                autoplay={{delay: 5000, disableOnInteraction: true}}
                loop={true}
                className='h-[500px] md:h-[500px] w-full'
            >
                {featuredGames.map((game) => (
                    <SwiperSlide key={game.id} className='relative w-full h-full'>
                        <img
                            src={game.coverImage}
                            alt={game.title}
                            className='w-full h-full object-cover'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent' />
                        <div className='absolute bottom-0 left-0 w-full p-12'>
                            <h2 className='text-3xl md:text-5xl font-bold text-white mb-2'>{game.title}</h2>
                            <p className='md:text-lg text-white/80 mb-6 max-w-2xl line-clamp-2'>
                                {game.description}
                            </p>
                            <div className='flex flex-wrap gap-2 mb-6'>
                                {game.genres.map(
                                    (genre) => (
                                        <span key={genre}
                                              className='px-3 py-1 bg-white/10 rounded-full text-white text-sm'>
                                                {genre}
                                        </span>
                                    )
                                )}
                            </div>
                            <div className='flex flex-wrap gap-4'>
                                <Button asChild className='bg-gaming-DEFAULT hover:bg-gaming-DEFAULT/90'>
                                    <Link to={`/game/${game.id}`}>
                                        {game.discountedPrice ? (
                                            <>Buy Now ${game.discountedPrice.toFixed(2)}</>
                                        ) : (
                                            <>Buy Now ${game.price.toFixed(2)}</>
                                        )}
                                    </Link>
                                </Button>
                                <Button variant='outline'
                                        className='border-white/30 text-white hover:bg-white/10 hover:text-white'
                                        asChild>
                                    <Link to={`/game/${game.id}`}>Learn More</Link>
                                </Button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default FeaturedGames;
