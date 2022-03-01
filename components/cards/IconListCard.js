/** @jsxImportSource theme-ui */
import AppBgIcon from '../BgIcon';
import { useColorMode } from 'theme-ui';

import Link from 'next/link';

const IconListCard = ({
    heading,
    icon,
    children,
    link = '/',
    iconColor = 'primary',
}) => {
    const [mode, changeMode] = useColorMode();

    return (
        <div
            sx={{
                bg: 'muted',
                borderRadius: '5px',
                boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.1)',
                padding: '30px',
            }}>
            <AppBgIcon iconName={icon} color={iconColor} />
            <Link href={link} scroll={false}>
                <a>
                    <h3
                        sx={{
                            marginTop: '15px',
                            marginBottom: '5px',
                            color: mode === 'deep' ? 'alwaysLight' : iconColor,
                            '&:hover': {
                                transform: 'scale(1.06)',
                                cursor: 'pointer',
                                display: 'inline-block',
                                transition: 'all 0.2s ease-out',
                                color: iconColor,
                            },
                        }}>
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
                }}></div>
            {children}
            <Link href={link} scroll={false}>
                <a>
                    <p
                        sx={{
                            color: mode === 'deep' ? 'alwaysLight' : iconColor,
                            '&:hover': {
                                transform: 'scale(1.06)',
                                cursor: 'pointer',
                                display: 'inline-block',
                                transition: 'all 0.2s ease-out',
                                color: iconColor,
                            },
                        }}>
                        Read More &#8594;
                    </p>
                </a>
            </Link>
        </div>
    );
};

export default IconListCard;
