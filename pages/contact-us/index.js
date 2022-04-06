/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource theme-ui */
import Head from 'next/head';

import AppHeader from '../../components/sections/AppHeader';
import ContactUsForm from '../../components/forms/ContactUsForm';
import { contactUsSEO } from '../../lib/seo';

const ContactUs = () => {
    return (
        <>
            <Head>
                <title>{contactUsSEO.title}</title>
                <meta name="description" content={contactUsSEO.description} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={contactUsSEO.title} />
                <meta
                    property="og:description"
                    content={contactUsSEO.description}
                />
                <meta property="og:url" content={contactUsSEO.ogUrl} />
                <meta
                    property="og:image"
                    content="/images/RankFuse-OG-Img.jpg"
                />
            </Head>

            <AppHeader
                centerColumnContent={ContactUsCenterColumn()}
                type={'small'}
            />

            <main>
                <ContactUsForm />
            </main>
        </>
    );
};

export default ContactUs;

const ContactUsCenterColumn = () => {
    return (
        <div
            sx={{
                paddingTop: ['200px', '200px', '125px', '200px'],
                paddingBottom: ['100px', '75px', '50px', '50px'],
                paddingLeft: ['0px', '6%', '0px', '0px'],
                paddingRight: ['0px', '12%', '0px', '25px'],
            }}>
            <h1
                sx={{
                    color: '#fff',
                    marginBottom: '20px',
                }}>
                Contact Us
            </h1>
        </div>
    );
};
