/** @jsxImportSource theme-ui */
import Link from 'next/link';
import Image from 'next/image';
import { useThemeUI } from 'theme-ui';

const Footer = () => {
    const { theme } = useThemeUI();

    const gradientLight = theme.rawColors.gradientLight;
    const gradientDark = theme.rawColors.gradientDark;

    return (
        <footer
            sx={{
                paddingTop: '75px',
                paddingBottom: '25px',
                display: 'grid',
                justifyContent: 'center',
                background: `linear-gradient(-30deg, ${gradientLight}, ${gradientDark})`,
            }}
        >
            <Link href="/">
                <a sx={{ justifySelf: 'start', cursor: 'pointer' }}>
                    <Image
                        src="/images/placeholder-logo.svg"
                        alt="Rank Fuse Digital Marketing Logo"
                        width={386}
                        height={100}
                    />
                </a>
            </Link>
            <FooterPhone />
            <FooterEmail />
            <FooterSocials />
            <FooterMenu />
            <FooterCopyright />
        </footer>
    );
};

export default Footer;

const FooterPhone = () => {
    return (
        <div
            id="footerPhone"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                marginY: '20px',
            }}
        >
            <a
                href="tel:913.270.6770"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#fff',
                }}
            >
                <Image
                    width={26}
                    height={25}
                    src="/icons/icon-phone.svg"
                    alt="phone icon"
                />
                <span sx={{ marginLeft: '15px' }}>(913) 270-6670</span>
            </a>
        </div>
    );
};

const FooterEmail = () => {
    return (
        <div
            id="footerEmail"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '20px',
            }}
        >
            <a
                href="mailto:support@rankfuse.com"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#fff',
                }}
            >
                <Image
                    width={26}
                    height={25}
                    src="/icons/icon-envelope.svg"
                    alt="phone icon"
                />
                <span sx={{ marginLeft: '15px' }}>support@rankfuse.com</span>
            </a>
        </div>
    );
};

const FooterSocials = () => {
    return (
        <div
            id="footerSocials"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginY: '20px',
            }}
        >
            <a
                href="https://www.facebook.com/rankfuse/"
                target="_blank"
                sx={{ marginX: '15px' }}
                rel="noreferrer"
            >
                <Image
                    src="/icons/icon-facebook.svg"
                    width={24}
                    height={35.8}
                    alt="Facebook logo"
                />
            </a>

            <a
                href="https://www.instagram.com/rankfuse/?hl=en"
                target="_blank"
                sx={{ marginX: '15px' }}
                rel="noreferrer"
            >
                <Image
                    src="/icons/icon-instagram.svg"
                    width={37}
                    height={42}
                    alt="Facebook logo"
                />
            </a>

            <a
                href="https://twitter.com/rankfuse/"
                target="_blank"
                sx={{ marginX: '15px' }}
                rel="noreferrer"
            >
                <Image
                    src="/icons/icon-twitter.svg"
                    width={35}
                    height={35}
                    alt="Facebook logo"
                />
            </a>
        </div>
    );
};

const FooterMenu = () => {
    return (
        <div
            id="footerMenu"
            sx={{
                display: 'flex',
                flexDirection: ['column', 'row', 'row', 'row'],
                alignItems: 'center',
            }}
        >
            <Link href="/about">
                <a
                    sx={{
                        color: '#fff',
                        '&:hover': { cursor: 'pointer' },
                        marginY: '10px',
                    }}
                >
                    About
                </a>
            </Link>
            <span
                sx={{
                    marginX: '15px',
                    color: '#fff',
                    display: ['none', 'initial'],
                }}
            >
                |
            </span>
            <Link href="/contact">
                <a
                    sx={{
                        color: '#fff',
                        '&:hover': { cursor: 'pointer' },
                        marginY: '10px',
                    }}
                >
                    Contact
                </a>
            </Link>
            <span
                sx={{
                    marginX: '15px',
                    color: '#fff',
                    display: ['none', 'initial'],
                }}
            >
                |
            </span>
            <Link href="/seo-services">
                <a
                    sx={{
                        color: '#fff',
                        '&:hover': { cursor: 'pointer' },
                        marginY: '10px',
                    }}
                >
                    SEO
                </a>
            </Link>
            <span
                sx={{
                    marginX: '15px',
                    color: '#fff',
                    display: ['none', 'initial'],
                }}
            >
                |
            </span>
            <Link href="/seo-content">
                <a
                    sx={{
                        color: '#fff',
                        '&:hover': { cursor: 'pointer' },
                        marginY: '10px',
                    }}
                >
                    Content
                </a>
            </Link>
            <span
                sx={{
                    marginX: '15px',
                    color: '#fff',
                    display: ['none', 'initial'],
                }}
            >
                |
            </span>
            <Link href="/web-design-and-development">
                <a
                    sx={{
                        color: '#fff',
                        '&:hover': { cursor: 'pointer' },
                        marginY: '10px',
                    }}
                >
                    Web Dev
                </a>
            </Link>
        </div>
    );
};

const FooterCopyright = () => {
    return (
        <div sx={{ marginY: '25px' }}>
            <p
                sx={{
                    color: '#fff',
                    textAlign: 'center',
                    fontSize: '16px',
                }}
            >
                © 2015 - 2021 All rights reserved{' '}
            </p>
        </div>
    );
};