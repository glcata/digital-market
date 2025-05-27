import {Link} from 'react-router';
import {Minus, Plus, X} from 'lucide-react';
import {CartItem as CartItemType, removeFromCart, updateQuantity} from '@/common/store';
import {Button} from '@/common/components/@radix-ui/button';
import {useAppDispatch} from '@/common/hooks/useRedux';

interface CartItemProps {
    item: CartItemType;
}

const CartItem = ({item}: CartItemProps) => {
    const dispatch = useAppDispatch();
    const {game, quantity} = item;

    const handleRemove = () => {
        dispatch(removeFromCart(game.id));
    };

    const handleUpdateQuantity = (newQuantity: number) => {
        dispatch(updateQuantity({gameId: game.id, quantity: newQuantity}));
    };

    const price = game.discountedPrice || game.price;
    const totalPrice = price * quantity;

    return (
        <div className='flex py-4 border-b border-border'>
            <div className='h-16 w-20 flex-shrink-0 overflow-hidden rounded-md'>
                <img
                    src={game.coverImage}
                    alt={game.title}
                    className='h-full w-full object-cover object-center'
                />
            </div>
            <div className='ml-4 flex flex-1 flex-col'>
                <div className='flex justify-between text-base font-medium'>
                    <Link to={`/game/${game.id}`} className='hover:text-gaming-accent'>
                        <h3 className='text-sm'>{game.title}</h3>
                    </Link>
                    <Button
                        variant='ghost'
                        size='icon'
                        className='h-6 w-6'
                        onClick={handleRemove}
                    >
                        <X className='h-4 w-4' />
                    </Button>
                </div>
                <div className='flex items-center justify-between mt-2'>
                    <div className='flex items-center border border-border rounded-md'>
                        <Button
                            variant='ghost'
                            size='icon'
                            className='h-7 w-7 rounded-none'
                            onClick={() => handleUpdateQuantity(quantity - 1)}
                        >
                            <Minus className='h-3 w-3' />
                        </Button>
                        <span className='px-2 text-sm min-w-[1.5rem] text-center'>
                          {quantity}
                        </span>
                        <Button
                            variant='ghost'
                            size='icon'
                            className='h-7 w-7 rounded-none'
                            onClick={() => handleUpdateQuantity(quantity + 1)}
                        >
                            <Plus className='h-3 w-3' />
                        </Button>
                    </div>
                    <p className='text-sm font-medium'>${totalPrice.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
