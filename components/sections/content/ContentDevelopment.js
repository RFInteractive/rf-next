/** @jsxImportSource theme-ui */
import Image from 'next/image';

import TwoColumnVector from '../../layout/TwoColumnVector';
import keywordResearchLeaningLaptop from '../../../public/images/keyword-research-leaning-laptop.png';
import MotionFadeGrow from '../../animations/MotionFadeGrow';

const ContentDevelopment = () => {
    return (
        <section id="contentDevelopment">
            <TwoColumnVector
                vectorSide={'right'}
                leftColumnContent={ContentDevelopmentLeftColumnContent()}
                rightColumnContent={ContentDevelopmentRightColumnContent()}
                sectionName={'contentDevelopment'}
            />
        </section>
    );
};

const ContentDevelopmentLeftColumnContent = () => {
    return (
        <div
            sx={{
                paddingRight: ['0px', '0px', '60px', '30px'],
            }}>
            <h3 sx={{ marginBottom: '10px' }}>Content Development</h3>
            <div
                sx={{
                    width: '100%',
                    maxWidth: '90px',
                    height: '3px',
                    bg: 'accent',
                    marginBottom: '30px',
                }}></div>
            <p>
                Well-researched, well-written content is pivotal. Our team of
                dedicated writers has valuable experience developing various
                different types of content. Whether you need a blog, page,
                infographic, or e-book, we have the experience needed to create
                relevant content that engages your audience and keeps search
                engines happy.
            </p>
            <p sx={{ margin: '20px 0px 35px' }}>
                After developing hundreds of pieces of content in our seven
                years of business, we know just what each piece will take to get
                from concept to published.
            </p>
        </div>
    );
};

const ContentDevelopmentRightColumnContent = () => {
    return (
        <div
            sx={{
                display: 'grid',
                justifyItems: 'center',
                position: 'relative',
                my: ['100px', '50px', '100px', '100px'],
            }}
            className="boxShadowRight--rotated">
            <MotionFadeGrow threshold={0.6}>
                <Image
                    alt="Content strategy calendar"
                    src={keywordResearchLeaningLaptop}
                    width={554}
                    height={527}
                    quality={100}
                />
            </MotionFadeGrow>
        </div>
    );
};

export default ContentDevelopment;
