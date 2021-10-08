/** @jsxImportSource theme-ui */
import { Grid, Container } from 'theme-ui';

const AppHeader = ({ leftColumnContent, rightColumnContent }) => {
    return (
        <header
            sx={{
                backgroundImage: `url('/images/header-bg-vector.svg')`,
                backgroundSize: ['cover', 'cover', 'contain'],
                backgroundPosition: 'left top',
                backgroundRepeat: 'no-repeat',
                minHeight: '500px;',
            }}
        >
            <Container sx={{ maxWidth: '1240px', px: '25px' }}>
                <Grid columns={'1.5fr 1fr'} sx={{ alignItems: 'center' }}>
                    {leftColumnContent}
                    {rightColumnContent}
                </Grid>
            </Container>
        </header>
    );
};

export default AppHeader;
