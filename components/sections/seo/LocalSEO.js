/** @jsxImportSource theme-ui */
import { Button } from 'theme-ui';
import Image from 'next/image';

import TwoColumnVector from '../../layout/TwoColumnVector';
import leaningLaptop from '../../../public/images/leaning-laptop.png';
import MotionFadeGrow from '../../animations/MotionFadeGrow';

const LocalSEO = () => {
    return (
        <section id="localSEO" sx={{ pb: ['50px', null, null, null] }}>
            <TwoColumnVector
                vectorSide={'left'}
                leftColumnContent={LocalSEOLeftColumnContent()}
                rightColumnContent={LocalSEORightColumnContent()}
                sectionName={'localSEO'}
            />
        </section>
    );
};

const LocalSEOLeftColumnContent = () => {
    return (
        <div
            sx={{
                display: 'grid',
                justifyItems: 'center',
                position: 'relative',
                pb: '30px',
                my: ['100px', '50px', '100px', '100px'],
            }}
            className="boxShadowLeft--rotated">
            <MotionFadeGrow threshold={0.8}>
                <Image
                    alt="Laptop with overlaying SEO metrics"
                    src={leaningLaptop}
                    width={587}
                    height={558}
                    quality={100}
                />
            </MotionFadeGrow>
        </div>
    );
};

const LocalSEORightColumnContent = () => {
    return (
        <div
            sx={{
                paddingLeft: ['0px', '0px', '75px', '60px'],
            }}>
            <h3 sx={{ marginBottom: '10px' }}>Local SEO</h3>
            <div
                sx={{
                    width: '100%',
                    maxWidth: '90px',
                    height: '3px',
                    bg: 'accent',
                    marginBottom: '30px',
                }}></div>
            <p sx={{ paddingBottom: '20px' }}>
                Local SEO is the practice of increasing your website’s
                visibility when it comes to local search results. This approach
                involves a variety of Local directories, schema markup, review
                tools as well as incorporating fundamental SEO best practices
                such as keyword-rich content and domain authority.
            </p>
            <p sx={{ paddingBottom: '30px' }}>
                Focusing on all of these algorithm factors for local search will
                help your company among local competitors. Whether you own a
                local brick-and-mortar business or a local service provider that
                travels your your customers, it’s important to grow your
                business thru local search keywords.
            </p>
            <MotionFadeGrow delay={0.5} threshold={1}>
                <Button variant="primary">Let&apos;s Chat</Button>
            </MotionFadeGrow>
        </div>
    );
};

export default LocalSEO;
