import {Link} from 'react-router';
import {Game} from '@/lib/types';
import {Badge} from '@/components/ui/badge';
import {cn} from '@/lib/utils';

interface GameCardProps {
    game: Game;
    className?: string;
}

const GameCard = ({game, className}: GameCardProps) => {
    const hasDiscount = game.discountedPrice && game.discountedPrice < game.price;
    const discountPercentage = hasDiscount
        ? Math.round(((game.price - game.discountedPrice!) / game.price) * 100)
        : 0;

    return (
        <Link to={`/game/${game.id}`} className={cn('game-card group', className)}>
            <div className='relative'>
                <img
                    src={game.coverImage}
                    alt={game.title}
                    className={`w-full object-cover ${!className?.includes('flex') ? 'aspect-[16/9]' : 'aspect-square md:aspect-[16/9]'}`}
                />
                <div className='game-card-gradient'></div>
                <div className='absolute top-2 left-2 sm:flex gap-1 hidden'>
                    {game.platforms.map((platform) => (
                        <Badge key={platform} variant='secondary' className='bg-black/60 hover:bg-black/60'>
                            {platform === 'PlayStation' ? 'PS5' :
                                platform === 'Nintendo' ? 'Switch' : platform}
                        </Badge>
                    ))}
                </div>
                {
                    hasDiscount && (
                        <div className='absolute top-2 right-2'>
                            <Badge className='bg-gaming-accent text-white'>-{discountPercentage}%</Badge>
                        </div>)
                }
            </div>
            <div className='p-4 min-w-60'>
                <h3 className='font-bold text-lg line-clamp-1 group-hover:text-gaming-DEFAULT transition-colors'>
                    {game.title}
                </h3>
                <div className='flex flex-wrap gap-1 mt-1.5 mb-2.5'>
                    {
                        game.genres.slice(0, 2).map(
                            (genre) => (
                                <span key={genre} className='text-xs px-2 py-0.5 bg-muted rounded-full'>{genre}</span>
                            )
                        )
                    }
                    {
                        game.genres.length > 2 && (
                            <span className='text-xs px-2 py-0.5 bg-muted rounded-full'>+{game.genres.length - 2}</span>)
                    }
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex items-baseline gap-2'>
                        <span
                            className={cn('font-bold', hasDiscount ? 'text-muted-foreground line-through text-sm' : 'text-base')}>
                            ${game.price.toFixed(2)}
                        </span>
                        {
                            hasDiscount && (
                                <span className='font-bold text-gaming-DEFAULT'>${game.discountedPrice!.toFixed(2)}</span>)
                        }
                    </div>
                    <div className='flex items-center'>
                        <span className='text-sm font-bold mr-1'>
                            {game.rating.toFixed(1)}
                        </span>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            className='w-4 h-4 text-yellow-500'>
                            <path fillRule='evenodd'
                                  d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                                  clipRule='evenodd' />
                        </svg>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default GameCard;
