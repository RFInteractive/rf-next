/** @jsxImportSource theme-ui */
import { Grid } from 'theme-ui';
import Link from 'next/link';
import Image from 'next/image';

const HeadshotCard = ({ imgSrc, heading, subheading, link }) => {
    return (
        <div
            sx={{
                transition: 'all 0.2s ease-out',
                '&:hover': {
                    transform: 'scale(1.02)',
                },
            }}
        >
            <Link href={link}>
                <a>
                    <Grid sx={{ justifyItems: 'center' }}>
                        <div>
                            <Image
                                src={imgSrc}
                                width={250}
                                height={250}
                                alt={`Image of ${heading}`}
                                quality={90}
                            />
                        </div>
                        <h3
                            sx={{
                                color: 'text',
                                textAlign: 'center',
                                fontSize: '24px',
                                fontWeight: '900',
                            }}
                        >
                            {heading}
                        </h3>
                        <h4
                            sx={{
                                color: 'text',
                                textAlign: 'center',
                                fontSize: '18px',
                            }}
                        >
                            {subheading}
                        </h4>
                    </Grid>
                </a>
            </Link>
        </div>
    );
};

export default HeadshotCard;
