/** @jsxImportSource theme-ui */
import { Grid, Container } from 'theme-ui';
import HeadshotCard from '../../cards/HeadshotCard';
import MotionFadeGrow from '../../animations/MotionFadeGrow';

const MeetTheTeam = () => {
    return (
        <section id="meetTheTeam" sx={{ mb: '100px' }}>
            <Container sx={{ maxWidth: '1290px', px: '30px' }}>
                <h2 sx={{ textAlign: 'center' }}>The Team</h2>
                <div
                    sx={{
                        width: '100%',
                        maxWidth: '90px',
                        height: '3px',
                        bg: 'accent',
                        margin: '15px auto 75px',
                    }}
                ></div>
                <Grid columns={[1, 2, 3, 3]} gap={[75, 75, 50, 50]}>
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
                            heading="Josh Eliseuson"
                            subheading="Paid Media Director"
                            imgSrc="/images/josh-eliseuson-headshot.png"
                            link="/"
                        />
                    </MotionFadeGrow>
                    <MotionFadeGrow delay={0.6}>
                        <HeadshotCard
                            heading="Chelsea Roller"
                            subheading="Account Manager, SEO & Content Marketing"
                            imgSrc="/images/chelsea-roller-headshot.png"
                            link="/"
                        />
                    </MotionFadeGrow>
                    <MotionFadeGrow delay={0.2}>
                        <HeadshotCard
                            heading="Jamin Roberts"
                            subheading="Web Developer"
                            imgSrc="/images/jamin-roberts-headshot.png"
                            link="/"
                        />
                    </MotionFadeGrow>
                    <MotionFadeGrow delay={0.4}>
                        <HeadshotCard
                            heading="Morgan Nielsen"
                            subheading="Paid Search Manager"
                            imgSrc="/images/morgan-nielsen-headshot.png"
                            link="/"
                        />
                    </MotionFadeGrow>
                    <MotionFadeGrow delay={0.6}>
                        <HeadshotCard
                            heading="Gavin Hodges"
                            subheading="Paid Search Specialist"
                            imgSrc="/images/gavin-hodges-headshot.png"
                            link="/"
                        />
                    </MotionFadeGrow>
                    <MotionFadeGrow delay={0.2}>
                        <HeadshotCard
                            heading="Adam Bungart"
                            subheading="Web Developer"
                            imgSrc="/images/adam-bungart-headshot.png"
                            link="/"
                        />
                    </MotionFadeGrow>
                    <MotionFadeGrow delay={0.4}>
                        <HeadshotCard
                            heading="Lauren Underwood"
                            subheading="Content Writer"
                            imgSrc="/images/lauren-underwood-headshot.png"
                            link="/"
                        />
                    </MotionFadeGrow>
                    <MotionFadeGrow delay={0.6}>
                        <HeadshotCard
                            heading="Alicia Croci"
                            subheading="Social Media Coordinator"
                            imgSrc="/images/alicia-croci-headshot.png"
                            link="/"
                        />
                    </MotionFadeGrow>
                </Grid>
            </Container>
        </section>
    );
};

export default MeetTheTeam;
