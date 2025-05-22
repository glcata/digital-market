import React, {useEffect} from 'react';
import {useLocation} from 'react-router';
/*
    This component tracks route changes and sends the data to Vercel Speed Insights.
 */
const RouteChangeTracker: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        if (typeof window !== 'undefined' && window.__VERCEL_INSIGHTS__)
            window.__VERCEL_INSIGHTS__.routeChange(location.pathname);

    }, [location]);

    return null;
};

export default RouteChangeTracker;