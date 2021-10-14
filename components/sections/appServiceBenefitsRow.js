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
                            <p sx={{ marginLeft: '10px' }}>
                                Increase your traffic
                            </p>
                        </CheckListItem>
                        <CheckListItem bgColor={'iconPrimary'}>
                            <p sx={{ marginLeft: '10px' }}>
                                Monthly insights & reports
                            </p>
                        </CheckListItem>
                        <CheckListItem bgColor={'iconPrimary'}>
                            <p sx={{ marginLeft: '10px' }}>
                                89% avg. increase in 6 mo.
                            </p>
                        </CheckListItem>
                    </IconListCard>
                    <IconListCard
                        heading="Connect With Users"
                        icon="chat"
                        iconColor={'iconSecondary'}
                        link="/seo-content"
                    >
                        <p sx={{ paddingBottom: '10px' }}>
                            Our top notch content team knows what users are
                            looking for
                        </p>
                        <CheckListItem bgColor={'iconSecondary'}>
                            <p sx={{ marginLeft: '10px' }}>Reach more users</p>
                        </CheckListItem>
                        <CheckListItem bgColor={'iconSecondary'}>
                            <p sx={{ marginLeft: '10px' }}>
                                Research backed keywords
                            </p>
                        </CheckListItem>
                        <CheckListItem bgColor={'iconSecondary'}>
                            <p sx={{ marginLeft: '10px' }}>Find your niche</p>
                        </CheckListItem>
                    </IconListCard>
                    <IconListCard
                        heading="Improve Your Site"
                        icon="computer"
                        iconColor={'iconTertiary'}
                        link="/web-design-and-development"
                    >
                        <p sx={{ paddingBottom: '10px' }}>
                            We know the best tools and practices to get you
                            going
                        </p>
                        <CheckListItem bgColor={'iconTertiary'}>
                            <p sx={{ marginLeft: '10px' }}>
                                Double your site speed
                            </p>
                        </CheckListItem>
                        <CheckListItem bgColor={'iconTertiary'}>
                            <p sx={{ marginLeft: '10px' }}>
                                Increase your conversions
                            </p>
                        </CheckListItem>
                        <CheckListItem bgColor={'iconTertiary'}>
                            <p sx={{ marginLeft: '10px' }}>
                                99.9% uptime and backups
                            </p>
                        </CheckListItem>
                    </IconListCard>
                </Grid>
            </Container>
        </section>
    );
};

export default ServicesBenefitsRow;
