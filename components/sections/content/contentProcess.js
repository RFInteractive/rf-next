/** @jsxImportSource theme-ui */
import { Container, Grid } from 'theme-ui';
import ProcessCard from '../../cards/processCard';

const ContentProcess = () => {
    return (
        <section
            id="seoProcess"
            sx={{
                marginBottom: ['25px', '25px', '100px', '100px'],
                display: 'grid',
                justifyItems: 'center',
            }}
        >
            <h2 sx={{ variant: 'text.h2', marginBottom: '10px' }}>
                Our Process
            </h2>
            <div
                sx={{
                    width: '100%',
                    maxWidth: '90px',
                    height: '3px',
                    bg: 'accent',
                    marginBottom: '75px',
                }}
            ></div>
            <Container
                sx={{ maxWidth: ['450px', '600px', '1290px'], px: '30px' }}
            >
                <Grid
                    columns={[1, 1, 3, 3]}
                    gap={['50px', '50px', '3%', '60px']}
                >
                    <ProcessCard heading="Chat With Us" icon="chat" number="1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                    </ProcessCard>
                    <ProcessCard heading="Research" icon="research" number="2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                    </ProcessCard>
                    <ProcessCard heading="Delivery" icon="delivery" number="3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                    </ProcessCard>
                </Grid>
            </Container>
        </section>
    );
};

export default ContentProcess;
