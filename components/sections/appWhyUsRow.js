/** @jsxImportSource theme-ui */

import Image from 'next/image';
import { Grid } from 'theme-ui';

import TwoColumnVector from '../layout/twoColumnVector';
import leaningLaptop from '../../public/images/leaning-laptop.png';

import StatCard from '../cards/statCard';

const WhyUsRow = () => {
    return (
        <section id="homepageBenefits" sx={{ pb: ['50px', null, null, null] }}>
            <TwoColumnVector
                vectorSide={'left'}
                leftColumnContent={WhyUsLeftColumnContent()}
                rightColumnContent={WhyUsRightColumnContent()}
                sectionName={'homepageBenefits'}
            />
        </section>
    );
};

const WhyUsLeftColumnContent = () => {
    return (
        <div
            sx={{
                display: 'grid',
                justifyItems: 'center',
                position: 'relative',
                pb: '30px',
                my: ['100px', '50px', '100px', '100px'],
            }}
            className="boxShadowLeft--rotated"
        >
            <Image
                alt="Laptop with overlaying SEO metrics"
                src={leaningLaptop}
                width={587}
                height={558}
                quality={100}
            />
        </div>
    );
};

const WhyUsRightColumnContent = () => {
    return (
        <div
            sx={{
                paddingLeft: ['0px', '0px', '75px', '75px'],
            }}
        >
            <h3 sx={{ variant: 'text.h2', marginBottom: '10px' }}>Why Us?</h3>
            <div
                sx={{
                    width: '100%',
                    maxWidth: '90px',
                    height: '3px',
                    bg: 'accent',
                    marginBottom: '30px',
                }}
            ></div>
            <p>
                In the rapidly evolving world of online marketing we pride
                ourselves on the ability to be agile and continue to test for
                growth and knowledge. We prove our value every day, which is why
                so many of our clients have been with us for years.
            </p>
            <Grid
                columns={[2, 4, 2, 2]}
                gap={'40px'}
                sx={{
                    marginTop: '30px',
                    justifyItems: 'start',
                    justifyItems: ['center', 'center', 'start', 'start'],
                    maxWidth: ['100%', '100%', '475px', '475px'],
                }}
            >
                <StatCard
                    statistic="90%"
                    subheading="Avg. Traffic Increase"
                ></StatCard>
                <StatCard
                    statistic="500+"
                    subheading="Blog Posts Written"
                ></StatCard>
                <StatCard
                    statistic="< 2sec"
                    subheading="Avg. Site Load Time"
                ></StatCard>
                <StatCard
                    statistic="99.9%"
                    subheading="Website Uptime"
                ></StatCard>
            </Grid>
        </div>
    );
};

export default WhyUsRow;
