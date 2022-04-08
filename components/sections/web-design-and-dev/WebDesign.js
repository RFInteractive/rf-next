/** @jsxImportSource theme-ui */
import { Button } from 'theme-ui';
import Image from 'next/image';

import TwoColumnVector from '../../layout/TwoColumnVector';
import modernDesignLaptop from '../../../public/images/modern-design-laptop.png';
import MotionFadeGrow from '../../animations/MotionFadeGrow';

const WebDesign = () => {
    return (
        <section id="webDesign">
            <TwoColumnVector
                vectorSide={'left'}
                leftColumnContent={WebDesignLeftColumnContent()}
                rightColumnContent={WebDesignRightColumnContent()}
                sectionName={'webDesign'}
            />
        </section>
    );
};

const WebDesignLeftColumnContent = () => {
    return (
        <div
            sx={{
                display: 'grid',
                justifyItems: 'center',
                position: 'relative',
                my: ['100px', '50px', '100px', '100px'],
            }}>
            <MotionFadeGrow threshold={0.7}>
                <Image
                    alt="Content strategy calendar"
                    src={modernDesignLaptop}
                    width={689}
                    height={587}
                    quality={100}
                />
            </MotionFadeGrow>
        </div>
    );
};

const WebDesignRightColumnContent = () => {
    return (
        <div
            sx={{
                paddingLeft: ['0px', '0px', '75px', '60px'],
            }}>
            <h3 sx={{ marginBottom: '10px' }}>Modern Designs</h3>
            <div
                sx={{
                    width: '100%',
                    maxWidth: '90px',
                    height: '3px',
                    bg: 'accent',
                    marginBottom: '30px',
                }}></div>
            <p sx={{ paddingBottom: '20px' }}>
                Creating a website that achieves your online marketing goals is
                hard! This is where we see many DIY projects fall flat, leaving
                business owners wondering why their website is not performing.
                When you need a modern website that loads quickly, is easy to
                navigate, and sets you apart from your competitors, call Rank
                Fuse.
            </p>
            <p sx={{ paddingBottom: '30px' }}>
                As a digital marketing agency, we see the web a little
                differently than most, and this lens helps us see website design
                and development a little differently, as well.
            </p>
            <MotionFadeGrow delay={0.6} threshold={1}>
                <Button variant="primary">Let&apos;s Chat</Button>
            </MotionFadeGrow>
        </div>
    );
};

export default WebDesign;
