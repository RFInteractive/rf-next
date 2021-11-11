/** @jsxImportSource theme-ui */
import { lighten } from '@theme-ui/color';

const AppBgIcon = ({
    iconName = 'chat',
    maxWidth = '60px',
    color = 'primary',
    padding = '15px',
}) => {
    return (
        <div
            sx={{
                maxWidth,
                maxHeight: maxWidth,
                padding,
                borderRadius: '50%',
                bg: lighten(color, 0.35),
            }}
        >
            {getBgIconSVG(iconName, color)}
        </div>
    );
};

const getBgIconSVG = (iconName = 'chat', color) => {
    if (iconName === 'chat') {
        return (
            <svg
                viewBox="0 0 29 27"
                xmlns="http://www.w3.org/2000/svg"
                sx={{ width: '100%', fill: color }}
            >
                <path
                    d="M9.04143 12.6579C9.04143 13.1375 8.85092 13.5974 8.5118 13.9365C8.17268 14.2757 7.71274 14.4662 7.23315 14.4662C6.75356 14.4662 6.29362 14.2757 5.9545 13.9365C5.61538 13.5974 5.42487 13.1375 5.42487 12.6579C5.42487 12.1783 5.61538 11.7184 5.9545 11.3792C6.29362 11.0401 6.75356 10.8496 7.23315 10.8496C7.71274 10.8496 8.17268 11.0401 8.5118 11.3792C8.85092 11.7184 9.04143 12.1783 9.04143 12.6579ZM16.2746 12.6579C16.2746 13.1375 16.0841 13.5974 15.7449 13.9365C15.4058 14.2757 14.9459 14.4662 14.4663 14.4662C13.9867 14.4662 13.5268 14.2757 13.1876 13.9365C12.8485 13.5974 12.658 13.1375 12.658 12.6579C12.658 12.1783 12.8485 11.7184 13.1876 11.3792C13.5268 11.0401 13.9867 10.8496 14.4663 10.8496C14.9459 10.8496 15.4058 11.0401 15.7449 11.3792C16.0841 11.7184 16.2746 12.1783 16.2746 12.6579ZM21.6994 14.4662C22.179 14.4662 22.639 14.2757 22.9781 13.9365C23.3172 13.5974 23.5077 13.1375 23.5077 12.6579C23.5077 12.1783 23.3172 11.7184 22.9781 11.3792C22.639 11.0401 22.179 10.8496 21.6994 10.8496C21.2198 10.8496 20.7599 11.0401 20.4208 11.3792C20.0817 11.7184 19.8911 12.1783 19.8911 12.6579C19.8911 13.1375 20.0817 13.5974 20.4208 13.9365C20.7599 14.2757 21.2198 14.4662 21.6994 14.4662Z"
                    sx={{ fill: color }}
                />
                <path
                    d="M3.91493 26.768L3.9511 26.7608C7.26026 26.1044 9.28192 25.2382 10.2222 24.7626C11.6066 25.1319 13.0335 25.3179 14.4663 25.316C22.4553 25.316 28.9325 19.6488 28.9325 12.658C28.9325 5.66716 22.4553 0 14.4663 0C6.47727 0 0 5.66716 0 12.658C0 15.8406 1.34356 18.7519 3.56232 20.9761C3.40709 22.4048 3.08918 23.8111 2.61478 25.1677L2.60935 25.1876C2.47453 25.5761 2.32739 25.9603 2.16813 26.3395C2.02528 26.6758 2.30195 27.0519 2.66179 26.9941C3.0807 26.9255 3.49847 26.8502 3.91493 26.768ZM5.36156 21.1479C5.38689 20.8831 5.35351 20.6161 5.26381 20.3657C5.1741 20.1154 5.03028 19.8879 4.84258 19.6994C2.9258 17.7754 1.80828 15.3125 1.80828 12.658C1.80828 6.88595 7.24037 1.80828 14.4663 1.80828C21.6922 1.80828 27.1243 6.88595 27.1243 12.658C27.1243 18.4318 21.6922 23.5077 14.4663 23.5077C13.1916 23.5096 11.9222 23.3442 10.6906 23.0158C10.2602 22.9005 9.80232 22.9482 9.40489 23.1497C8.70508 23.5041 7.16261 24.1804 4.64186 24.7645C4.99353 23.5839 5.23447 22.3731 5.36156 21.1479Z"
                    sx={{ fill: color }}
                />
            </svg>
        );
    }

    if (iconName === 'computer') {
        return (
            <svg
                viewBox="0 0 26 26"
                sx={{ width: '100%', fill: color }}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M21.125 1.625H24.375V4.875H21.125V1.625Z"
                    sx={{ width: '100%', fill: color }}
                />
                <path
                    d="M21.125 6.5H24.375V9.75H21.125V6.5Z"
                    sx={{ width: '100%', fill: color }}
                />
                <path
                    d="M16.25 1.625H19.5V4.875H16.25V1.625Z"
                    sx={{ width: '100%', fill: color }}
                />
                <path
                    d="M16.25 6.5H19.5V9.75H16.25V6.5Z"
                    sx={{ width: '100%', fill: color }}
                />
                <path
                    d="M22.75 13V17.875H3.25V4.875H13V3.25H3.25C2.81902 3.25 2.4057 3.4212 2.10095 3.72595C1.7962 4.0307 1.625 4.44402 1.625 4.875V17.875C1.625 18.306 1.7962 18.7193 2.10095 19.024C2.4057 19.3288 2.81902 19.5 3.25 19.5H9.75V22.75H6.5V24.375H19.5V22.75H16.25V19.5H22.75C23.181 19.5 23.5943 19.3288 23.899 19.024C24.2038 18.7193 24.375 18.306 24.375 17.875V13H22.75ZM14.625 22.75H11.375V19.5H14.625V22.75Z"
                    sx={{ width: '100%', fill: color }}
                />
            </svg>
        );
    }

    if (iconName === 'seo') {
        return (
            <svg
                viewBox="0 0 24 24"
                sx={{ width: '100%', fill: color }}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M9.42857 11.1429C10.7014 11.1429 11.6177 12.426 12.588 13.7837C13.7126 15.3583 14.988 17.1429 17.1429 17.1429C22.0029 17.1429 23.8114 7.89429 24 6.85714L22.3131 6.55029C21.9 8.81314 20.052 15.4286 17.1429 15.4286C15.87 15.4286 14.9537 14.1454 13.9834 12.7877C12.8589 11.2131 11.5834 9.42857 9.42857 9.42857C5.84057 9.42857 3.04714 15.7749 1.71429 19.5103V0H0V22.2857C0.000453837 22.7402 0.181211 23.176 0.502604 23.4974C0.823996 23.8188 1.25977 23.9995 1.71429 24H24V22.2857H2.60914C3.90343 17.8774 6.82629 11.1429 9.42857 11.1429Z"
                    sx={{ width: '100%', fill: color }}
                />
            </svg>
        );
    }
};

export default AppBgIcon;
