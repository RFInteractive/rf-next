/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource theme-ui */
import Head from 'next/head';
import { Button, Container, Grid, Link } from 'theme-ui';

import AppHeader from '../components/sections/AppHeader';
import Lottie from 'react-lottie';
import * as astronautAnimationData from '../lib/lottie/astronaut-lottie.json';

const Custom404 = () => {
    const loadingLottieOptions = {
        loop: true,
        autoplay: true,
        animationData: astronautAnimationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <>
            <Head>
                <title>404: Page Not Found | Rank Fuse Digital Marketing</title>
                <meta
                    name="description"
                    content="Oops. It appears the page you're looking for doesn't exist"
                />
            </Head>

            <AppHeader
                centerColumnContent={Custom404CenterColumn()}
                type={'small'}
            />

            <main>
                <Container sx={{ maxWidth: '1290px', px: '20px', pb: '50px' }}>
                    <Grid
                        columns={[1, 1, 2, 2]}
                        sx={{
                            alignItems: 'center',
                        }}>
                        <div
                            sx={{
                                display: 'grid',
                                justifyItems: 'center',
                                px: '50px',
                            }}>
                            <Lottie options={loadingLottieOptions} />
                        </div>
                        <div>
                            <Grid sx={{ justifyItems: 'center' }} gap={30}>
                                <h2 sx={{ fontSize: '44px' }}>Oops!</h2>
                                <h4 sx={{ textAlign: 'center' }}>
                                    It looks like the page you&apos;re looking
                                    for doesn&apos;t exist!
                                </h4>
                                <Link href="/">
                                    <a>
                                        <Button variant="primary">
                                            Take Me Home
                                        </Button>
                                    </a>
                                </Link>
                            </Grid>
                        </div>
                    </Grid>
                </Container>
            </main>
        </>
    );
};

export default Custom404;

const Custom404CenterColumn = () => {
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
                404: Page Not Found
            </h1>
        </div>
    );
};
