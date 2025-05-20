import {Gamepad2} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='border-t border-border py-8'>
            <div className='container px-4'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='flex items-center space-x-2 mb-4 md:mb-0'>
                        <Gamepad2 className='h-6 w-6 text-gaming-DEFAULT' />
                        <span className='text-xl font-bold'>Digital Market</span>
                    </div>
                    <div className='flex flex-wrap justify-center gap-4 md:gap-8'>
                        <a href='#' className='text-sm hover:text-gaming-DEFAULT'>About</a>
                        <a href='#' className='text-sm hover:text-gaming-DEFAULT'>Support</a>
                        <a href='#' className='text-sm hover:text-gaming-DEFAULT'>Privacy</a>
                        <a href='#' className='text-sm hover:text-gaming-DEFAULT'>Terms</a>
                        <a href='#' className='text-sm hover:text-gaming-DEFAULT'>Contact</a>
                    </div>
                </div>
                <div className='mt-6 text-center text-sm text-muted-foreground'>
                    <strong>© Catalin Glavan {currentYear} | React Developer |
                        <a href='mailto:glmihaicata@gmail.com'> glmihaicata@gmail.com</a></strong> <br />
                    All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;