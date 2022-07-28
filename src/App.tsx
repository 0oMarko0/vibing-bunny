import React from 'react';
import Bunny from './Bunny';
import { Spotify } from './Spotify';

export const App: React.FC = () => {
    return (
        <div className="container-fluid">
            <Spotify />
            <div className="container">
                <Bunny />
            </div>
        </div>
    );
};

export default App;
