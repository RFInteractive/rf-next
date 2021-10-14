/** @jsxImportSource theme-ui */
import Image from 'next/image';

import TwoColumnVector from '../../layout/twoColumnVector';
import keywordResearchLeaningLaptop from '../../../public/images/keyword-research-leaning-laptop.png';

const KeywordResearch = () => {
    return (
        <section id="keywordResearch" sx={{ pb: ['50px', null, null, null] }}>
            <TwoColumnVector
                vectorSide={'right'}
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
                paddingRight: ['0px', '0px', '60px', '30px'],
            }}
        >
            <h3 sx={{ variant: 'text.h2', marginBottom: '10px' }}>
                Content Development
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
            <p>
                Our team of dedicated writers has valuable experience developing
                a variety of different types of content. Whether you need a
                blog, a page, an infographic, or an e-book, we have the
                experience needed to create relevant content that will engage
                your audience and keep search engines happy.
            </p>
            <p sx={{ margin: '20px 0px 35px' }}>
                After hundreds of website audits an thousands of reports we
                understand that quality is a moving target and the bar seems to
                be raised higher and higher every day.
            </p>
        </div>
    );
};

const KeywordResearchRightColumnContent = () => {
    return (
        <div
            sx={{
                display: 'grid',
                justifyItems: 'center',
                position: 'relative',
                my: ['100px', '50px', '100px', '100px'],
            }}
            className="boxShadowRight--rotated"
        >
            <Image
                alt="Content strategy calendar"
                src={keywordResearchLeaningLaptop}
                width={554}
                height={527}
                quality={100}
            />
        </div>
    );
};

export default KeywordResearch;