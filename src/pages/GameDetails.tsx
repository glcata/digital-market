import {useParams} from 'react-router';
import {useDispatch} from 'react-redux';
import {useGetGameByIdQuery} from '@/store/api';
import {addToCart} from '@/store/gameSlice';
import Header from '@/components/Header';
import GameHeader from '@/components/GameDetails/GameHeader';
import GameMedia from '@/components/GameDetails/GameMedia';
import GameInfo from '@/components/GameDetails/GameInfo';
import GamePurchase from '@/components/GameDetails/GamePurchase';
import GameSkeleton from '@/components/GameDetails/GameSkeleton';
import GameError from '@/components/GameDetails/GameError';
import {toast} from '@/hooks/use-toast';

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
            <Header />
            <div className='container px-4 py-8'>
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
                </div>
            </div>
        </div>
    );
};

export default GameDetails;
