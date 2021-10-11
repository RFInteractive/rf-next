/** @jsxImportSource theme-ui */
import { Container, Grid, Button } from 'theme-ui';
import IconServiceCard from '../cards/iconServiceCard';

const WhatWeDoRow = () => {
    return (
        <section
            id="whatWeDo"
            sx={{ marginY: ['100px', '125px', '150px', '150px'] }}
        >
            <Container sx={{ maxWidth: '1290px', px: '30px' }}>
                <Grid columns={[1, 1, 2, 2]} gap={'70px'}>
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
                    <div sx={{ px: ['80px', '10%', '3%', '80px'] }}>
                        <Grid columns={[1, 2, 2, 2]} gap={'40px'}>
                            <IconServiceCard
                                heading="SEO"
                                link="/seo-services"
                                icon="seo"
                            ></IconServiceCard>
                            <IconServiceCard
                                heading="Content"
                                link="/seo-content"
                                icon="content"
                            ></IconServiceCard>
                            <IconServiceCard
                                heading="Web Dev"
                                link="/web-design-and-development"
                                icon="computer"
                            ></IconServiceCard>
                            <IconServiceCard
                                heading="Advertising"
                                link="/seo-services"
                                icon="advertising"
                            ></IconServiceCard>
                        </Grid>
                    </div>
                </Grid>
            </Container>
        </section>
    );
};

export default WhatWeDoRow;