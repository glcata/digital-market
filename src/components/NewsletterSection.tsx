import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Gamepad2} from 'lucide-react';

const NewsLetterSection = () => {
    return (
        <>
            <div className='mt-16 mb-8 bg-muted/50 rounded-xl p-8 text-center'>
                <div className='max-w-3xl mx-auto'>
                    <Gamepad2 className='h-12 w-12 text-gaming-DEFAULT mx-auto mb-4' />
                    <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                        Stay Updated with Gaming News
                    </h2>
                    <p className='text-muted-foreground mb-6'>
                        Subscribe to our newsletter and never miss new game releases, exclusive offers, and gaming tips.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-3 max-w-md mx-auto'>
                        <Input type='email' placeholder='Enter your email' />
                        <Button variant='link'>Subscribe</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsLetterSection;