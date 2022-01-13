/** @jsxImportSource theme-ui */
import { Button } from 'theme-ui';
import Image from 'next/image';

import TwoColumnVector from '../../layout/TwoColumnVector';
import NativeAdManagementImg from '../../../public/images/native-ad-management.png';

const NativeAdManagement = () => {
    return (
        <section
            id="nativeAdManagement"
            sx={{ pb: ['50px', null, null, null] }}
        >
            <TwoColumnVector
                vectorSide={'left'}
                leftColumnContent={NativeAdManagementLeftColumnContent()}
                rightColumnContent={NativeAdManagementRightColumnContent()}
                sectionName={'nativeAdManagement'}
            />
        </section>
    );
};

const NativeAdManagementLeftColumnContent = () => {
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
                src={NativeAdManagementImg}
                width={576}
                height={507}
                quality={100}
            />
        </div>
    );
};

const NativeAdManagementRightColumnContent = () => {
    return (
        <div
            sx={{
                paddingLeft: ['0px', '0px', '75px', '60px'],
            }}
        >
            <h3 sx={{ marginBottom: '10px' }}>Native Ad Management</h3>
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
                Promoting your content through brand thought leadership on a
                native ad network has multiple benefits including, increased
                website traffic, more social shares, comments, referral links,
                and overall awareness of your brand.
            </p>
            <p sx={{ paddingBottom: '30px' }}>
                By exposing your target audience to content that seamlessly
                blends with the page, native ads lead to higher engagement rates
                for your article content and in turn generates highly relevant
                leads.
            </p>
            <Button variant="primary">Let&apos;s Chat</Button>
        </div>
    );
};

export default NativeAdManagement;
