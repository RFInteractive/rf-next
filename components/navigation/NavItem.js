/** @jsxImportSource theme-ui */
import { lighten } from '@theme-ui/color';
import { useThemeUI } from 'theme-ui';

import Link from 'next/link';

const NavItem = ({ link = '/', heading, icon = 'seo', children }) => {
    const { theme } = useThemeUI();

    const primaryColor = theme.rawColors.primary;

    return (
        <Link href={link}>
            <a>
                <div
                    sx={{
                        bg: 'muted',
                        padding: '15px',
                        borderRadius: '10px',
                        transition: 'all 0.2s ease-out',
                        display: 'grid',
                        gap: '7px',
                        gridTemplateColumns: '1fr 4fr',
                        alignItems: 'center',
                        '&:hover': {
                            bg: lighten(primaryColor, 0.3),
                            '& .navItemIconBg': {
                                bg: primaryColor,
                                fill: 'alwaysLight',
                                stroke: 'alwaysLight',
                            },
                        },
                        '& .navItemIconBg': {
                            fill: 'primary',
                            stroke: 'primary',
                        },
                    }}
                >
                    <div
                        className="navItemIconBg"
                        sx={{
                            bg: lighten(primaryColor, 0.3),
                            maxWidth: '60px',
                            maxHeight: '60px',
                            padding: '15px',
                            borderRadius: '50%',
                        }}
                    >
                        <NavItemIcon icon={icon} />
                    </div>
                    <div sx={{ '*': { color: 'text' } }}>
                        <h3
                            sx={{
                                fontSize: '18px',
                                fontWeight: '600',
                            }}
                        >
                            {heading}
                        </h3>
                        <p sx={{ fontSize: '16px', lineHeight: '1.2em' }}>
                            {children}
                        </p>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default NavItem;

const NavItemIcon = ({ icon }) => {
    if (icon === 'seo') {
        return (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.42857 11.1429C10.7014 11.1429 11.6177 12.426 12.588 13.7837C13.7126 15.3583 14.988 17.1429 17.1429 17.1429C22.0029 17.1429 23.8114 7.89429 24 6.85714L22.3131 6.55029C21.9 8.81314 20.052 15.4286 17.1429 15.4286C15.87 15.4286 14.9537 14.1454 13.9834 12.7877C12.8589 11.2131 11.5834 9.42857 9.42857 9.42857C5.84057 9.42857 3.04714 15.7749 1.71429 19.5103V0H0V22.2857C0.000453837 22.7402 0.181211 23.176 0.502604 23.4974C0.823996 23.8188 1.25977 23.9995 1.71429 24H24V22.2857H2.60914C3.90343 17.8774 6.82629 11.1429 9.42857 11.1429Z" />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.42857 11.1429C10.7014 11.1429 11.6177 12.426 12.588 13.7837C13.7126 15.3583 14.988 17.1429 17.1429 17.1429C22.0029 17.1429 23.8114 7.89429 24 6.85714L22.3131 6.55029C21.9 8.81314 20.052 15.4286 17.1429 15.4286C15.87 15.4286 14.9537 14.1454 13.9834 12.7877C12.8589 11.2131 11.5834 9.42857 9.42857 9.42857C5.84057 9.42857 3.04714 15.7749 1.71429 19.5103V0H0V22.2857C0.000453837 22.7402 0.181211 23.176 0.502604 23.4974C0.823996 23.8188 1.25977 23.9995 1.71429 24H24V22.2857H2.60914C3.90343 17.8774 6.82629 11.1429 9.42857 11.1429Z" />
        </svg>
    );
};
