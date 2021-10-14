/** @jsxImportSource theme-ui */

import Image from 'next/image';
import { Button } from 'theme-ui';

import TwoColumnVector from '../../layout/twoColumnVector';
import modernDesignLaptop from '../../../public/images/modern-design-laptop.png';

const WebDesign = () => {
    return (
        <section id="webDesign" sx={{ pb: ['50px', null, null, null] }}>
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
                my: ['150px', '50px', '100px', '100px'],
            }}
        >
            <Image
                alt="Content strategy calendar"
                src={modernDesignLaptop}
                width={689}
                height={587}
                quality={100}
            />
        </div>
    );
};

const WebDesignRightColumnContent = () => {
    return (
        <div
            sx={{
                paddingLeft: ['0px', '0px', '75px', '60px'],
            }}
        >
            <h3 sx={{ variant: 'text.h2', marginBottom: '10px' }}>
                Modern Designs
            </h3>
            <div
                sx={{
                    width: '100%',
                    maxWidth: '90px',
                    height: '3px',
                    bg: 'accent',
                    marginBottom: '30px',
                }}
            ></div>
            <p sx={{ paddingBottom: '20px' }}>
                Creating a website that achieves your online marketing goals is
                hard! This is where we see many DIY projects fall flat and
                leaving business owners wondering why their website is not
                performing.
            </p>
            <p sx={{ paddingBottom: '30px' }}>
                As a digital marketing agency, we see the web a little
                differently than most and this lens helps us see website design
                and development a little differently as well.
            </p>
            <Button variant="primary">Let&apos;s Chat</Button>
        </div>
    );
};

export default WebDesign;
