/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource theme-ui */
import Head from 'next/head';
import { Container } from 'theme-ui';
import AppHeader from '../components/sections/AppHeader';

const CookiePolicy = () => {
    return (
        <>
            <Head>
                <title>Cookie Policy | Rank Fuse Digital Marketing</title>
                <meta
                    name="description"
                    content="This Cookie Policy explains what cookies are and how we use them, the types of cookies we use i.e, the information we collect"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Cookie Policy | Rank Fuse Digital Marketing"
                />
                <meta
                    property="og:description"
                    content="This Cookie Policy explains what cookies are and how we use them, the types of cookies we use i.e, the information we collect"
                />
                <meta
                    property="og:url"
                    content="https://rankfuse.com/cookie-policy"
                />
                <meta
                    property="og:image"
                    content="/images/RankFuse-OG-Img.jpg"
                />
            </Head>

            <AppHeader
                centerColumnContent={CookiePolicyCenterColumn()}
                type={'small'}
            />

            <main>
                <Container
                    sx={{
                        maxWidth: ['450px', '750px', '1000px'],
                        px: '20px',
                        py: '50px',
                        '& h3': {
                            my: '15px',
                        },
                    }}>
                    <div>
                        <h3>About this cookie policy</h3>
                        <div>
                            This Cookie Policy explains what cookies are and how
                            we use them, the types of cookies we use i.e, the
                            information we collect using cookies and how that
                            information is used, and how to control the cookie
                            preferences. For further information on how we use,
                            store, and keep your personal data secure, see our
                            Privacy Policy. You can at any time change or
                            withdraw your consent from the Cookie Declaration on
                            our website Learn more about who we are, how you can
                            contact us, and how we process personal data in our
                            Privacy Policy. Your consent applies to the
                            following domains: rankfuse.com
                        </div>
                        <h3>What are cookies ?</h3>
                        <div>
                            Cookies are small text files that are used to store
                            small pieces of information. They are stored on your
                            device when the website is loaded on your browser.
                            These cookies help us make the website function
                            properly, make it more secure, provide better user
                            experience, and understand how the website performs
                            and to analyze what works and where it needs
                            improvement.
                        </div>
                        <h3>How do we use cookies ?</h3>
                        <div>
                            As most of the online services, our website uses
                            first-party and third-party cookies for several
                            purposes. First-party cookies are mostly necessary
                            for the website to function the right way, and they
                            do not collect any of your personally identifiable
                            data. The third-party cookies used on our website
                            are mainly for understanding how the website
                            performs, how you interact with our website, keeping
                            our services secure, providing advertisements that
                            are relevant to you, and all in all providing you
                            with a better and improved user experience and help
                            speed up your future interactions with our website.
                        </div>
                        <h3>What types of cookies do we use ?</h3>
                        <div>
                            Essential: Some cookies are essential for you to be
                            able to experience the full functionality of our
                            site. They allow us to maintain user sessions and
                            prevent any security threats. They do not collect or
                            store any personal information. For example, these
                            cookies allow you to log-in to your account and add
                            products to your basket, and checkout securely.
                            Statistics: These cookies store information like the
                            number of visitors to the website, the number of
                            unique visitors, which pages of the website have
                            been visited, the source of the visit, etc. These
                            data help us understand and analyze how well the
                            website performs and where it needs improvement.
                            Marketing: Our website displays advertisements.
                            These cookies are used to personalize the
                            advertisements that we show to you so that they are
                            meaningful to you. These cookies also help us keep
                            track of the efficiency of these ad campaigns. The
                            information stored in these cookies may also be used
                            by the third-party ad providers to show you ads on
                            other websites on the browser as well. Functional:
                            TThese are the cookies that help certain
                            non-essential functionalities on our website. These
                            functionalities include embedding content like
                            videos or sharing content of the website on social
                            media platforms. Preferences: These cookies help us
                            store your settings and browsing preferences like
                            language preferences so that you have a better and
                            efficient experience on future visits to the
                            website.
                        </div>
                        <h3>How can I control the cookie preferences ?</h3>
                        <div>
                            Should you decide to change your preferences later
                            through your browsing session, you can click on the
                            "Privacy &amp; Cookie Policy" tab on your screen.
                            This will display the consent notice again enabling
                            you to change your preferences or withdraw your
                            consent entirely. In addition to this, different
                            browsers provide different methods to block and
                            delete cookies used by websites. You can change the
                            settings of your browser to block/delete the
                            cookies. To find out more about how to manage and
                            delete cookies, visit wikipedia.org,
                            www.allaboutcookies.org.
                        </div>
                    </div>
                </Container>
            </main>
        </>
    );
};

export default CookiePolicy;

const CookiePolicyCenterColumn = () => {
    return (
        <div
            sx={{
                paddingTop: ['200px', '200px', '125px', '200px'],
                paddingBottom: ['100px', '75px', '50px', '50px'],
                paddingLeft: ['0px', '6%', '0px', '0px'],
                paddingRight: ['0px', '12%', '0px', '25px'],
            }}>
            <h1
                sx={{
                    color: '#fff',
                    marginBottom: '20px',
                }}>
                CookiePolicy
            </h1>
        </div>
    );
};
