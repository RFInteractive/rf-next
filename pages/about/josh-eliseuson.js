/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource theme-ui */
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import { Grid, Container } from 'theme-ui';
import MotionFadeGrow from '../../components/animations/MotionFadeGrow';

import AppHeader from '../../components/sections/AppHeader';

const JoshEliseuson = () => {
    useEffect(() => {
        window.scroll({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <Head>
                <title>
                    Josh Eliseuson: Paid Search Manager | Rank Fuse Digital
                    Marketing
                </title>
                <meta
                    name="description"
                    content="Get to know our esteemed paid search manager Josh Eliseuson"
                />
            </Head>

            <AppHeader
                centerColumnContent={JoshEliseusonHeading()}
                type={'small'}
            />
            <main>
                <Container
                    sx={{
                        maxWidth: '1290px',
                        padding: '50px 30px 100px',
                        mt: '-100px',
                    }}
                >
                    <Grid
                        columns={[1, 1, '1fr 1.5fr', '1fr 1.5fr']}
                        sx={{ justifyItems: 'center' }}
                    >
                        <div
                            sx={{
                                '& div': { overflow: 'visible !important' },
                                '& img': {
                                    borderRadius: '50%',
                                    boxShadow:
                                        '0px 5px 20px rgba(0, 0, 0, 0.04)',
                                },
                                mb: '25px',
                            }}
                        >
                            <MotionFadeGrow>
                                <Image
                                    src="/images/josh-eliseuson-headshot.png"
                                    width={325}
                                    height={325}
                                    alt={`Image of Rank Fuse Digital Marketing paid search manager Josh Eliseuson`}
                                    quality={90}
                                />
                            </MotionFadeGrow>
                            <h3
                                sx={{
                                    color: 'text',
                                    textAlign: 'center',
                                    fontSize: '32px',
                                    fontWeight: '900',
                                    my: '15px',
                                }}
                            >
                                Josh Eliseuson
                            </h3>
                            <h4
                                sx={{
                                    color: 'text',
                                    textAlign: 'center',
                                    fontSize: '22px',
                                }}
                            >
                                Paid Search Manager
                            </h4>
                        </div>
                        <div sx={{ display: 'grid', gap: '15px' }}>
                            <p>
                                Josh is a nationally recognized digital
                                marketing strategist who specializes in the
                                development and management of Search Engine
                                Marketing (SEM) and Targeted Display campaigns.
                            </p>
                            <p>
                                Josh has managed SEM campaigns for more than 500
                                different organizations over his 13-year career.
                                Clients have included top national brands like
                                McDonald’s, Papa John’s Pizza and HarperCollins
                                Publishers and large B2B enterprises like
                                Freightquote.com and QTS Data Centers.
                            </p>
                            <p>
                                Additionally, Josh specializes in creating ROI
                                driven campaigns for small to medium-sized
                                businesses across the United States.
                            </p>
                            <p>
                                Josh is a Google Premier Partner, Bing Ads
                                Professional, and a Certified Salesforce CRM
                                consultant, and he has a Journalism and
                                Advertising Bachelors degree from the University
                                of Kansas.
                            </p>
                        </div>
                    </Grid>
                </Container>
            </main>
        </>
    );
};

export default JoshEliseuson;

const JoshEliseusonHeading = () => {
    return (
        <div
            sx={{
                paddingTop: ['200px', '200px', '125px', '200px'],
                paddingBottom: ['100px', '75px', '50px', '50px'],
                paddingLeft: ['0px', '6%', '0px', '0px'],
                paddingRight: ['0px', '12%', '0px', '25px'],
            }}
        >
            <h1
                sx={{
                    color: '#fff',
                    marginBottom: '20px',
                }}
            >
                Josh Eliseuson
            </h1>
        </div>
    );
};
