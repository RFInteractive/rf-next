/** @jsxImportSource theme-ui */
import { Container, Grid } from 'theme-ui';

import IconListCard from '../cards/iconListCard';
import CheckListItem from '../checkListItem';

const ServicesBenefitsRow = () => {
    return (
        <section
            id="homepageBenefits"
            sx={{ marginTop: ['0px', '0px', '25px', '0px'] }}
        >
            <Container
                sx={{ maxWidth: ['450px', '600px', '1290px'], px: '30px' }}
            >
                <Grid
                    columns={[1, 1, 3, 3]}
                    gap={['35px', '35px', '3%', '60px']}
                >
                    <IconListCard
                        heading="Get More Traffic"
                        icon="seo"
                        iconColor={'iconPrimary'}
                        link="/seo-services"
                    >
                        <p sx={{ paddingBottom: '10px' }}>
                            Our SEO services can help you get you where you need
                            to be
                        </p>
                        <CheckListItem bgColor={'iconPrimary'}>
                            Increase your traffic
                        </CheckListItem>
                        <CheckListItem bgColor={'iconPrimary'}>
                            Monthly insights & reports
                        </CheckListItem>
                        <CheckListItem bgColor={'iconPrimary'}>
                            89% avg. increase in 6 mo.
                        </CheckListItem>
                    </IconListCard>
                    <IconListCard
                        heading="Connect With Users"
                        icon="chat"
                        iconColor={'iconSecondary'}
                    >
                        <p sx={{ paddingBottom: '10px' }}>
                            Our top notch content team knows what users are
                            looking for
                        </p>
                        <CheckListItem bgColor={'iconSecondary'}>
                            Reach more users
                        </CheckListItem>
                        <CheckListItem bgColor={'iconSecondary'}>
                            Research backed keywords
                        </CheckListItem>
                        <CheckListItem bgColor={'iconSecondary'}>
                            Find your niche
                        </CheckListItem>
                    </IconListCard>
                    <IconListCard
                        heading="Improve Your Site"
                        icon="computer"
                        iconColor={'iconTertiary'}
                    >
                        <p sx={{ paddingBottom: '10px' }}>
                            We know the best tools and practices to get you
                            going
                        </p>
                        <CheckListItem bgColor={'iconTertiary'}>
                            Double your site speed
                        </CheckListItem>
                        <CheckListItem bgColor={'iconTertiary'}>
                            Increase your conversions
                        </CheckListItem>
                        <CheckListItem bgColor={'iconTertiary'}>
                            99.9% uptime and backups
                        </CheckListItem>
                    </IconListCard>
                </Grid>
            </Container>
        </section>
    );
};

export default ServicesBenefitsRow;
