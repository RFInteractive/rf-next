/** @jsxImportSource theme-ui */
import { Button } from 'theme-ui';
import Image from 'next/image';

import TwoColumnVector from '../../layout/TwoColumnVector';
import HeadlessWordPressImac from '../../../public/images/headless-wordpress-iMac.png';

const HeadlessWordPress = () => {
    return (
        <section id="headlessWordPress" sx={{ pb: ['50px', null, null, null] }}>
            <TwoColumnVector
                vectorSide={'left'}
                leftColumnContent={HeadlessWordPressLeftColumnContent()}
                rightColumnContent={HeadlessWordPressRightColumnContent()}
                sectionName={'headlessWordPress'}
            />
        </section>
    );
};

const HeadlessWordPressLeftColumnContent = () => {
    return (
        <div
            sx={{
                display: 'grid',
                justifyItems: 'center',
                position: 'relative',
                my: ['150px', '50px', '100px', '100px'],
                padding: ['0px', '0px', '75px', '75px'],
            }}
        >
            <Image
                alt="Content strategy calendar"
                src={HeadlessWordPressImac}
                width={572}
                height={511}
                quality={100}
            />
        </div>
    );
};

const HeadlessWordPressRightColumnContent = () => {
    return (
        <div
            sx={{
                paddingLeft: ['0px', '0px', '75px', '60px'],
            }}
        >
            <h3 sx={{ marginBottom: '10px' }}>Headless WordPress</h3>
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
                WordPress is a great content management system used by thousands
                of businesses around the world, but there are better ways to
                build website frontends. Why not leverage the fastest tools
                available with WordPress’s industry-leading content platform?
            </p>
            <p sx={{ paddingBottom: '30px' }}>
                Do you want a website that loads in under a second? Buttery
                smooth page animations? Fully immersive features and controls?
                Contact us today to find out more!
            </p>
            <Button variant="primary">Let&apos;s Chat</Button>
        </div>
    );
};

export default HeadlessWordPress;
