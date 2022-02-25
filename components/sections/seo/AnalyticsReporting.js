/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource theme-ui */
import { Button } from 'theme-ui';
import Image from 'next/image';

import TwoColumnVector from '../../layout/TwoColumnVector';
import analyticsLaptop from '../../../public/images/analytics-laptop.png';
import MotionFadeGrow from '../../animations/MotionFadeGrow';

const AnalyticsReportingRow = () => {
    return (
        <section id="analyticsReporting">
            <TwoColumnVector
                vectorSide={'right'}
                leftColumnContent={AnalyticsReportingLeftColumnContent()}
                rightColumnContent={AnalyticsReportingRightColumnContent()}
                sectionName={'analyticsReporting'}
            />
        </section>
    );
};

const AnalyticsReportingLeftColumnContent = () => {
    return (
        <div
            sx={{
                paddingRight: ['0px', '0px', '75px', '75px'],
            }}>
            <h3 sx={{ marginBottom: '10px' }}>Analytics & Reporting</h3>
            <div
                sx={{
                    width: '100%',
                    maxWidth: '90px',
                    height: '3px',
                    bg: 'accent',
                    marginBottom: '30px',
                }}></div>
            <p>
                Rank Fuse opened in Overland Park, Kansas, in 2015. Since then,
                our agency as been grown to help many businesses expand their
                sales and customer base.
            </p>
            <p sx={{ margin: '20px 0px 35px' }}>
                Whether you are looking for organic search ranking help, paid
                search, programmatic, email marketing, content, web development,
                or a combination of these things, our team is well-equipped to
                deliver the highest-quality.
            </p>
            <MotionFadeGrow delay={0.5} threshold={1}>
                <Button variant="primary">More About Us</Button>
            </MotionFadeGrow>
        </div>
    );
};

const AnalyticsReportingRightColumnContent = () => {
    return (
        <div
            sx={{
                display: 'grid',
                justifyItems: 'center',
                position: 'relative',
            }}>
            <MotionFadeGrow threshold={0.8}>
                <Image
                    src={analyticsLaptop}
                    alt="laptop with overlaying analytics information"
                />
            </MotionFadeGrow>
        </div>
    );
};

export default AnalyticsReportingRow;
