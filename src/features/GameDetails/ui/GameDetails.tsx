import {useParams} from 'react-router';
import {useDispatch} from 'react-redux';
import {useGetGameByIdQuery} from '@/common/store/api';
import {addToCart} from '@/common/store/gameSlice';
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

const GameDetails = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {data: game, isLoading, error} = useGetGameByIdQuery(Number(id));

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
