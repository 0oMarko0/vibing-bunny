import React from 'react';
import Bunny from './Bunny';

export const App: React.FC = () => {
    const style = {
        margin: 0,
        padding: 0,
    };

    return (
        <div className="container-fluid" style={style}>
            <div className="container" style={style}>
                <Bunny />
            </div>
        </div>
    );
};

export default App;
