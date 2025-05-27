import React from 'react';
import {Button} from '@/common/components/@radix-ui/button';
import {ChevronLeft, ChevronRight} from 'lucide-react';
import {useGames} from '@/common/hooks/useGames';
import {useAppDispatch, useAppSelector} from '@/common/hooks/useRedux';
import {Pagination, setPagination} from '@/common/store';

type PaginationProps = {
    hasActiveDetails?: boolean;
}

const GamePagination: React.FC<PaginationProps> = props => {
    const {hasActiveDetails = false} = props;
    const {games} = useGames();
    const pagination = useAppSelector<Pagination>(state => state.game.pagination);
    const dispatch = useAppDispatch();

    const totalPages = Math.ceil(games.length / pagination.gamesPerPage);

    const handlePageChange = (currentPage: number) => {
        const {gamesPerPage} = pagination;
        const startIndex = (currentPage - 1) * gamesPerPage;
        const endIndex = startIndex + gamesPerPage;

        dispatch(setPagination({currentPage, startIndex, endIndex, gamesPerPage}));
    }

    return (
        <>
            <div className='flex items-center justify-end'>
                {totalPages > 1 && (
                    <div className='flex items-center justify-center gap-2'>
                        <Button
                            variant='outline'
                            size='icon'
                            onClick={() => handlePageChange(pagination.currentPage - 1)}
                            disabled={pagination.currentPage === 1}
                        >
                            <ChevronLeft className='h-4 w-4' />
                        </Button>
                        {
                            Array.from({length: totalPages}, (_, i) => i + 1).map((page) => (
                                <Button
                                    key={page}
                                    variant={pagination.currentPage === page ? 'default' : 'outline'}
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
                            onClick={() => handlePageChange(pagination.currentPage + 1)}
                            disabled={pagination.currentPage === totalPages}
                        >
                            <ChevronRight className='h-4 w-4' />
                        </Button>
                    </div>
                )}
            </div>
            {hasActiveDetails && (
                <div className='text-center text-sm text-muted-foreground mt-4'>
                    Showing {pagination.startIndex + 1}-{Math.min(pagination.endIndex, games.length)} of {games.length} games
                </div>
            )}
        </>
    );
};

export default GamePagination;