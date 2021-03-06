/** @jsxImportSource theme-ui */
import { Container, Grid, Button } from 'theme-ui';
import IconServiceCard from '../cards/IconServiceCard';
import DottedSquareSVG from '../svgs/DottedSquareSVG';

import MotionFadeGrow from '../animations/MotionFadeGrow';
import MultiStepPortalButton from '../portals/MultiStepPortalButton';

const WhatWeDoRow = () => {
    return (
        <section
            id="whatWeDo"
            sx={{
                paddingY: ['100px', '125px', '150px', '150px'],
                overflow: 'hidden',
            }}>
            <Container sx={{ maxWidth: '1290px', px: '30px' }}>
                <Grid columns={[1, 1, 2, 2]} gap={'70px'}>
                    <div>
                        <h2 sx={{ marginBottom: '10px' }}>What We Do</h2>
                        <div
                            sx={{
                                width: '100%',
                                maxWidth: '90px',
                                height: '3px',
                                bg: 'accent',
                                marginBottom: '30px',
                            }}></div>
                        <p sx={{ my: '15px' }}>
                            Our core focus is effective SEM and SEO campaigns
                            for local and national companies looking to boost
                            revenues from online marketing and advertising. As a
                            full-service digital marketing agency, we have the
                            ability to help in all facets of the online
                            marketing experience.
                        </p>
                        <p sx={{ mb: '10px' }}>
                            We have a proven record of boosting website
                            performance, sales, and rankings. More importantly,
                            we take pride in delivering strategy that earns the
                            types of clicks that deliver positive ROI.
                        </p>
                        <MotionFadeGrow threshold={0.8} delay={0.25}>
                            <MultiStepPortalButton
                                buttonText="Let's Worth Together"
                                variant="primary"
                            />
                        </MotionFadeGrow>
                    </div>
                    <div
                        sx={{
                            px: ['45px', '10%', '3%', '80px'],
                            position: 'relative',
                        }}>
                        <Grid columns={[1, 2, 2, 2]} gap={'40px'}>
                            <DottedSquareSVG
                                positionStyles={{
                                    top: '-30px',
                                    right: '-25px',
                                }}
                            />
                            <IconServiceCard
                                heading="SEO"
                                link="/seo-services"
                                icon="seo"></IconServiceCard>
                            <IconServiceCard
                                heading="Content"
                                link="/seo-content"
                                icon="content"></IconServiceCard>
                            <IconServiceCard
                                heading="Web Dev"
                                link="/web-design-and-development"
                                icon="computer"></IconServiceCard>
                            <IconServiceCard
                                heading="Advertising"
                                link="/seo-services"
                                icon="advertising"></IconServiceCard>
                        </Grid>
                    </div>
                </Grid>
            </Container>
        </section>
    );
};

export default WhatWeDoRow;
