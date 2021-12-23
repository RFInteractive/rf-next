/** @jsxImportSource theme-ui */
import { ThemeProvider } from 'theme-ui';
import { theme } from '../lib/theme';

import '../styles/globals.scss';
import Layout from '../components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';

const MyApp = ({ Component, pageProps, router }) => {
    return (
        <ThemeProvider theme={theme}>
            <AnimatePresence>
                <motion.div
                    key={router.route}
                    initial="pageInitial"
                    animate="pageAnimate"
                    exit="pageExit"
                    variants={{
                        pageInitial: {
                            opacity: 0,
                        },
                        pageAnimate: {
                            opacity: 1,
                            transition: {
                                delay: 0.3,
                                duration: 1,
                            },
                        },
                        pageExit: {
                            opacity: 0,
                            x: -100,
                            transition: {
                                duration: 0.7,
                            },
                        },
                    }}
                >
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </motion.div>
            </AnimatePresence>
        </ThemeProvider>
    );
};

export default MyApp;
