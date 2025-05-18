import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GameLibrary from '@/components/GameLibrary';

const Home = () => {
    return (
        <div className='min-h-screen flex flex-col bg-background'>
            <Header />
            <main className='flex-1'>
                <div className='container px-10 py-3'>
                    <GameLibrary />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
