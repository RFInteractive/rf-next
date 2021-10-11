/** @jsxImportSource theme-ui */
import AppIcon from '../appIcon';

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
            <AppIcon iconName={icon} color={iconColor} />
            <Link href={link}>
                <a
                    sx={{
                        '&:hover': {
                            transform: 'scale(1.02)',
                            cursor: 'pointer',
                            display: 'inline-block',
                            transition: 'all 0.2s ease-out',
                            color: iconColor,
                        },
                    }}
                >
                    <h3
                        sx={{
                            variant: 'text.h3',
                            marginTop: '15px',
                            marginBottom: '5px',
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
                <a
                    sx={{
                        color: iconColor,
                        '&:hover': {
                            transform: 'scale(1.1)',
                            cursor: 'pointer',
                            display: 'inline-block',
                            transition: 'all 0.2s ease-out',
                        },
                    }}
                >
                    Read More &#8594;
                </a>
            </Link>
        </div>
    );
};

export default IconListCard;
