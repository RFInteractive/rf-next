/** @jsxImportSource theme-ui */
import { ThemeProvider } from 'theme-ui';
import { theme } from '../lib/theme';

import '../styles/globals.scss';
import Layout from '../components/layout/Layout';

import { motion, AnimatePresence } from 'framer-motion';

import { ApolloProvider } from '@apollo/client';
import { client } from '../lib/apollo';

const MyApp = ({ Component, pageProps, router }) => {
    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <AnimatePresence>
                    <motion.div
                        key={router.route}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: {
                                delay: 0.1,
                                duration: 0.6,
                            },
                        }}
                        exit={{
                            opacity: 0,
                            x: -30,
                            transition: {
                                duration: 0.2,
                            },
                        }}
                    >
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
