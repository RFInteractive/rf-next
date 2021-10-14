/** @jsxImportSource theme-ui */

import Image from 'next/image';
import { Button } from 'theme-ui';

import TwoColumnVector from '../../layout/twoColumnVector';
import blogLaptop from '../../../public/images/blog-laptop.png';

const KeywordResearch = () => {
    return (
        <section id="keywordResearch" sx={{ pb: ['50px', null, null, null] }}>
            <TwoColumnVector
                vectorSide={'left'}
                leftColumnContent={KeywordResearchLeftColumnContent()}
                rightColumnContent={KeywordResearchRightColumnContent()}
                sectionName={'keywordResearch'}
            />
        </section>
    );
};

const KeywordResearchLeftColumnContent = () => {
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
                src={blogLaptop}
                width={695}
                height={536}
                quality={100}
            />
        </div>
    );
};

const KeywordResearchRightColumnContent = () => {
    return (
        <div
            sx={{
                paddingLeft: ['0px', '0px', '75px', '60px'],
            }}
        >
            <h3 sx={{ variant: 'text.h2', marginBottom: '10px' }}>
                Keyword Research
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
                At Rank Fuse, we utilize a variety of SEO tools that allow us to
                see how you are currently ranking for the keywords you want to
                target as well as new opportunities. We combine keyword research
                with competitor analysis to help you outrank your competitors.
            </p>
            <p sx={{ paddingBottom: '30px' }}>
                Once we have identified the keywords we need to target, we can
                inject them into the copy on your website, your paid ads, and
                your off-page SEO efforts.
            </p>
            <Button variant="primary">Let&apos;s Chat</Button>
        </div>
    );
};

export default KeywordResearch;
