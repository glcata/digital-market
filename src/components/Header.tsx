import {useState} from 'react';
import {Link} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {Gamepad2, Menu, Search, ShoppingCart, User} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import {useMediaQuery} from '@/hooks/use-media-query';
import CartDialog from '@/components/CartDialog';
import {IRootState} from '@/App';
import {setSearchQuery} from '@/store/gameSlice';

const Header = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const searchQuery = useSelector<IRootState, string>(state => state.game.searchQuery);
    const cart = useSelector((state: IRootState) => state.game.cart);
    const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const dispatch = useDispatch();

    const navLinks = [
        {name: 'Store', path: '/'},
        {name: 'Categories', path: '/categories'},
        {name: 'Library', path: '/library'},
        {name: 'Community', path: '/community'},
        {name: 'Support', path: '/support'},
    ];

    const handleSearchChange = (searchValue: string) => dispatch(setSearchQuery(searchValue));

    return (
        <header
            className='sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border'>
            <div className='container px-10 flex h-16 items-center justify-between'>
                <div className='flex items-center gap-6'>
                    <Link to='/' className='flex items-center space-x-2'>
                        <Gamepad2 className='h-6 w-6 text-gaming-DEFAULT' />
                        <span className='text-xl font-bold hover:text-primary transition'>CrowdByte</span>
                    </Link>
                    {!isMobile && (
                        <nav className='hidden md:flex items-center space-x-6'>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className='text-sm font-medium transition-colors hover:text-primary'
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    )}
                </div>
                <div className='flex items-center flex-shrink-0 space-x-3 ml-6'>
                    {!isMobile && (
                        <div className='relative w-full max-w-sm'>
                            <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
                            <Input
                                type='search'
                                placeholder='Search games...'
                                className='pl-8 bg-muted/50 border-0'
                                value={searchQuery}
                                onChange={(e) => handleSearchChange(e.target.value)}
                            />
                        </div>
                    )}
                    <Button
                        variant='ghost'
                        size='sm'
                        className='relative'
                        onClick={() => setCartOpen(true)}
                    >
                        <ShoppingCart className='h-5 w-5' />
                        {cartItemCount > 0 && (
                            <span
                                className='absolute -top-0.5 -right-0 h-4 w-4 rounded-full bg-gaming-DEFAULT flex items-center justify-center text-[10px] font-bold'>
                                {cartItemCount > 9 ? '9+' : cartItemCount}
                            </span>
                        )}
                    </Button>
                    <Button variant='ghost' size='sm'>
                        <User className='h-4 w-4' />
                    </Button>
                    {isMobile && (
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant='ghost' size='icon'>
                                    <Menu className='h-5 w-5' />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side='right' className='w-[80%] sm:w-[350px]'>
                                <nav className='flex flex-col items-center space-y-4 mt-8'>
                                    <div className='relative w-full mb-6'>
                                        <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
                                        <Input
                                            type='search'
                                            placeholder='Search games...'
                                            className='pl-8 bg-muted/50 border-0'
                                            value={searchQuery}
                                            onChange={(e) => handleSearchChange(e.target.value)}
                                        />
                                    </div>
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            to={link.path}
                                            className='text-base font-medium transition-colors hover:text-primary py-2'
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    )}
                    <CartDialog
                        open={cartOpen}
                        onOpenChange={setCartOpen}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
