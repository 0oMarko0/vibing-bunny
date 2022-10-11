import React from 'react';
import bunny from './assets/bunny-rabbit.gif';

export const Bunny: React.FC = () => {
    const nbRow = 8;
    const nbBunny = 8;
    const style = {
        margin: 0,
        padding: 0,
    };

    return (
        <div className="container" style={style}>
            {[...Array(nbRow)].map((e, i) => (
                <div key={i} className="grid" style={{ gridColumnGap: 0 }}>
                    {[...Array(nbBunny)].map((b, j) => (
                        <img key={`${i}-${j}`} src={bunny} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Bunny;
