/** @jsxImportSource theme-ui */
import { Grid, Container } from 'theme-ui';
import HeadshotCard from '../../cards/HeadshotCard';
import MotionFadeGrow from '../../animations/MotionFadeGrow';

const Certifications = () => {
    return (
        <section
            id="certifications"
            sx={{ mb: '100px', mt: [null, null, '100px', '100px'] }}
        >
            <Container sx={{ maxWidth: '1290px', px: '30px' }}>
                <h2 sx={{ textAlign: 'center' }}>Our Certifications</h2>
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
                            heading="Google Partner"
                            imgSrc="/images/certs/google-cert.png"
                            link="https://www.google.com/partners/agency?id=5321071100"
                        />
                    </MotionFadeGrow>
                    <MotionFadeGrow delay={0.4}>
                        <HeadshotCard
                            heading="Upcity Marketplace Top Digital Agency"
                            imgSrc="/images/certs/upcity-cert.png"
                            link="https://upcity.com/local-marketing-agencies/profiles/rank-fuse-interactive"
                        />
                    </MotionFadeGrow>
                    <MotionFadeGrow delay={0.6}>
                        <HeadshotCard
                            heading="Google Analytics Certification"
                            imgSrc="/images/certs/analytics-cert.png"
                            link="https://analytics.google.com/analytics/academy/certificate/hLqRrLcoS0OLz7OC2XE--w"
                        />
                    </MotionFadeGrow>
                    <MotionFadeGrow delay={0.2}>
                        <HeadshotCard
                            heading="Google Tag Manager"
                            imgSrc="/images/certs/gtm-cert.png"
                            link="https://analytics.google.com/analytics/academy/certificate/-V9-QqMkQJytje1v9AKFnw"
                        />
                    </MotionFadeGrow>
                    <MotionFadeGrow delay={0.4}>
                        <HeadshotCard
                            heading="Expertise.com Top Digital Agency"
                            imgSrc="/images/certs/expertise-cert.png"
                            link="https://www.expertise.com/ks/overland-park/digital-marketing-agencies"
                        />
                    </MotionFadeGrow>
                    <MotionFadeGrow delay={0.6}>
                        <HeadshotCard
                            heading="Yext Certified Partner"
                            imgSrc="/images/certs/yext-cert.png"
                            link="https://rankfuse.com/seo-tools/free-local-seo-analysis-tool/"
                        />
                    </MotionFadeGrow>
                    <MotionFadeGrow delay={0.2}>
                        <HeadshotCard
                            heading="Bing Ads Accredited Pro"
                            imgSrc="/images/certs/bing-cert.png"
                            link="https://learninglab.about.ads.microsoft.com/certification/membership-profile/id/341340/kevin-pike/"
                        />
                    </MotionFadeGrow>
                    <MotionFadeGrow delay={0.4}>
                        <HeadshotCard
                            heading="SEMRush Certified Partner"
                            imgSrc="/images/certs/semrush-cert.png"
                            link="https://www.semrush.com/agencies/rank-fuse-digital-marketing/"
                        />
                    </MotionFadeGrow>
                </Grid>
            </Container>
        </section>
    );
};

export default Certifications;
