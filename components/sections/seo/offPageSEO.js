/** @jsxImportSource theme-ui */
import TwoColumnVector from '../../layout/twoColumnVector';
import CheckListItem from '../../checkListItem';

const OffPageSEO = () => {
    return (
        <section id="offPageSEO" sx={{ pb: ['50px', null, null, null] }}>
            <TwoColumnVector
                vectorSide={'right'}
                leftColumnContent={OffPageSEOLeftColumnContent()}
                rightColumnContent={OffPageSEORightColumnContent()}
                sectionName={'offPageSEO'}
            />
        </section>
    );
};

const OffPageSEOLeftColumnContent = () => {
    return (
        <div
            sx={{
                paddingRight: ['0px', '0px', '60px', '30px'],
            }}
        >
            <h3 sx={{ variant: 'text.h2', marginBottom: '10px' }}>
                Off-Page SEO
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
                Going beyond your website to enhance the perception of your
                brand and search rankings across the web involves influencing
                search engine algorithm factors beyond your immediate site code
                and content.
            </p>
            <p sx={{ margin: '20px 0px 35px' }}>
                We are dedicated to the process and work with many clients
                directly to improve domain authority and expand their digital
                footprint for long-term SEO wins.
            </p>
        </div>
    );
};

const OffPageSEORightColumnContent = () => {
    return (
        <div
            sx={{
                position: 'relative',
                marginTop: ['0px', '50px', '100px', '100px'],
                marginBottom: ['0px', '50px', '100px', '100px'],
                display: 'grid',
                justifyContent: ['center', 'center', 'start', 'start'],
                paddingLeft: [null, null, '75px', '75px'],
            }}
        >
            <div
                sx={{
                    backgroundColor: 'muted',
                    borderRadius: '20px',
                    paddingY: '30px',
                    paddingX: '50px',
                    maxWidth: '425px',
                    boxShadow: '20px 30px 60px rgba(0, 0, 0, 0.12)',
                }}
            >
                <CheckListItem bgColor="primary" checkmarkColor="#fff">
                    <p sx={{ marginLeft: '10px', fontSize: '18px' }}>
                        Publication Outreach
                    </p>
                </CheckListItem>
                <CheckListItem bgColor="primary" checkmarkColor="#fff">
                    <p sx={{ marginLeft: '10px', fontSize: '18px' }}>
                        Influencer Outreach
                    </p>
                </CheckListItem>
                <CheckListItem bgColor="primary" checkmarkColor="#fff">
                    <p sx={{ marginLeft: '10px', fontSize: '18px' }}>
                        Public Relations
                    </p>
                </CheckListItem>
                <CheckListItem bgColor="primary" checkmarkColor="#fff">
                    <p sx={{ marginLeft: '10px', fontSize: '18px' }}>
                        Social Media
                    </p>
                </CheckListItem>
                <CheckListItem bgColor="primary" checkmarkColor="#fff">
                    <p sx={{ marginLeft: '10px', fontSize: '18px' }}>
                        Content Strategy
                    </p>
                </CheckListItem>
                <CheckListItem bgColor="primary" checkmarkColor="#fff">
                    <p sx={{ marginLeft: '10px', fontSize: '18px' }}>
                        Link Building
                    </p>
                </CheckListItem>
            </div>
        </div>
    );
};

export default OffPageSEO;
