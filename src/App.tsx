import React from 'react';
import Bunny from './Bunny';
import { Spotify } from './Spotify';

export const App: React.FC = () => {
    const style = {
        margin: 0,
        padding: 0,
    };

    return (
        <>
            <Bunny />
            <div>
                <Spotify />
            </div>
        </>
    );
};

export default App;
