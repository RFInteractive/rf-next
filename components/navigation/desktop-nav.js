/** @jsxImportSource theme-ui */
import { Container, Button, Grid } from 'theme-ui';

import Link from 'next/link';

const DesktopNav = () => {
    return (
        <nav
            sx={{
                display: ['none', 'none', 'block', 'block'],
                py: '12px',
                mb: '-77px',
                zIndex: '100',
                position: 'relative',
            }}
        >
            <Container sx={{ maxWidth: '1440px' }}>
                <Grid
                    gap={0}
                    columns={'.5fr 3fr 1fr'}
                    sx={{ alignItems: 'center', justifyItems: 'center' }}
                >
                    <h1>Logo</h1>
                    <Grid columns={'repeat(3, 1fr)'}>
                        <Link href="/seo-services">
                            <a>SEO</a>
                        </Link>
                        <Link href="/seo-content">
                            <a>Content</a>
                        </Link>
                        <Link href="/web-design-and-development">
                            <a>Design & Dev</a>
                        </Link>
                    </Grid>
                    <Link href="/">
                        <a sx={{ variant: 'buttons.primary' }}>Get Started</a>
                    </Link>
                </Grid>
            </Container>
        </nav>
    );
};

export default DesktopNav;
