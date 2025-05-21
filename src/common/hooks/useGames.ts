import {useGetGamesQuery} from '@/common/store/api';
import {useDispatch, useSelector} from 'react-redux';
import {IRootState} from '@/app/ReduxStoreConfig';
import {
    resetFilters,
    setSearchQuery,
    setSelectedGenres,
    setSelectedPlatforms,
    setSortBy,
    SortOptions
} from '@/common/store/gameSlice';
import {Game} from '@/common/lib/types';

export const useGames = () => {
    const {data: games, isLoading} = useGetGamesQuery();

    const searchQuery = useSelector<IRootState, string>((state) => state.game.searchQuery);
    const selectedPlatforms = useSelector<IRootState, string[]>((state) => state.game.selectedFilters.platforms);
    const selectedGenres = useSelector<IRootState, string[]>(state => state.game.selectedFilters.genres);
    const sortBy = useSelector<IRootState, SortOptions>((state) => state.game.sortBy);
    const dispatch = useDispatch();

    const togglePlatform = (platform: string) =>
        dispatch(setSelectedPlatforms(platform));

    const toggleGenre = (genre: string) =>
        dispatch(setSelectedGenres(genre));

    const toggleSortBy = (value: SortOptions) =>
        dispatch(setSortBy(value))

    const handleResetFilters = (andSearch: boolean = false) => {
        dispatch(resetFilters(andSearch));
    };

    const handleSearchChange = (searchValue: string) =>
        dispatch(setSearchQuery(searchValue));

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

    return {
        isLoading,
        games: sortedGames,
        searchQuery,
        selectedPlatforms,
        selectedGenres,
        sortBy,
        togglePlatform,
        toggleGenre,
        toggleSortBy,
        handleResetFilters,
        handleSearchChange
    }
}