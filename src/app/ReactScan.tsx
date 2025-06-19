import React from 'react';

const ReactScan: React.FC = () => {
    const env = import.meta.env.VITE_APP_STAGE;

    return env === 'local' && <script async src='//unpkg.com/react-scan/dist/auto.global.js' />;
};

export default ReactScan;