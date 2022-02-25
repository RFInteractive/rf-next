/** @jsxImportSource theme-ui */
import Image from 'next/image';

import TwoColumnVector from '../../layout/TwoColumnVector';
import RetargetingPhones from '../../../public/images/retargeting-phones.png';
import MotionFadeGrow from '../../animations/MotionFadeGrow';

const Retargeting = () => {
    return (
        <section id="retargeting" sx={{ pb: ['50px', null, null, null] }}>
            <TwoColumnVector
                vectorSide={'right'}
                leftColumnContent={RetargetingLeftColumnContent()}
                rightColumnContent={RetargetingRightColumnContent()}
                sectionName={'retargeting'}
            />
        </section>
    );
};

const RetargetingLeftColumnContent = () => {
    return (
        <div
            sx={{
                paddingRight: ['0px', '0px', '80px', '40px'],
            }}>
            <h3 sx={{ marginBottom: '10px' }}>
                Retargeting<br></br>Ad Campaigns
            </h3>
            <div
                sx={{
                    width: '100%',
                    maxWidth: '90px',
                    height: '3px',
                    bg: 'accent',
                    marginBottom: '30px',
                }}></div>
            <p>
                On average, users will have 7 interactions with your brand
                before making a purchase. By targeting users who have previously
                visited their website, these ads remind potential customers of
                your products and services.
            </p>
            <p sx={{ margin: '20px 0px 35px' }}>
                Whether your goal is to generate leads, increase downloads, or
                boost sales, retargeting allows your brand to achieve higher
                conversion rates through increased brand awareness.
            </p>
        </div>
    );
};

const RetargetingRightColumnContent = () => {
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
                    src={RetargetingPhones}
                    width={655}
                    height={553}
                    quality={100}
                />
            </MotionFadeGrow>
        </div>
    );
};

export default Retargeting;
