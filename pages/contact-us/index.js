/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource theme-ui */
import Head from 'next/head';

import AppHeader from '../../components/sections/AppHeader';
import ContactUsForm from '../../components/forms/ContactUsForm';
import { contactUsSEO } from '../../lib/seo';
import { Container, Grid } from 'theme-ui';

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
                <section sx={{ marginBottom: '75px' }}>
                    <Container
                        sx={{
                            maxWidth: ['450px', '600px', '1290px'],
                            px: '20px',
                        }}>
                        <Grid
                            columns={[1, 1, 2, 2]}
                            gap={50}
                            sx={{ alignItems: 'center' }}>
                            <div>
                                <Grid gap={20}>
                                    <h4
                                        sx={{
                                            color: 'secondary',
                                            marginBottom: '-20px',
                                        }}>
                                        Get In Touch
                                    </h4>
                                    <h2>We Are Ready To Help Your Business!</h2>
                                    <p>
                                        What are you waiting for? If you are
                                        looking for a digital marketing agency
                                        in the Kansas City Area, we are ready to
                                        deliver you a strategy that works!
                                    </p>
                                    <p>
                                        <strong>Phone:</strong>
                                        <br></br>
                                        <a href="tel:913.703.7265">
                                            913-270-6770
                                        </a>
                                    </p>
                                    <p>
                                        <strong>Address:</strong>
                                        <br></br>
                                        11020 King St.
                                        <br></br>Suite 420
                                        <br></br>Overland Park, KS 66210
                                    </p>
                                </Grid>
                            </div>
                            <div>
                                <h3 sx={{ marginBottom: '20px' }}>
                                    Drop Us a Line
                                </h3>
                                <ContactUsForm />
                            </div>
                        </Grid>
                    </Container>
                </section>
                <section sx={{ height: ['400px', '600px', '600px', '600px'] }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9167.587885994128!2d-94.72267642445085!3d38.928221415271295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0eada038dc77d%3A0xada75d39dc2bed51!2sRank%20Fuse%20Digital%20Marketing!5e0!3m2!1sen!2sus!4v1649278260989!5m2!1sen!2sus"
                        style={{ border: 0, width: '100%', height: '100%' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </section>
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
