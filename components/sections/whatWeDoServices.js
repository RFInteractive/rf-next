/** @jsxImportSource theme-ui */
import { useColorMode, Container, Grid, Button } from 'theme-ui';

const WhatWeDoRow = () => {
    return (
        <section
            id="whatWeDo"
            sx={{ marginY: ['100px', '125px', '150px', '150px'] }}
        >
            <Container sx={{ maxWidth: '1290px', px: '25px' }}>
                <Grid columns={[1, 1, 2, 2]} gap={'40px'}>
                    <div>
                        <h2 sx={{ variant: 'text.h2', marginBottom: '10px' }}>
                            What We Do
                        </h2>
                        <div
                            sx={{
                                width: '100%',
                                maxWidth: '90px',
                                height: '3px',
                                bg: 'accent',
                                marginBottom: '30px',
                            }}
                        ></div>
                        <p sx={{ my: '15px' }}>
                            Our core focus is centered around effective SEM and
                            SEO campaigns for local and national companies
                            looking to boost revenues from online marketing and
                            advertising.{' '}
                        </p>
                        <p sx={{ mb: '40px' }}>
                            We have a proven record of boosting website
                            performance, sales, and rankings. More importantly
                            we take pride on delivering strategy that earns the
                            types of clicks that deliver positive ROI.
                        </p>
                        <Button variant="primary">Let&apos;s Chat</Button>
                    </div>
                    <div></div>
                </Grid>
            </Container>
        </section>
    );
};

export default WhatWeDoRow;
