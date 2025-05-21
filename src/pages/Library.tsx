import {useState} from 'react';
import {Button} from '@/common/components/@radix-ui/button';
import {Input} from '@/common/components/@radix-ui/input';
import {Tabs, TabsList, TabsTrigger} from '@/common/components/@radix-ui/tabs';
import {LayoutGrid, LayoutList, Search, SlidersHorizontal, X} from 'lucide-react';
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
import {SortOptions} from '@/common/store/gameSlice';
import {useGames} from '@/common/hooks/useGames';
import GamePagination from '@/common/components/GamePagination';

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

const INITIAL_VIEW_MODE = 'grid';

const Library = () => {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>(INITIAL_VIEW_MODE);
    const {
        gamesPaged,
        isLoading,
        searchQuery,
        selectedPlatforms,
        selectedGenres,
        sortBy,
        togglePlatform,
        toggleGenre,
        toggleSortBy,
        handleResetFilters,
        handleSearchChange
    } = useGames();

    const hasActiveFilters = selectedPlatforms.length > 0 || selectedGenres.length > 0 || sortBy !== 'relevance';

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
            <div className='mb-4'><GamePagination /></div>
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
            ) : gamesPaged.length > 0 ? (
                <>
                    <div className={viewMode === 'grid'
                        ? `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5`
                        : `flex flex-col gap-4`
                    }>
                        {gamesPaged.map((game) => (
                            <GameCard
                                key={game.id}
                                game={game}
                                className={viewMode === 'list' ? 'flex flex-row h-32' : ''}
                            />
                        ))}
                    </div>
                    <div className='mt-4'><GamePagination hasActiveDetails /></div>
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
