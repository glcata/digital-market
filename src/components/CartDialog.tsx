import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {toast} from '@/hooks/use-toast';
import {ArrowRight, CheckCircle2, ShoppingCart} from 'lucide-react';
import {Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle,} from '@/components/ui/dialog';
import {Button} from '@/components/ui/button';
import CartItem from '@/components/CartItem';
import {clearCart} from '@/store/gameSlice';
import {RootState} from '@/App';

interface CartDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const CartDialog = ({open, onOpenChange}: CartDialogProps) => {
    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.game.cart);
    const [checkoutCompleted, setCheckoutCompleted] = useState(false);
    const [checkoutSuccess, setCheckoutSuccess] = useState(false);

    const subtotal = cart.reduce((sum, item) => {
        const price = item.game.discountedPrice || item.game.price;
        return sum + price * item.quantity;
    }, 0);

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleCheckout = () => {
        setCheckoutCompleted(true);

        setTimeout(() => {
            setCheckoutSuccess(true);
            dispatch(clearCart());

            toast({
                title: 'Order completed successfully!',
                description: `Your purchase of $${subtotal.toFixed(2)} has been processed.`,
            });

            setTimeout(() => {
                setCheckoutCompleted(false);
                setCheckoutSuccess(false);
                onOpenChange(false);
            }, 2000);
        }, 1500);
    };

    useEffect(() => {
        if (!open) {
            setCheckoutCompleted(false);
            setCheckoutSuccess(false);
        }
    }, [open]);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className='max-w-md max-h-[85vh] overflow-hidden flex flex-col'>
                <DialogHeader>
                    <DialogTitle className='flex items-center gap-2 text-xl'>
                        <ShoppingCart className='h-5 w-5' />
                        Shopping Cart {totalItems > 0 && `(${totalItems})`}
                    </DialogTitle>
                </DialogHeader>

                {checkoutCompleted ? (
                    <div className='flex flex-col items-center justify-center py-10 text-center'>
                        <CheckCircle2 className='h-16 w-16 text-gaming-DEFAULT mb-4' />
                        <h3 className='text-xl font-medium mb-2'>
                            {checkoutSuccess ? 'Order Completed!' : 'Processing your order...'}
                        </h3>
                        <p className='text-muted-foreground mb-4'>
                            {checkoutSuccess
                                ? 'Thank you for your purchase. Your games are now available in your library.'
                                : 'Please wait while we process your order...'}
                        </p>
                        {!checkoutSuccess && (
                            <div className='w-16 h-1 bg-muted overflow-hidden rounded-full'>
                                <div
                                    className='h-full bg-gaming-DEFAULT animate-pulse'
                                    style={{width: '100%'}}
                                />
                            </div>
                        )}
                    </div>
                ) : cart.length > 0 ? (
                    <>
                        <div className='overflow-y-auto flex-grow px-1 py-2 -mx-1'>
                            <div className='divide-y divide-border'>
                                {cart.map(item => (
                                    <CartItem key={item.game.id} item={item} />
                                ))}
                            </div>
                        </div>

                        <div className='mt-4'>
                            <div className='flex justify-between items-center text-base font-medium'>
                                <p>Subtotal</p>
                                <p>${subtotal.toFixed(2)}</p>
                            </div>
                            <p className='mt-1 text-sm text-muted-foreground'>
                                Shipping and taxes calculated at checkout
                            </p>
                        </div>

                        <DialogFooter className='flex flex-col gap-2 mt-4'>
                            <Button
                                onClick={handleCheckout}
                                className='w-full bg-gaming-DEFAULT hover:bg-gaming-DEFAULT/90'
                            >
                                Checkout <ArrowRight className='ml-2 h-4 w-4' />
                            </Button>

                            <div className='flex justify-between w-full'>
                                <Button
                                    variant='outline'
                                    size='sm'
                                    className='text-xs'
                                    onClick={handleClearCart}
                                >
                                    Clear Cart
                                </Button>

                                <DialogClose asChild>
                                    <Button variant='ghost' size='sm' className='text-xs'>
                                        Continue Shopping
                                    </Button>
                                </DialogClose>
                            </div>
                        </DialogFooter>
                    </>
                ) : (
                    <div className='flex flex-col items-center justify-center p-8 text-center'>
                        <ShoppingCart className='h-12 w-12 text-muted-foreground mb-2' />
                        <h3 className='text-lg font-medium mb-1'>Your cart is empty</h3>
                        <p className='text-muted-foreground'>
                            Looks like you haven't added any games to your cart yet.
                        </p>
                        <DialogClose asChild>
                            <Button className='mt-4'>
                                Continue Shopping
                            </Button>
                        </DialogClose>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default CartDialog;
