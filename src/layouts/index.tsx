import React from 'react';
import { TransitionProvider, TransitionViews } from 'gatsby-plugin-transitions';
import Header from '../components/Header';

const Layout = ({ location, children }: any) => {
    return (
        <div style={{ position: 'relative', zIndex: 1 }}>
            <TransitionProvider
                location={location}
                mode="immediate"
                enter={{
                    opacity: 0,
                    transform:
                        'translate3d(0vh,0vh,0) scale3d(1, 1, 1) rotate(0deg)',
                    config: {
                        config: {
                            duration: 1500,
                        },
                    },
                }}
                usual={{
                    opacity: 1,
                    transform:
                        'translate3d(0vh,0vh,0) scale3d(1, 1, 1) rotate(0deg)',
                }}
                leave={{
                    opacity: 0,
                    transform:
                        'translate3d(0vh,0,0) scale3d(1, 1, 1) rotate(0deg)',
                    config: {
                        duration: 500,
                    },
                }}
            >
                <Header />
                <TransitionViews>{children}</TransitionViews>
            </TransitionProvider>
        </div>
    );
};

export default Layout;
