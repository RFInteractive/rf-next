/** @jsxImportSource theme-ui */
import TwoColumnVector from '../../layout/TwoColumnVector';
import CheckListItem from '../../CheckListItem';
import MotionFadeGrow from '../../animations/MotionFadeGrow';
import MultiStepPortalButton from '../../portals/MultiStepPortalButton';

const OnPageSEO = () => {
    return (
        <section id="onPageSEO" sx={{ pb: ['50px', null, null, null] }}>
            <TwoColumnVector
                vectorSide={'left'}
                leftColumnContent={OnPageSEOLeftColumnContent()}
                rightColumnContent={OnPageSEORightColumnContent()}
                sectionName={'onPageSEO'}
            />
        </section>
    );
};

const OnPageSEOLeftColumnContent = () => {
    return (
        <div
            sx={{
                position: 'relative',
                marginTop: ['0px', '50px', '100px', '100px'],
                marginBottom: ['100px', '50px', '100px', '100px'],
                display: 'grid',
                justifyContent: ['center', 'center', 'end', 'end'],
                paddingRight: [null, null, '75px', '75px'],
            }}>
            <MotionFadeGrow threshold={0.7}>
                <div
                    sx={{
                        backgroundColor: 'muted',
                        borderRadius: '20px',
                        paddingY: '30px',
                        paddingX: '50px',
                        maxWidth: '425px',
                        boxShadow: '-20px 30px 60px rgba(0, 0, 0, 0.12)',
                    }}>
                    <CheckListItem bgColor="primary" checkmarkColor="#fff">
                        <p sx={{ marginLeft: '10px', fontSize: '18px' }}>
                            Title Tag Optimization
                        </p>
                    </CheckListItem>
                    <CheckListItem bgColor="primary" checkmarkColor="#fff">
                        <p sx={{ marginLeft: '10px', fontSize: '18px' }}>
                            Meta Description Optimization
                        </p>
                    </CheckListItem>
                    <CheckListItem bgColor="primary" checkmarkColor="#fff">
                        <p sx={{ marginLeft: '10px', fontSize: '18px' }}>
                            SEO Friendly URL Structure
                        </p>
                    </CheckListItem>
                    <CheckListItem bgColor="primary" checkmarkColor="#fff">
                        <p sx={{ marginLeft: '10px', fontSize: '18px' }}>
                            Internal/External Link Structure
                        </p>
                    </CheckListItem>
                    <CheckListItem bgColor="primary" checkmarkColor="#fff">
                        <p sx={{ marginLeft: '10px', fontSize: '18px' }}>
                            Audit/Fix Broken Links
                        </p>
                    </CheckListItem>
                    <CheckListItem bgColor="primary" checkmarkColor="#fff">
                        <p sx={{ marginLeft: '10px', fontSize: '18px' }}>
                            Canonical URLs/Redirects
                        </p>
                    </CheckListItem>
                    <CheckListItem bgColor="primary" checkmarkColor="#fff">
                        <p sx={{ marginLeft: '10px', fontSize: '18px' }}>
                            Load Time/Page Speed
                        </p>
                    </CheckListItem>
                    <CheckListItem bgColor="primary" checkmarkColor="#fff">
                        <p sx={{ marginLeft: '10px', fontSize: '18px' }}>
                            Image Optimization
                        </p>
                    </CheckListItem>
                </div>
            </MotionFadeGrow>
        </div>
    );
};

const OnPageSEORightColumnContent = () => {
    return (
        <div
            sx={{
                paddingLeft: ['0px', '0px', '75px', '60px'],
            }}>
            <h3 sx={{ marginBottom: '10px' }}>On-Page SEO</h3>
            <div
                sx={{
                    width: '100%',
                    maxWidth: '90px',
                    height: '3px',
                    bg: 'accent',
                    marginBottom: '30px',
                }}></div>
            <p sx={{ marginBottom: '20px' }}>
                When most people reference SEO, they mean on-page SEO. This is
                the technical optimization of a website which includes a range
                of practices to ensure the HTML elements like title tags, meta
                descriptions, schema markup, site speed, mobile layout, and more
                are all at their very best.
            </p>
            <p sx={{ marginBottom: '20px' }}>
                If you are looking for an SEO company that can support your
                WordPress, Joomla, Drupal, or one of the many popular shopping
                cart platforms, we have the experience that you are looking for.
            </p>
            <MotionFadeGrow delay={0.6} threshold={1}>
                <MultiStepPortalButton
                    buttonText="Let's Chat"
                    variant="primary"
                />
            </MotionFadeGrow>
        </div>
    );
};

export default OnPageSEO;
