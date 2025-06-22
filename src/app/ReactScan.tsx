import React from 'react';

const ReactScan: React.FC = () => {
    const {MODE} = import.meta.env;

    return MODE === 'dev' && <script async src='//unpkg.com/react-scan/dist/auto.global.js' />;
};

export default ReactScan;