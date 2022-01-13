/** @jsxImportSource theme-ui */
import { Button } from 'theme-ui';

import TwoColumnVector from '../../layout/TwoColumnVector';
import CheckListItem from '../../CheckListItem';

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
            }}
        >
            <div
                sx={{
                    backgroundColor: 'muted',
                    borderRadius: '20px',
                    paddingY: '30px',
                    paddingX: '50px',
                    maxWidth: '425px',
                    boxShadow: '-20px 30px 60px rgba(0, 0, 0, 0.12)',
                }}
            >
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
                        Robots meta instructions
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
                <CheckListItem bgColor="primary" checkmarkColor="#fff">
                    <p sx={{ marginLeft: '10px', fontSize: '18px' }}>
                        Mobile First SEO
                    </p>
                </CheckListItem>
                <CheckListItem bgColor="primary" checkmarkColor="#fff">
                    <p sx={{ marginLeft: '10px', fontSize: '18px' }}>
                        Keyword Optimization
                    </p>
                </CheckListItem>
                <CheckListItem bgColor="primary" checkmarkColor="#fff">
                    <p sx={{ marginLeft: '10px', fontSize: '18px' }}>
                        Schema Markup
                    </p>
                </CheckListItem>
            </div>
        </div>
    );
};

const OnPageSEORightColumnContent = () => {
    return (
        <div
            sx={{
                paddingLeft: ['0px', '0px', '75px', '60px'],
            }}
        >
            <h3 sx={{ marginBottom: '10px' }}>On-Page SEO</h3>
            <div
                sx={{
                    width: '100%',
                    maxWidth: '90px',
                    height: '3px',
                    bg: 'accent',
                    marginBottom: '30px',
                }}
            ></div>
            <p sx={{ marginBottom: '20px' }}>
                90% of the time when most people refer to SEO it’s on-page SEO.
                The technical optimization of a website involved a series of
                best practices to optimize HTML elements like tile tags, meta
                descriptions, schema markup, site speed, mobile layout, and much
                more.
            </p>
            <p sx={{ marginBottom: '20px' }}>
                If your looking for an SEO company that can support your
                WordPress, Joomla, Drupal, or one of the many popular shopping
                cart platforms, we have the experience you are looking for.
            </p>
            <Button variant="primary">Let&apos;s Chat</Button>
        </div>
    );
};

export default OnPageSEO;
