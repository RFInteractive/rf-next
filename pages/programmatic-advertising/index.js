/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource theme-ui */
import { Button } from 'theme-ui';
import Head from 'next/head';
import Image from 'next/image';

import AppHeader from '../../components/sections/AppHeader';
import AdverisingLaptop from '../../public/images/advertising-laptop.png';
import CheckListItem from '../../components/CheckListItem';
import AdvertisingIntroStats from '../../components/sections/programmatic-advertising/AdvertisingIntroStats';
import AdvertisingProcess from '../../components/sections/programmatic-advertising/AdvertisingProcess';
import TestimonialCarousel from '../../components/sections/AppTestimonialCarousel';
import BehavioralTargeting from '../../components/sections/programmatic-advertising/BehavioralTargeting';
import ContextualDisplay from '../../components/sections/programmatic-advertising/ContextualDisplay';
import NativeAdManagementImg from '../../components/sections/programmatic-advertising/NativeAdManagement';
import Retargeting from '../../components/sections/programmatic-advertising/Retargeting';
import CTARow from '../../components/sections/AppCTARow';
import { advertisingSEO } from '../../lib/seo';

const ProgrammaticAdvertising = () => {
    return (
        <div>
            <Head>
                <title>{advertisingSEO.title}</title>
                <meta name="description" content={advertisingSEO.description} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={advertisingSEO.title} />
                <meta
                    property="og:description"
                    content={advertisingSEO.description}
                />
                <meta property="og:url" content={advertisingSEO.ogUrl} />
            </Head>

            <AppHeader
                leftColumnContent={ProgrammaticAdvertisingLeftColumn()}
                rightColumnContent={ProgrammaticAdvertisingRightColumn()}
            />

            <main>
                <AdvertisingIntroStats />
                <AdvertisingProcess />
                <TestimonialCarousel />
                <BehavioralTargeting />
                <ContextualDisplay />
                <NativeAdManagementImg />
                <Retargeting />
                <CTARow
                    heading="Stand Out in the Crowd"
                    subheading="Take advantage of our free tools"></CTARow>
            </main>
        </div>
    );
};

export default ProgrammaticAdvertising;

const ProgrammaticAdvertisingLeftColumn = () => {
    return (
        <div
            sx={{
                paddingTop: ['150px', '125px', '150px', '30px'],
                paddingBottom: ['150px', '150px', '175px', '30px'],
                paddingLeft: ['0px', '6%', '0px', '0px'],
                paddingRight: ['0px', '12%', '0px', '25px'],
            }}>
            <h1
                sx={{
                    color: '#fff',
                    marginBottom: '20px',
                }}>
                Expand Your Reach With Programmatic Advertising
            </h1>
            <CheckListItem bgColor="#fff" checkmarkColor="primary">
                <p sx={{ color: '#fff', fontSize: '24px', marginLeft: '10px' }}>
                    Manage your media buy in real-time
                </p>
            </CheckListItem>
            <CheckListItem bgColor="#fff" checkmarkColor="primary">
                <p sx={{ color: '#fff', fontSize: '24px', marginLeft: '10px' }}>
                    Cut down on wasted impressions
                </p>
            </CheckListItem>
            <CheckListItem bgColor="#fff" checkmarkColor="primary">
                <p sx={{ color: '#fff', fontSize: '24px', marginLeft: '10px' }}>
                    Increase your brand’s ROI
                </p>
            </CheckListItem>
            <Button variant="light" sx={{ marginTop: '20px' }}>
                Let&apos;s Work Together
            </Button>
        </div>
    );
};

const ProgrammaticAdvertisingRightColumn = () => {
    return (
        <div
            sx={{
                display: 'grid',
                justifyItems: 'center',
                position: 'relative',
                paddingX: '25px',
                paddingBottom: '75px',
            }}>
            <Image
                alt="Laptop with overlaying SEO metrics"
                src={AdverisingLaptop}
                width={611}
                height={538}
                quality={100}
            />
        </div>
    );
};
