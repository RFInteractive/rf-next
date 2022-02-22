// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,900;1,400&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="icon" href="/favicon.ico" />
                    <meta
                        property="og:image"
                        content="/images/RankFuse-OG-Img.jpg"
                    />
                </Head>
                <body id="body">
                    <Main />
                    <NextScript />
                    <div id="general-form-modal"></div>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
