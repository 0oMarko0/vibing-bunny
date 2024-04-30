import React from 'react';

export const Spotify: React.FC = () => {
    return (
        <div style={{ position: 'fixed', top: 0, width: '50%', marginTop: '50px' }}>
            <iframe
                src="https://open.spotify.com/embed/track/2bTvNKT8bxyyPhzHu4A2Wx?utm_source=generator&theme=0"
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
        </div>
    );
};
