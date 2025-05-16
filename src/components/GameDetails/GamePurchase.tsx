import {Button} from '@/components/ui/button';
import {Badge} from '@/components/ui/badge';
import {Game} from '@/lib/types';
import {ShoppingCart} from 'lucide-react';

interface GamePurchaseProps {
    game: Game;
    onAddToCart: () => void;
}

const GamePurchase = ({game, onAddToCart}: GamePurchaseProps) => {
    const hasDiscount = game.discountedPrice && game.discountedPrice < game.price;
    const discountPercentage = hasDiscount
        ? Math.round(((game.price - game.discountedPrice!) / game.price) * 100)
        : 0;

    return (
        <div className='bg-card rounded-xl p-6 sticky top-20 h-fit'>
            <div className='aspect-[3/4] rounded-lg overflow-hidden mb-6'>
                <img src={game.coverImage} alt={game.title} className='w-full h-full object-cover' />
            </div>

            <div className='flex items-baseline gap-3 mb-4'>
                {hasDiscount ? (
                    <>
                        <span
                            className='text-2xl font-bold text-gaming-DEFAULT'>${game.discountedPrice!.toFixed(2)}</span>
                        <span className='text-lg text-muted-foreground line-through'>${game.price.toFixed(2)}</span>
                        <Badge className='bg-gaming-accent text-white'>-{discountPercentage}%</Badge>
                    </>
                ) : (
                    <span className='text-2xl font-bold'>${game.price.toFixed(2)}</span>
                )}
            </div>

            <Button
                className='w-full bg-gaming-DEFAULT hover:bg-gaming-dark/70 mb-3'
                variant='outline'
                onClick={onAddToCart}
            >
                <ShoppingCart className='h-4 w-4' />Add to Cart
            </Button>

            <Button variant='outline' className='w-full'>Buy Now</Button>

            <PurchaseInfo />
        </div>
    );
};

const PurchaseInfo = () => {
    return (
        <div className='mt-6 text-sm text-muted-foreground'>
            <p className='flex items-center gap-1.5 mb-2'>
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none'
                     stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'
                     className='text-gaming-DEFAULT'>
                    <rect width='20' height='16' x='2' y='4' rx='2' />
                    <path d='M6 8h.01' />
                    <path d='M18 8h.01' />
                    <path d='M12 8h.01' />
                    <path d='M12 12h.01' />
                    <path d='M6 12h.01' />
                    <path d='M18 12h.01' />
                    <path d='M12 16h.01' />
                    <path d='M6 16h.01' />
                    <path d='M18 16h.01' />
                </svg>
                Activation: Steam
            </p>
            <p className='flex items-center gap-1.5 mb-2'>
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none'
                     stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'
                     className='text-gaming-DEFAULT'>
                    <polygon points='5 3 19 12 5 21' />
                </svg>
                Instant delivery
            </p>
            <p className='flex items-center gap-1.5'>
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none'
                     stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'
                     className='text-gaming-DEFAULT'>
                    <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z' />
                    <path d='m9 12 2 2 4-4' />
                </svg>
                Secure payment
            </p>
        </div>
    );
};

export default GamePurchase;
