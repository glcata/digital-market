import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturedGames from '@/components/FeaturedGames';

const Home = () => {
    return (
        <div className='min-h-screen flex flex-col bg-background'>
            <Header />

            <main className='flex-1'>
                <div className='container px-4 py-6'>
                    <FeaturedGames />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Home;
