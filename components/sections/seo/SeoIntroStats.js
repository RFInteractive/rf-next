/** @jsxImportSource theme-ui */
import { Container, Grid, Button } from 'theme-ui';

import StatCard from '../../cards/StatCard';
import DottedSquareSVG from '../../svgs/DottedSquareSVG';

const SEOIntroStats = () => {
    return (
        <section
            id="seoIntroStats"
            sx={{
                marginTop: ['25px', '125px', '75px', '150px'],
                marginBottom: ['125px', '100px', '150px', '150px'],
            }}
        >
            <Container sx={{ maxWidth: '1290px', px: '30px' }}>
                <Grid
                    columns={[1, 1, 2, 2]}
                    gap={'70px'}
                    sx={{ alignItems: 'center' }}
                >
                    <div
                        sx={{
                            paddingRight: ['0px', '0px', '60px', '30px'],
                        }}
                    >
                        <h2 sx={{ variant: 'text.h2', marginBottom: '10px' }}>
                            We&apos;re SEO Experts
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
                            advertising.
                        </p>
                        <p sx={{ mb: '40px' }}>
                            We have a proven record of boosting website
                            performance, sales, and rankings. More importantly
                            we take pride on delivering strategy that earns the
                            types of clicks that deliver positive ROI.
                        </p>
                        <Button variant="primary">Let&apos;s Chat</Button>
                    </div>
                    <div
                        sx={{
                            px: ['80px', '10%', '3%', '80px'],
                            position: 'relative',
                        }}
                    >
                        <Grid columns={[1, 2, 2, 2]} gap={'40px'}>
                            <DottedSquareSVG
                                positionStyles={{
                                    top: '-30px',
                                    right: '-25px',
                                }}
                            />
                            <StatCard
                                statistic="90%"
                                subheading="Avg. Traffic Increase"
                            ></StatCard>
                            <StatCard
                                statistic="500+"
                                subheading="Blog Posts Written"
                            ></StatCard>
                            <StatCard
                                statistic="< 2sec"
                                subheading="Avg. Site Load Time"
                            ></StatCard>
                            <StatCard
                                statistic="99.9%"
                                subheading="Website Uptime"
                            ></StatCard>
                        </Grid>
                    </div>
                </Grid>
            </Container>
        </section>
    );
};

export default SEOIntroStats;
