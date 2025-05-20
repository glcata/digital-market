import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';

interface GameMediaProps {
    coverImage: string;
    title: string;
    screenshots: string[];
}

const GameMedia = ({coverImage, title, screenshots}: GameMediaProps) => {
    return (
        <div className='rounded-xl overflow-hidden'>
            <Swiper
                modules={[Navigation]}
                navigation
                loop={true}
                className='w-full aspect-video'
            >
                <SwiperSlide>
                    <img src={coverImage} alt={title} className='w-full h-full object-cover' />
                </SwiperSlide>
                {screenshots.map((screenshot, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={screenshot}
                            alt={`${title} screenshot ${index + 1}`}
                            className='w-full h-full object-cover'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default GameMedia;
