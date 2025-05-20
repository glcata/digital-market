import {useEffect, useState} from 'react';

export const useMediaQuery = (query: string) => {
    const [value, setValue] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        const listener = () => setValue(media.matches);

        setValue(media.matches);

        media.addEventListener('change', listener);

        return () => media.removeEventListener('change', listener);
    }, [query])

    return value;
};