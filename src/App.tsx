import Header from '@/common/components/Header';
import Footer from '@/common/components/Footer';
import '@/app/app.css';
import {Outlet} from 'react-router';

const App = () => (
    <div className='min-h-screen flex flex-col bg-background'>
        <Header />
        <main className='flex-1'>
            <div className='container px-10 py-3'>
                <Outlet />
            </div>
        </main>
        <Footer />
    </div>
);

export default App;