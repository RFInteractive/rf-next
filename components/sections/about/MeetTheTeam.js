/** @jsxImportSource theme-ui */
import { Grid, Container } from 'theme-ui';
import HeadshotCard from '../../cards/HeadshotCard';
import MotionFadeGrow from '../../animations/MotionFadeGrow';

const MeetTheTeam = () => {
    return (
        <section id="meetTheTeam" sx={{ mb: '100px' }}>
            <Container sx={{ maxWidth: '1000px', px: '30px' }}>
                <h2 sx={{ textAlign: 'center' }}>The Team</h2>
                <div
                    sx={{
                        width: '100%',
                        maxWidth: '90px',
                        height: '3px',
                        bg: 'accent',
                        margin: '15px auto 75px',
                    }}></div>
                <Grid columns={[1, 2, 2, 2]} gap={[75, 75, 50, 50]}>
                    <MotionFadeGrow delay={0.2}>
                        <HeadshotCard
                            heading="Kevin Pike"
                            subheading="President/Owner"
                            imgSrc="/images/kevin-pike-headshot.png"
                            link="/about/kevin-pike"
                        />
                    </MotionFadeGrow>
                    <MotionFadeGrow delay={0.4}>
                        <HeadshotCard
                            heading="Chelsea Roller"
                            subheading="Account Manager, SEO & Content Marketing"
                            imgSrc="/images/chelsea-roller-headshot.png"
                            link="/about/chelsea-roller"
                        />
                    </MotionFadeGrow>
                    <MotionFadeGrow delay={0.5}>
                        <HeadshotCard
                            heading="Adam Bungart"
                            subheading="Web Developer"
                            imgSrc="/images/adam-bungart-headshot.png"
                            link="/"
                        />
                    </MotionFadeGrow>
                    <MotionFadeGrow delay={0.7}>
                        <HeadshotCard
                            heading="Lauren Underwood"
                            subheading="Content Writer"
                            imgSrc="/images/lauren-underwood-headshot.png"
                            link="/"
                        />
                    </MotionFadeGrow>
                </Grid>
            </Container>
        </section>
    );
};

export default MeetTheTeam;
