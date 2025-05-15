import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturedGames from '@/components/FeaturedGames';
import CategoryList from '@/components/CategoryList';

const Home = () => {
    return (
        <div className='min-h-screen flex flex-col bg-background'>
            <Header />

            <main className='flex-1'>
                <div className='container px-4 py-6'>
                    <FeaturedGames />
                    <CategoryList />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Home;
