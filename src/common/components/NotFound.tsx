import {Link, useLocation} from 'react-router';
import {useEffect} from 'react';
import Header from '@/common/components/Header';
import Footer from '@/common/components/Footer';

const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
        console.error(
            '404 Error: User attempted to access non-existent route:',
            location.pathname
        );
    }, [location.pathname]);

    return (
        <div className='min-h-screen flex flex-col bg-background'>
            <Header />
            <main className='flex-1 flex items-center justify-center'>
                <div className='container px-10 py-3'>
                    <div className='text-center'>
                        <h1 className='text-4xl font-bold mb-4'>404</h1>
                        <p className='text-xl text-gray-600 mb-4'>Page not found</p>
                        <p className='text-m text-gray-600 mb-4'>This app showcases a demo implementation of the UI
                            design by Catalin Glavan.</p>
                        <Link to='/store' className='text-primary-foreground hover:text-primary underline'>
                            Return to Home
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default NotFound;
