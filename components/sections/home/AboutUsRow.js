/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource theme-ui */
import { Button } from 'theme-ui';
import Link from 'next/link';

import TwoColumnVector from '../../layout/TwoColumnVector';

const AboutUsRow = () => {
    return (
        <section id="aboutUs">
            <TwoColumnVector
                vectorSide={'right'}
                leftColumnContent={AboutUsLeftColumnContent()}
                rightColumnContent={AboutUsRightColumnContent()}
                sectionName={'aboutUs'}
            />
        </section>
    );
};

const AboutUsLeftColumnContent = () => {
    return (
        <div
            sx={{
                paddingRight: ['0px', '0px', '60px', '30px'],
            }}>
            <h3 sx={{ marginBottom: '10px' }}>About Us</h3>
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
                our agency has continued to grow, allowing us to help many
                businesses expand their sales and customer base.
            </p>
            <p sx={{ margin: '20px 0px 35px' }}>
                Whether you are looking for organic search ranking help, paid
                search, programmatic, email marketing, content, web development,
                or a combination of these services, our team is well-equipped to
                deliver the highest-quality campaigns and service.
            </p>
            <Link href="/about" scroll={false}>
                <a>
                    <Button variant="primary">More About Us</Button>
                </a>
            </Link>
        </div>
    );
};

const AboutUsRightColumnContent = () => {
    return (
        <div
            sx={{
                display: 'grid',
                justifyItems: 'center',
                position: 'relative',
                pb: '30px',
                my: ['50px', '50px', '100px', '100px'],
            }}
            className="boxShadowRight">
            <img
                src="/images/teamPicture.jpg"
                alt="Rank Fuse team"
                sx={{
                    width: '90%',
                    maxWidth: ['400px', '500px', '400px', '450px'],
                    borderRadius: '30px',
                }}
            />
        </div>
    );
};

export default AboutUsRow;
