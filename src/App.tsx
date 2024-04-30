import React from 'react';
import Bunny from './Bunny';
import { Spotify } from './Spotify';

export const App: React.FC = () => {
    return (
        <>
            <Bunny />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Spotify />
            </div>
        </>
    );
};

export default App;
