import {Gamepad2} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear(),
        appVersion = import.meta.env.VITE_APP_VERSION;

    return (
        <footer className='border-t border-border py-8'>
            <div className='container px-4'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='flex items-center space-x-2 mb-4 md:mb-0'>
                        <Gamepad2 className='h-6 w-6 game-text-primary' />
                        <span className='text-xl font-bold'>Digital Market</span>
                        <span className='text-xs font-bold text-primary'>v{appVersion}</span>
                    </div>
                    <div className='flex flex-wrap justify-center gap-4 md:gap-8'>
                        <a href='#' className='text-sm hover:game-text-primary'>About</a>
                        <a href='#' className='text-sm hover:game-text-primary'>Support</a>
                        <a href='#' className='text-sm hover:game-text-primary'>Privacy</a>
                        <a href='#' className='text-sm hover:game-text-primary'>Terms</a>
                        <a href='#' className='text-sm hover:game-text-primary'>Contact</a>
                    </div>
                </div>
                <div className='mt-6 text-center text-sm text-muted-foreground'>
                    <strong>© <a href='https://linkedin.com/in/catalin-glavan' className='game-text-primary'>Catalin Glavan</a> {currentYear} | React Developer |
                        <a href='mailto:glmihaicata@gmail.com' className='game-text-primary-reverse'> glmihaicata@gmail.com</a></strong> <br />
                    All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;