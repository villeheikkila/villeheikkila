/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import Particles from 'react-particles-js';
import theme from '../theme';

const ParticleBackground = () => {
    return (
        <Particles
            style={{ zIndex: 1 }}
            params={{
                particles: {
                    number: {
                        value: 30,
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
                            nb_sides: 0,
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
                        value: 40,
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
                        distance: 300,
                        color: theme.colors.flame,
                        opacity: 0.5,
                        width: 3,
                    },
                    move: {
                        enable: true,
                        speed: 1.5,
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
