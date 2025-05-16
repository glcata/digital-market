import {Badge} from '@/components/ui/badge';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {Game} from '@/lib/types';
import {Star} from 'lucide-react';

interface GameInfoProps {
    game: Game;
}

const GameInfo = ({game}: GameInfoProps) => {
    return (
        <div className='mt-6'>
            <h1 className='text-3xl font-bold mb-2'>{game.title}</h1>

            <div className='flex flex-wrap gap-2 mb-4'>
                {game.platforms.map((platform) => (
                    <Badge key={platform} variant='outline'>
                        {platform}
                    </Badge>
                ))}
            </div>

            <Tabs defaultValue='about' className='mt-6'>
                <TabsList className='grid grid-cols-3 mb-6'>
                    <TabsTrigger value='about'>About</TabsTrigger>
                    <TabsTrigger value='details'>Details</TabsTrigger>
                    <TabsTrigger value='system'>System Requirements</TabsTrigger>
                </TabsList>

                <TabsContent value='about' className='space-y-4'>
                    <p className='text-muted-foreground'>{game.description}</p>
                    <p className='text-muted-foreground'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit
                        arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
                        Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
                    </p>

                    <GameScreenshots screenshots={game.screenshots} title={game.title} />
                </TabsContent>

                <TabsContent value='details'>
                    <GameDetails game={game} />
                </TabsContent>

                <TabsContent value='system'>
                    <SystemRequirements />
                </TabsContent>
            </Tabs>
        </div>
    );
};

const GameScreenshots = ({screenshots, title}: { screenshots: string[], title: string }) => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-6'>
            {screenshots.map((screenshot, index) => (
                <div key={index} className='rounded-lg overflow-hidden'>
                    <img
                        src={screenshot}
                        alt={`${title} screenshot ${index + 1}`}
                        className='w-full aspect-video object-cover hover:scale-105 transition-transform duration-300'
                    />
                </div>
            ))}
        </div>
    );
};

const GameDetails = ({game}: { game: Game }) => {
    return (
        <div className='space-y-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                    <h3 className='text-sm font-medium text-muted-foreground'>Developer</h3>
                    <p className='text-base'>{game.developer}</p>
                </div>
                <div>
                    <h3 className='text-sm font-medium text-muted-foreground'>Publisher</h3>
                    <p className='text-base'>{game.publisher}</p>
                </div>
                <div>
                    <h3 className='text-sm font-medium text-muted-foreground'>Release Date</h3>
                    <p className='text-base'>{new Date(game.releaseDate).toLocaleDateString()}</p>
                </div>
                <div>
                    <h3 className='text-sm font-medium text-muted-foreground'>Rating</h3>
                    <div className='flex items-center'>
                        <span className='text-base mr-1.5'>{game.rating.toFixed(1)}</span>
                        <div className='flex'>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    className={`h-4 w-4 ${
                                        star <= Math.round(game.rating)
                                            ? 'text-yellow-500 fill-yellow-500'
                                            : 'text-muted-foreground'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h3 className='text-sm font-medium text-muted-foreground mb-2'>Tags</h3>
                <div className='flex flex-wrap gap-2'>
                    {game.tags.map((tag) => (
                        <Badge key={tag} variant='secondary'>{tag}</Badge>
                    ))}
                </div>
            </div>
        </div>
    );
};

const SystemRequirements = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
                <h3 className='text-lg font-semibold mb-4'>Minimum Requirements</h3>
                <ul className='space-y-2 text-muted-foreground'>
                    <li><span className='font-medium'>OS:</span> Windows 10 64-bit</li>
                    <li><span className='font-medium'>Processor:</span> Intel Core i5-4460 / AMD Ryzen 3 1200</li>
                    <li><span className='font-medium'>Memory:</span> 8 GB RAM</li>
                    <li><span className='font-medium'>Graphics:</span> NVIDIA GTX 960 / AMD Radeon R9 280</li>
                    <li><span className='font-medium'>Storage:</span> 50 GB available space</li>
                </ul>
            </div>
            <div>
                <h3 className='text-lg font-semibold mb-4'>Recommended Requirements</h3>
                <ul className='space-y-2 text-muted-foreground'>
                    <li><span className='font-medium'>OS:</span> Windows 10/11 64-bit</li>
                    <li><span className='font-medium'>Processor:</span> Intel Core i7-8700K / AMD Ryzen 5 3600X</li>
                    <li><span className='font-medium'>Memory:</span> 16 GB RAM</li>
                    <li><span className='font-medium'>Graphics:</span> NVIDIA RTX 2070 / AMD Radeon RX 5700 XT</li>
                    <li><span className='font-medium'>Storage:</span> 50 GB SSD</li>
                </ul>
            </div>
        </div>
    );
};

export default GameInfo;
