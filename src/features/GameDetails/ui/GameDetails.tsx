import {useEffect} from 'react';
import {useParams} from 'react-router';
import {addToCart, useGetGameByIdQuery} from '@/common/store';
import {toast} from '@/common/hooks/useToast';
import Newsletter from '@/common/components/Newsletter';
import {
    GameError,
    GameHeader,
    GameInfo,
    GameMedia,
    GamePurchase,
    GameSkeleton
} from '@/features/GameDetails/components';
import {useAppDispatch} from '@/common/hooks/useRedux';

const GameDetails = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const {data: game, isLoading, error} = useGetGameByIdQuery(Number(id));

    useEffect(() => window.scrollTo({top: 0, behavior: 'smooth'}), []);

    const handleAddToCart = () => {
        if (game) {
            dispatch(addToCart(game));
            toast({
                title: 'Added to cart',
                description: `${game.title} has been added to your cart.`,
            });
        }
    };

    if (isLoading) return <GameSkeleton />;

    if (error || !game) return <GameError />;

    return (
        <div className='min-h-screen bg-background'>
            <GameHeader genres={game.genres} />

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <div className='lg:col-span-2'>
                    <GameMedia
                        coverImage={game.coverImage}
                        title={game.title}
                        screenshots={game.screenshots}
                    />
                    <GameInfo game={game} />
                </div>

                <GamePurchase game={game} onAddToCart={handleAddToCart} />
                <div className='lg:col-span-2 hidden sm:block'>
                    <Newsletter />
                </div>
            </div>
        </div>
    );
};

export default GameDetails;
