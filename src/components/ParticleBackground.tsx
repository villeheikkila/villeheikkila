/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import Particles from 'react-particles-js';

const ParticleBackground = () => {
    const isBrowser = typeof window !== undefined;

    if (!isBrowser) return null;

    return (
        <Particles
            params={{
                particles: {
                    number: {
                        value: 20,
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                    },
                    color: {
                        value: '#303346',
                    },
                    shape: {
                        type: 'polygon',
                        polygon: {
                            nb_sides: 5,
                        },
                    },
                    opacity: {
                        value: 0.5,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 0.3,
                            opacity_min: 0.1,
                            sync: false,
                        },
                    },
                    size: {
                        value: 30,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 0.1,
                            size_min: 20,
                            sync: false,
                        },
                    },
                    line_linked: {
                        enable: true,
                        distance: 100,
                        color: '#ffffff',
                        opacity: 1,
                        width: 2,
                    },
                    move: {
                        enable: true,
                        speed: 3,
                        random: true,
                        straight: false,
                        bounce: true,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200,
                        },
                    },
                },
                retina_detect: true,
            }}
        />
    );
};

export default ParticleBackground;
