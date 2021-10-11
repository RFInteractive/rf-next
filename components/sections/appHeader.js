/** @jsxImportSource theme-ui */
import { useThemeUI } from 'theme-ui';

const AppHeader = ({ leftColumnContent, rightColumnContent, type }) => {
    return (
        <header
            sx={{
                overflow: 'hidden',
                variant: 'layouts.twoColumnContainedGrid',
                alignItems: 'center',
                paddingBottom: '100px',
            }}
        >
            <BackgroundSVG type={type} />
            <div
                sx={{
                    gridColumn: ['2/span 2', '2/span 2', '2/3', '2/3'],
                    gridRow: '1/2',
                    zIndex: '2',
                }}
            >
                {leftColumnContent}
            </div>
            <div
                sx={{
                    gridColumn: '3/4',
                    gridRow: '1/2',
                    display: ['none', 'none', 'block', 'block', 'block'],
                    zIndex: '2',
                }}
            >
                {rightColumnContent}
            </div>
        </header>
    );
};

const BackgroundSVG = ({ type = 'large' }) => {
    const { theme } = useThemeUI();

    const gradientLight = theme.rawColors.gradientLight;
    const gradientDark = theme.rawColors.gradientDark;

    if (type === 'large') {
        return (
            <svg
                viewBox="0 0 1600 884"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                sx={{
                    gridColumn: '1/-1',
                    gridRow: '1/2',
                    zIndex: '1',
                    height: ['100%', '100%', '150%', '100%', '100%'],
                    maxHeight: '860px',
                    justifySelf: 'start',
                }}
            >
                <path
                    d="M0 0H1190L1023.06 607.094C1013.19 642.995 984.188 670.438 947.798 678.316L0 883.5V0Z"
                    fill="url(#paint0_linear)"
                />
                <ellipse
                    rx="16.4679"
                    ry="16.2217"
                    transform="matrix(0.94101 0.33838 -0.305558 0.952173 560.411 171.03)"
                    fill="url(#paint1_linear)"
                />
                <ellipse
                    rx="39.9935"
                    ry="39.3955"
                    transform="matrix(0.94101 0.33838 -0.305558 0.952173 651.627 623.546)"
                    fill="url(#paint2_linear)"
                />
                <ellipse
                    rx="20.7025"
                    ry="20.3929"
                    transform="matrix(0.94101 0.33838 -0.305558 0.952173 911.438 381.405)"
                    fill="url(#paint3_linear)"
                />
                <ellipse
                    rx="10.3512"
                    ry="10.1965"
                    transform="matrix(0.94101 0.33838 -0.305558 0.952173 109.856 144.211)"
                    fill="url(#paint4_linear)"
                />
                <ellipse
                    rx="16.4679"
                    ry="16.2217"
                    transform="matrix(0.94101 0.33838 -0.305558 0.952173 1251.45 578.018)"
                    fill="url(#paint5_linear)"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear"
                        x1="0"
                        y1="0"
                        x2="967.339"
                        y2="942.196"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset=".2" sx={{ stopColor: gradientDark }} />
                        <stop offset=".9" sx={{ stopColor: gradientLight }} />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear"
                        x1="-10"
                        y1="-10"
                        x2="65.4396"
                        y2="65.932"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop
                            offset="0.001875"
                            sx={{ stopColor: gradientLight }}
                        />
                        <stop
                            offset="0.205417"
                            sx={{ stopColor: gradientDark }}
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint2_linear"
                        x1="-20"
                        y1="-20"
                        x2="130.782"
                        y2="130.9778"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop sx={{ stopColor: gradientLight }} />
                        <stop
                            offset="0.28417"
                            sx={{ stopColor: gradientDark }}
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint3_linear"
                        x1="-15"
                        y1="-15"
                        x2="120.7813"
                        y2="120.4003"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop
                            offset="0.0011875"
                            sx={{ stopColor: gradientLight }}
                        />
                        <stop
                            offset="0.205417"
                            sx={{ stopColor: gradientDark }}
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint4_linear"
                        x1="-10"
                        y1="-10"
                        x2="140.3906"
                        y2="140.7001"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop
                            offset="0.0011875"
                            sx={{ stopColor: gradientLight }}
                        />
                        <stop
                            offset="0.1050547"
                            sx={{ stopColor: gradientDark }}
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint5_linear"
                        x1="-10"
                        y1="-10"
                        x2="120.4396"
                        y2="120.932"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop
                            offset="0.001875"
                            sx={{ stopColor: gradientLight }}
                        />
                        <stop
                            offset="0.125417"
                            sx={{ stopColor: gradientDark }}
                        />
                    </linearGradient>
                </defs>
            </svg>
        );
    }

    return (
        <svg
            viewBox="0 0 1600 477"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            sx={{
                gridColumn: '1/-1',
                gridRow: '1/2',
                zIndex: '1',
                height: '100%',
                maxHeight: '500px',
            }}
        >
            <path
                d="M0 0H1228L1109.99 303.429C1096.45 338.25 1064.62 362.618 1027.47 366.609L0 477V0Z"
                fill="url(#paint0_linear)"
            />
            <circle
                cx="900.108"
                cy="267.108"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1110.89"
                cy="267.108"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1005.5"
                cy="267.108"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1058.2"
                cy="267.108"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="952.804"
                cy="267.108"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="979.503"
                cy="267.108"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="926.807"
                cy="267.108"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1032.2"
                cy="267.108"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1084.9"
                cy="267.108"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="900.108"
                cy="407.63"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1110.89"
                cy="407.63"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1005.5"
                cy="407.63"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1058.2"
                cy="407.63"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="952.804"
                cy="407.63"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="979.503"
                cy="407.63"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="926.807"
                cy="407.63"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1032.2"
                cy="407.63"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1084.9"
                cy="407.63"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="900.108"
                cy="337.37"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1110.89"
                cy="337.37"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1005.5"
                cy="337.37"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1058.2"
                cy="337.37"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="952.804"
                cy="337.37"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="979.503"
                cy="337.37"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="926.807"
                cy="337.37"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1032.2"
                cy="337.37"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1084.9"
                cy="337.37"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="900.108"
                cy="372.5"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1110.89"
                cy="372.5"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1005.5"
                cy="372.5"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1058.2"
                cy="372.5"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="952.804"
                cy="372.5"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="979.503"
                cy="372.5"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="926.807"
                cy="372.5"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1032.2"
                cy="372.5"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1084.9"
                cy="372.5"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="900.108"
                cy="302.239"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1110.89"
                cy="302.239"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1005.5"
                cy="302.239"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1058.2"
                cy="302.239"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="952.804"
                cy="302.239"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="979.503"
                cy="302.239"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="926.807"
                cy="302.239"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1032.2"
                cy="302.239"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1084.9"
                cy="302.239"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="900.108"
                cy="284.673"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1110.89"
                cy="284.673"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1005.5"
                cy="284.673"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1058.2"
                cy="284.673"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="952.804"
                cy="284.673"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="979.503"
                cy="284.673"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="926.807"
                cy="284.673"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1032.2"
                cy="284.673"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1084.9"
                cy="284.673"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="900.108"
                cy="319.804"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1110.89"
                cy="319.804"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1005.5"
                cy="319.804"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1058.2"
                cy="319.804"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="952.804"
                cy="319.804"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="979.503"
                cy="319.804"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="926.807"
                cy="319.804"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1032.2"
                cy="319.804"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1084.9"
                cy="319.804"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="900.108"
                cy="354.935"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1110.89"
                cy="354.935"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1005.5"
                cy="354.935"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1058.2"
                cy="354.935"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="952.804"
                cy="354.935"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="979.503"
                cy="354.935"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="926.807"
                cy="354.935"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1032.2"
                cy="354.935"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1084.9"
                cy="354.935"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="900.108"
                cy="390.065"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1110.89"
                cy="390.065"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1005.5"
                cy="390.065"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1058.2"
                cy="390.065"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="952.804"
                cy="390.065"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="979.503"
                cy="390.065"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="926.807"
                cy="390.065"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1032.2"
                cy="390.065"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <circle
                cx="1084.9"
                cy="390.065"
                r="2.10784"
                sx={{ fill: 'background' }}
            />
            <ellipse
                rx="16.4679"
                ry="16.2217"
                transform="matrix(0.94101 0.33838 -0.305558 0.952173 560.411 171.03)"
                fill="url(#paint1_linear)"
            />
            <ellipse
                rx="39.9935"
                ry="39.3955"
                transform="matrix(0.94101 0.33838 -0.305558 0.952173 479.672 424.044)"
                fill="url(#paint2_linear)"
            />
            <ellipse
                rx="20.7025"
                ry="20.3929"
                transform="matrix(0.94101 0.33838 -0.305558 0.952173 911.438 381.405)"
                fill="url(#paint3_linear)"
            />
            <ellipse
                rx="10.3512"
                ry="10.1965"
                transform="matrix(0.94101 0.33838 -0.305558 0.952173 109.856 144.211)"
                fill="url(#paint4_linear)"
            />
            <ellipse
                rx="16.4679"
                ry="16.2217"
                transform="matrix(0.94101 0.33838 -0.305558 0.952173 1171.45 218.018)"
                fill="url(#paint5_linear)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear"
                    x1="50"
                    y1="50"
                    x2="442.962"
                    y2="799.455"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop sx={{ stopColor: gradientDark }} />
                    <stop offset=".80" sx={{ stopColor: gradientLight }} />
                </linearGradient>
                <linearGradient
                    id="paint1_linear"
                    x1="-10"
                    y1="-10"
                    x2="65.4396"
                    y2="65.932"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.001875" sx={{ stopColor: gradientLight }} />
                    <stop offset="0.205417" sx={{ stopColor: gradientDark }} />
                </linearGradient>
                <linearGradient
                    id="paint2_linear"
                    x1="-20"
                    y1="-20"
                    x2="130.782"
                    y2="130.9778"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop sx={{ stopColor: gradientLight }} />
                    <stop offset="0.285417" sx={{ stopColor: gradientDark }} />
                </linearGradient>
                <linearGradient
                    id="paint3_linear"
                    x1="-15"
                    y1="-15"
                    x2="120.7813"
                    y2="120.4003"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.001875" sx={{ stopColor: gradientLight }} />
                    <stop offset="0.205417" sx={{ stopColor: gradientDark }} />
                </linearGradient>
                <linearGradient
                    id="paint4_linear"
                    x1="-10"
                    y1="-10"
                    x2="140.3906"
                    y2="140.7001"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.001875" sx={{ stopColor: gradientLight }} />
                    <stop offset="0.105417" sx={{ stopColor: gradientDark }} />
                </linearGradient>
                <linearGradient
                    id="paint5_linear"
                    x1="-10"
                    y1="-10"
                    x2="120.4396"
                    y2="120.932"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.001875" sx={{ stopColor: gradientLight }} />
                    <stop offset="0.125417" sx={{ stopColor: gradientDark }} />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default AppHeader;
