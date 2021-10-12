/** @jsxImportSource theme-ui */
import { ThemeProvider } from 'theme-ui';
import { theme } from '../lib/theme';

import '../styles/globals.scss';
import Layout from '../components/layout/layout';

const MyApp = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
};

export default MyApp;
