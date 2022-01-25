/** @jsxImportSource theme-ui */
import AppBgIcon from '../BgIcon';

import Link from 'next/link';

const IconListCard = ({
    heading,
    icon,
    children,
    link = '/',
    iconColor = 'primary',
}) => {
    return (
        <div
            sx={{
                bg: 'muted',
                borderRadius: '5px',
                boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.1)',
                padding: '30px',
            }}
        >
            <AppBgIcon iconName={icon} color={iconColor} />
            <Link href={link}>
                <a>
                    <h3
                        sx={{
                            marginTop: '15px',
                            marginBottom: '5px',
                            color: iconColor,
                            '&:hover': {
                                transform: 'scale(1.06)',
                                cursor: 'pointer',
                                display: 'inline-block',
                                transition: 'all 0.2s ease-out',
                                color: iconColor,
                            },
                        }}
                    >
                        {heading}
                    </h3>
                </a>
            </Link>
            <div
                sx={{
                    width: '100%',
                    maxWidth: '90px',
                    height: '3px',
                    bg: iconColor,
                    marginBottom: '20px',
                }}
            ></div>
            {children}
            <Link href={link}>
                <a>
                    <p
                        sx={{
                            color: iconColor,
                            '&:hover': {
                                transform: 'scale(1.06)',
                                cursor: 'pointer',
                                display: 'inline-block',
                                transition: 'all 0.2s ease-out',
                                color: iconColor,
                            },
                        }}
                    >
                        Read More &#8594;
                    </p>
                </a>
            </Link>
        </div>
    );
};

export default IconListCard;
