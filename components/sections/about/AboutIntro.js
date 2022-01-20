/** @jsxImportSource theme-ui */
import { Container, Grid } from 'theme-ui';
import StatCard from '../../cards/StatCard';
import DottedSquareSVG from '../../svgs/DottedSquareSVG';

const AboutIntroStats = () => {
    return (
        <section
            id="contentIntroStats"
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
                        <h2 sx={{ marginBottom: '10px' }}>
                            Custom Solutions, <br></br>
                            Research Driven
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
                            Rank Fuse opened in Overland Park, Kansas, in 2015.
                            Since then, our agency as been grown to help many
                            businesses expand their sales and customer base.
                        </p>
                        <p sx={{ mb: '40px' }}>
                            We know how to research and craft strategies for
                            your unique challenges and goals because our team
                            has decades of agency experience.
                        </p>
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

export default AboutIntroStats;
