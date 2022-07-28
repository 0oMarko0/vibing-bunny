import React from 'react';

export const Spotify: React.FC = () => {
    return (
        <div style={{ position: 'absolute', top: 0, width: '100%', marginTop: '50px' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <iframe
                    style={{ borderRadius: '12px' }}
                    src="https://open.spotify.com/embed/track/6XS5Qi2wUMgj88QdBXx69B?utm_source=generator&theme=0"
                    width="40%"
                    height="80"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                />
            </div>
        </div>
    );
};
