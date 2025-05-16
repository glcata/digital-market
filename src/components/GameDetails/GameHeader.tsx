import React from 'react';
import {Link} from 'react-router';
import {Button} from '@/components/ui/button';
import {Separator} from '@/components/ui/separator';
import {ArrowLeft} from 'lucide-react';

interface GameHeaderProps {
    genres: string[];
}

const GameHeader = ({genres}: GameHeaderProps) => {
    return (
        <div className='flex items-center gap-2 mb-6'>
            <Button variant='ghost' size='sm' asChild>
                <Link to='/'><ArrowLeft className='h-4 w-4 mr-1' /> Back</Link>
            </Button>
            <Separator orientation='vertical' className='h-4' />
            <div className='flex gap-1 text-sm text-muted-foreground'>
                {genres.map((genre, index) => (
                    <React.Fragment key={genre}>
                        <span>{genre}</span>
                        {index < genres.length - 1 && <span>•</span>}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default GameHeader;
