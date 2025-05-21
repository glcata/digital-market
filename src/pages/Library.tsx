import {useEffect, useState} from 'react';
import {useGetGamesQuery} from '@/common/store/api';
import {Button} from '@/common/components/@radix-ui/button';
import {Input} from '@/common/components/@radix-ui/input';
import {Tabs, TabsList, TabsTrigger} from '@/common/components/@radix-ui/tabs';
import {Game} from '@/common/lib/types';
import {ChevronLeft, ChevronRight, LayoutGrid, LayoutList, Search, SlidersHorizontal, X} from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/common/components/@radix-ui/sheet';
import {Checkbox} from '@/common/components/@radix-ui/checkbox';
import {Label} from '@/common/components/@radix-ui/label';
import {Skeleton} from '@/common/components/@radix-ui/skeleton';
import GameCard from '@/common/components/GameCard';
import {useDispatch, useSelector} from 'react-redux';
import {
    resetFilters,
    setSearchQuery,
    setSelectedGenres,
    setSelectedPlatforms,
    setSortBy,
    SortOptions
} from '@/common/store/gameSlice';
import {IRootState} from '@/app/ReduxStoreConfig';

const PLATFORMS = ['PC', 'PlayStation', 'Xbox', 'Nintendo'];
const GENRES = ['Action', 'Adventure', 'RPG', 'Strategy', 'Sports', 'Simulation', 'Racing'];
const SORT_OPTIONS = {
    byAudience: [
        {label: 'Relevance', value: 'relevance'},
        {label: 'Newest', value: 'new'},
        {label: 'Highest Rating', value: 'rating'}
    ],
    byPrice: [
        {label: 'Price: Low to High', value: 'price-low'},
        {label: 'Price: High to Low', value: 'price-high'}
    ]
};

const GAMES_PER_PAGE = 12;
const INITIAL_VIEW_MODE = 'grid';

const Library = () => {
    const {data: games, isLoading} = useGetGamesQuery();
    const [viewMode, setViewMode] = useState<'grid' | 'list'>(INITIAL_VIEW_MODE);
    const [currentPage, setCurrentPage] = useState(1);
    const searchQuery = useSelector<IRootState, string>((state) => state.game.searchQuery);
    const selectedPlatforms = useSelector<IRootState, string[]>((state) => state.game.selectedFilters.platforms);
    const selectedGenres = useSelector<IRootState, string[]>(state => state.game.selectedFilters.genres);
    const sortBy = useSelector<IRootState, SortOptions>((state) => state.game.sortBy);
    const dispatch = useDispatch();

    useEffect(() => {
        setCurrentPage(1);

        console.log('selectedGenres', selectedGenres);

    }, [searchQuery, selectedPlatforms, selectedGenres, sortBy]);

    const togglePlatform = (platform: string) => {
        dispatch(setSelectedPlatforms(platform));
    };

    const toggleGenre = (genre: string) => {
        dispatch(setSelectedGenres(genre));
    };

    const toggleSortBy = (value: SortOptions) => {
        dispatch(setSortBy(value));
    }

    const handleResetFilters = (andSearch: boolean = false) => {
        dispatch(resetFilters(andSearch));
    };

    const filteredGames = games?.filter(
        (game: Game) => {
            if (searchQuery && !game.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;

            if (selectedPlatforms.length > 0 && !game.platforms.some(platform => selectedPlatforms.includes(platform))) return false;

            return !(selectedGenres.length > 0 && !game.genres.some(genre => selectedGenres.includes(genre)));
        }) ?? [];

    const sortedGames = [...filteredGames].sort((a, b) => {
        switch (sortBy) {
            case 'rating':
                return b.rating - a.rating;
            case 'price-low':
                return (a.discountedPrice ?? a.price) - (b.discountedPrice ?? b.price);
            case 'price-high':
                return (b.discountedPrice ?? b.price) - (a.discountedPrice ?? a.price);
            case 'new':
                return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
            default:
                return 0;
        }
    });

    const hasActiveFilters = selectedPlatforms.length > 0 || selectedGenres.length > 0 || sortBy !== 'relevance';

    const totalPages = Math.ceil(sortedGames.length / GAMES_PER_PAGE);
    const startIndex = (currentPage - 1) * GAMES_PER_PAGE;
    const endIndex = startIndex + GAMES_PER_PAGE;
    const currentGames = sortedGames.slice(startIndex, endIndex);

    const handlePageChange = (newPage: number) => setCurrentPage(newPage);
    const handleSearchChange = (searchValue: string) => dispatch(setSearchQuery(searchValue));

    const pagination = () => (
        <div className='flex items-center justify-end'>
            {totalPages > 1 && (
                <div className='flex items-center justify-center gap-2'>
                    <Button
                        variant='outline'
                        size='icon'
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <ChevronLeft className='h-4 w-4' />
                    </Button>
                    {
                        Array.from({length: totalPages}, (_, i) => i + 1).map((page) => (
                            <Button
                                key={page}
                                variant={currentPage === page ? 'default' : 'outline'}
                                size='icon'
                                onClick={() => handlePageChange(page)}
                                className='w-8 h-8'
                            >
                                {page}
                            </Button>
                        ))
                    }
                    <Button
                        variant='outline'
                        size='icon'
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        <ChevronRight className='h-4 w-4' />
                    </Button>
                </div>
            )}
        </div>
    );

    return (
        <div className='w-full mt-8'>
            <div className='flex flex-wrap items-center justify-between gap-4 mb-6'>
                <h2 className='text-2xl font-bold'>Browse Games</h2>
                <div className='flex items-center gap-4'>
                    <div className='relative max-w-sm'>
                        <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
                        <Input
                            type='search'
                            placeholder='Search games...'
                            className='pl-8'
                            value={searchQuery}
                            onChange={(e) => handleSearchChange(e.target.value)}
                        />
                    </div>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant='outline' className='flex items-center gap-2'>
                                <SlidersHorizontal className='h-4 w-4' />
                                <span>Filters</span>
                                {
                                    hasActiveFilters && (
                                        <span
                                            className='ml-1 h-4 w-4 rounded-full bg-gaming-DEFAULT flex items-center justify-center text-[10px] text-white'>
                                            {selectedPlatforms.length + selectedGenres.length + (sortBy !== 'relevance' ? 1 : 0)}
                                        </span>
                                    )}
                            </Button>
                        </SheetTrigger>
                        <SheetContent className='overflow-y-auto'>
                            <SheetHeader>
                                <SheetTitle>Filter Games</SheetTitle>
                                <SheetDescription>Customize your game browsing experience</SheetDescription>
                            </SheetHeader>
                            <div className='flex justify-between items-center py-4 border-b'>
                                <h3 className='font-semibold'>Filters</h3>
                                <Button variant='ghost' size='sm' onClick={() => handleResetFilters()} className='h-8'>
                                    <X className='h-3.5 w-3.5 mr-1' /> Reset
                                </Button>
                            </div>
                            <div className='py-4 border-b'>
                                <h3 className='font-medium mb-3'>Platforms</h3>
                                <div className='space-y-2'>
                                    {PLATFORMS.map((platform) => (
                                        <div key={platform} className='flex items-center space-x-2'>
                                            <Checkbox
                                                id={`platform-${platform}`}
                                                checked={selectedPlatforms.includes(platform)}
                                                onCheckedChange={() => togglePlatform(platform)}
                                            />
                                            <Label
                                                htmlFor={`platform-${platform}`}
                                                className='text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                                            >
                                                {platform}
                                            </Label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='py-4 border-b'>
                                <h3 className='font-medium mb-3'>Genres</h3>
                                <div className='space-y-2'>
                                    {GENRES.map((genre) => (
                                        <div key={genre} className='flex items-center space-x-2'>
                                            <Checkbox
                                                id={`genre-${genre}`}
                                                checked={selectedGenres.includes(genre)}
                                                onCheckedChange={() => toggleGenre(genre)}
                                            />
                                            <Label
                                                htmlFor={`genre-${genre}`}
                                                className='text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                                            >
                                                {genre}
                                            </Label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='py-4'>
                                <h3 className='font-medium mb-3'>Sort By</h3>
                                <Tabs defaultValue={sortBy}
                                      onValueChange={(value: string) => toggleSortBy(value as SortOptions)}>
                                    <TabsList className='w-full flex flex-nowrap mb-2'>
                                        {SORT_OPTIONS.byAudience.map((option) => (
                                            <TabsTrigger
                                                key={option.value}
                                                value={option.value}
                                                className='flex-1'
                                            >
                                                {option.label}
                                            </TabsTrigger>
                                        ))}
                                    </TabsList>
                                    <TabsList className='w-full flex flex-nowrap'>
                                        {SORT_OPTIONS.byPrice.map((option) => (
                                            <TabsTrigger
                                                key={option.value}
                                                value={option.value}
                                                className='flex-1'
                                            >
                                                {option.label}
                                            </TabsTrigger>
                                        ))}
                                    </TabsList>
                                </Tabs>
                            </div>
                        </SheetContent>
                    </Sheet>
                    <div className='flex border rounded-md overflow-hidden'>
                        <Button
                            variant={viewMode === 'grid' ? 'default' : 'ghost'}
                            size='icon'
                            onClick={() => setViewMode('grid')}
                            className='rounded-none'
                        >
                            <LayoutGrid className='h-4 w-4' />
                        </Button>
                        <Button
                            variant={viewMode === 'list' ? 'default' : 'ghost'}
                            size='icon'
                            onClick={() => setViewMode('list')}
                            className='rounded-none'
                        >
                            <LayoutList className='h-4 w-4' />
                        </Button>
                    </div>
                </div>
            </div>
            <div className='mb-4'>{pagination()}</div>
            {isLoading ? (
                <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6`}>
                    {Array(8).fill(0).map((_, i) => (
                        <div key={i} className='game-card'>
                            <Skeleton className='game-card-image' />
                            <div className='p-4 space-y-2'>
                                <Skeleton className='h-6 w-3/4' />
                                <Skeleton className='h-4 w-1/2' />
                                <div className='flex justify-between'>
                                    <Skeleton className='h-5 w-16' />
                                    <Skeleton className='h-5 w-10' />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : sortedGames.length > 0 ? (
                <>
                    <div className={viewMode === 'grid'
                        ? `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5`
                        : `flex flex-col gap-4`
                    }>
                        {currentGames.map((game) => (
                            <GameCard
                                key={game.id}
                                game={game}
                                className={viewMode === 'list' ? 'flex flex-row h-32' : ''}
                            />
                        ))}
                    </div>
                    <div className='mt-4'>{pagination()}</div>
                    <div className='text-center text-sm text-muted-foreground mt-4'>
                        Showing {startIndex + 1}-{Math.min(endIndex, sortedGames.length)} of {sortedGames.length} games
                    </div>
                </>
            ) : (
                <div className='flex flex-col items-center justify-center py-12 text-center'>
                    <h3 className='text-xl font-semibold mb-2'>No games found</h3>
                    <p className='text-muted-foreground mb-4'>
                        Try changing your search terms or filters
                    </p>
                    <Button variant='outline' onClick={() => handleResetFilters(true)}>
                        Reset Filters & Search
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Library;
