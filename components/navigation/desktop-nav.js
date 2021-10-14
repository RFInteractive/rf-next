/** @jsxImportSource theme-ui */
import { Container, Grid } from 'theme-ui';

import Link from 'next/link';
import Image from 'next/image';

const DesktopNav = () => {
    return (
        <nav
            sx={{
                display: ['none', 'none', 'block', 'block'],
                paddingTop: '8px',
                paddingBottom: '12px',
                px: '30px',
                mt: '10px',
                mb: '-95px',
                zIndex: '100',
                position: 'relative',
                variant: 'wrappers.navWrapper',
            }}
        >
            <Container sx={{ maxWidth: '1400px' }}>
                <Grid
                    gap={0}
                    columns={[
                        null,
                        null,
                        '.75fr 2.5fr .75fr',
                        '.75fr 2.5fr 1.75fr',
                    ]}
                    sx={{ alignItems: 'center', justifyItems: 'center' }}
                >
                    <Link href="/">
                        <a sx={{ justifySelf: 'start', cursor: 'pointer' }}>
                            <Image
                                src="/images/placeholder-logo.svg"
                                alt="Rank Fuse Digital Marketing Logo"
                                width={208}
                                height={54}
                            />
                        </a>
                    </Link>
                    <Grid columns={'repeat(5, max-content)'} gap={'25px'}>
                        <Link href="/seo-services">
                            <a className="navLink">SEO</a>
                        </Link>
                        <Link href="/seo-content">
                            <a className="navLink">Content</a>
                        </Link>
                        <Link href="/web-design-and-development">
                            <a className="navLink">Design & Dev</a>
                        </Link>
                        <Link href="/web-design-and-development">
                            <a className="navLink">Advertising</a>
                        </Link>
                        <Link href="/web-design-and-development">
                            <a className="navLink">Resources</a>
                        </Link>
                    </Grid>
                    <Link href="/">
                        <a id="navCTABtn">Get Started</a>
                    </Link>
                </Grid>
            </Container>
        </nav>
    );
};

export default DesktopNav;
