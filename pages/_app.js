/** @jsxImportSource theme-ui */
import { ThemeProvider } from 'theme-ui';
import { theme } from '../lib/theme';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import '../styles/globals.scss';
import Layout from '../components/layout/Layout';

import { motion, AnimatePresence } from 'framer-motion';
import {
    simpleFadeAnimate,
    simpleFadeInitial,
    simpleFadeExit,
} from '../lib/animations';

import { ApolloProvider } from '@apollo/client';
import { client } from '../lib/apollo';

const MyApp = ({ Component, pageProps, router }) => {
    const nextRouter = useRouter();

    useEffect(() => {
        const scrollToTop = (url) => {
            const navTo = url.split('?')[0];
            const navFrom = nextRouter.asPath.split('?')[0];
            if (navTo !== navFrom) {
                window.scroll({ top: 0, behavior: 'smooth' });
            }
        };

        const checkAndScrollToSection = (url) => {
            const query = window.location.search.split('=')[1];
            if (query) {
                setTimeout(() => {
                    const scrollTo = document.getElementById(query);
                    if (scrollTo) {
                        scrollTo.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 1300);
            }
        };

        nextRouter.events.on('routeChangeStart', scrollToTop);
        nextRouter.events.on('routeChangeComplete', checkAndScrollToSection);

        return () => {
            nextRouter.events.off('routeChangeStart', scrollToTop);
            nextRouter.events.off(
                'routeChangeComplete',
                checkAndScrollToSection
            );
        };
    }, [nextRouter]);

    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <AnimatePresence initial={false} exitBeforeEnter>
                    <motion.div
                        key={router.route}
                        initial={simpleFadeInitial}
                        animate={{
                            ...simpleFadeAnimate,
                            transition: {
                                duration: 0.6,
                            },
                        }}
                        exit={{
                            ...simpleFadeExit,
                            transition: {
                                duration: 0.6,
                            },
                        }}>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </motion.div>
                </AnimatePresence>
            </ThemeProvider>
        </ApolloProvider>
    );
};

export default MyApp;
