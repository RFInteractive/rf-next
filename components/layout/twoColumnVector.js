/** @jsxImportSource theme-ui */

import { useThemeUI } from 'theme-ui';

// type = 'left' or 'right'
const TwoColumnVector = ({
    leftColumnContent,
    rightColumnContent,
    vectorSide,
    sectionName,
}) => {
    return (
        <div
            sx={{
                overflow: 'hidden',
                variant: 'layouts.twoColumnContainedGrid',
                paddingBottom: '30px',
            }}
        >
            <VectorBackground
                vectorSide={vectorSide}
                sectionName={sectionName}
            />
            <div
                sx={{
                    gridColumn: ['2/span 2', '2/span 2', '2/3', '2/3', '2/3'],
                    gridRow: getResponsiveRowAssignments('left', vectorSide),
                    zIndex: '2',
                }}
            >
                {leftColumnContent}
            </div>
            <div
                sx={{
                    gridColumn: ['2/span 2', '2/span 2', '3/4', '3/4', '3/4'],
                    gridRow: getResponsiveRowAssignments('right', vectorSide),
                    zIndex: '2',
                }}
            >
                {rightColumnContent}
            </div>
        </div>
    );
};

const getResponsiveRowAssignments = (columnSide, vectorSide) => {
    if (
        (columnSide === 'left' && vectorSide === 'right') ||
        (columnSide === 'right' && vectorSide === 'left')
    ) {
        return ['2/3', '2/3', '1/2', '1/2', '1/2'];
    }

    return ['1/2'];
};

const VectorBackground = ({ vectorSide, sectionName }) => {
    const { theme } = useThemeUI();

    const gradientLight = theme.rawColors.gradientLight;
    const gradientDark = theme.rawColors.gradientDark;

    const generateFillIdentifier = (sectionName, numId) => {
        return `url(#paint-${sectionName}-${numId}_linear)`;
    };

    const generateGradientId = (sectionName, numId) => {
        return `paint-${sectionName}-${numId}_linear`;
    };

    if (vectorSide === 'right') {
        return (
            <svg
                viewBox="0 0 808 884"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                sx={{
                    gridColumn: ['1/-1', '3/-1', '3/-1', '3/-1', '3/-1'],
                    gridRow: '1/2',
                    justifySelf: 'end',
                    zIndex: '1',
                    maxHeight: '850px',
                    maxWidth: '85%',
                }}
            >
                <path
                    d="M807.906 0L124.046 186.877C80.5634 198.759 50.4058 238.263 50.4058 283.34V606.927C50.4058 652.346 81.0156 692.062 124.938 703.629L807.906 883.5V0Z"
                    fill={generateFillIdentifier(sectionName, 1)}
                />
                <ellipse
                    rx="16.4679"
                    ry="16.2217"
                    transform="matrix(-0.94101 0.33838 0.305558 0.952173 247.495 311.03)"
                    fill={generateFillIdentifier(sectionName, 2)}
                />
                <ellipse
                    rx="39.9935"
                    ry="39.3955"
                    transform="matrix(-0.94101 0.33838 0.305558 0.952173 502.234 667.044)"
                    fill={generateFillIdentifier(sectionName, 3)}
                />
                <ellipse
                    rx="20.7025"
                    ry="20.3929"
                    transform="matrix(-0.94101 0.33838 0.305558 0.952173 86.1938 392.423)"
                    fill={generateFillIdentifier(sectionName, 4)}
                />
                <ellipse
                    rx="10.3512"
                    ry="10.1965"
                    transform="matrix(-0.94101 0.33838 0.305558 0.952173 700.05 170.211)"
                    fill={generateFillIdentifier(sectionName, 5)}
                />
                <ellipse
                    rx="16.4679"
                    ry="16.2217"
                    transform="matrix(-0.94101 0.33838 0.305558 0.952173 20.4532 637.018)"
                    fill={generateFillIdentifier(sectionName, 6)}
                />
                <defs>
                    <linearGradient
                        id={generateGradientId(sectionName, 1)}
                        x1="769.906"
                        y1="106.5"
                        x2="213.577"
                        y2="918.897"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop
                            offset="0.123773"
                            sx={{ stopColor: gradientDark }}
                        />
                        <stop offset="1" sx={{ stopColor: gradientLight }} />
                    </linearGradient>
                    <linearGradient
                        id={generateGradientId(sectionName, 2)}
                        x1="-10"
                        y1="-10"
                        x2="23.4396"
                        y2="23.932"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop
                            offset="0.051875"
                            sx={{ stopColor: gradientLight }}
                        />
                        <stop
                            offset="0.885417"
                            sx={{ stopColor: gradientDark }}
                        />
                    </linearGradient>
                    <linearGradient
                        id={generateGradientId(sectionName, 3)}
                        x1="-20"
                        y1="-20"
                        x2="98.782"
                        y2="99.9778"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop
                            offset="0.01875"
                            sx={{ stopColor: gradientLight }}
                        />
                        <stop
                            offset="0.585417"
                            sx={{ stopColor: gradientDark }}
                        />
                    </linearGradient>
                    <linearGradient
                        id={generateGradientId(sectionName, 4)}
                        x1="-15"
                        y1="-15"
                        x2="120.7813"
                        y2="120.4003"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop
                            offset="0.011875"
                            sx={{ stopColor: gradientLight }}
                        />
                        <stop
                            offset="0.305417"
                            sx={{ stopColor: gradientDark }}
                        />
                    </linearGradient>
                    <linearGradient
                        id={generateGradientId(sectionName, 5)}
                        x1="-10"
                        y1="-10"
                        x2="140.3906"
                        y2="140.7001"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop
                            offset="0.01875"
                            sx={{ stopColor: gradientLight }}
                        />
                        <stop
                            offset="0.125417"
                            sx={{ stopColor: gradientDark }}
                        />
                    </linearGradient>
                    <linearGradient
                        id={generateGradientId(sectionName, 6)}
                        x1="-10"
                        y1="-10"
                        x2="120.4396"
                        y2="120.932"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop
                            offset="0.01875"
                            sx={{ stopColor: gradientLight }}
                        />
                        <stop
                            offset="0.155417"
                            sx={{ stopColor: gradientDark }}
                        />
                    </linearGradient>
                </defs>
            </svg>
        );
    }

    return (
        <svg
            viewBox="0 0 808 884"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            sx={{
                gridColumn: ['1/-1', '1/3', '1/3', '1/3', '1/3'],
                gridRow: '1/2',
                justifySelf: 'start',
                zIndex: '1',
                maxHeight: '850px',
            }}
        >
            <path
                d="M0 0L683.86 186.877C727.342 198.759 757.5 238.263 757.5 283.34V606.927C757.5 652.346 726.89 692.062 682.968 703.629L0 883.5V0Z"
                fill={generateFillIdentifier(sectionName, 1)}
            />
            <ellipse
                rx="16.4679"
                ry="16.2217"
                transform="matrix(0.94101 0.33838 -0.305558 0.952173 560.411 311.03)"
                fill={generateFillIdentifier(sectionName, 2)}
            />
            <ellipse
                rx="39.9935"
                ry="39.3955"
                transform="matrix(0.94101 0.33838 -0.305558 0.952173 305.672 667.044)"
                fill={generateFillIdentifier(sectionName, 3)}
            />
            <ellipse
                rx="20.7025"
                ry="20.3929"
                transform="matrix(0.94101 0.33838 -0.305558 0.952173 721.712 392.423)"
                fill={generateFillIdentifier(sectionName, 4)}
            />
            <ellipse
                rx="10.3512"
                ry="10.1965"
                transform="matrix(0.94101 0.33838 -0.305558 0.952173 107.856 170.211)"
                fill={generateFillIdentifier(sectionName, 5)}
            />
            <ellipse
                rx="16.4679"
                ry="16.2217"
                transform="matrix(0.94101 0.33838 -0.305558 0.952173 787.453 637.018)"
                fill={generateFillIdentifier(sectionName, 6)}
            />
            <defs>
                <linearGradient
                    id={generateGradientId(sectionName, 1)}
                    x1="38"
                    y1="106.5"
                    x2="594.329"
                    y2="918.897"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.123773" sx={{ stopColor: gradientDark }} />
                    <stop offset="1" sx={{ stopColor: gradientLight }} />
                </linearGradient>
                <linearGradient
                    id={generateGradientId(sectionName, 2)}
                    x1="-10"
                    y1="-10"
                    x2="23.4396"
                    y2="23.932"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.05875" sx={{ stopColor: gradientLight }} />
                    <stop offset="0.885417" sx={{ stopColor: gradientDark }} />
                </linearGradient>
                <linearGradient
                    id={generateGradientId(sectionName, 3)}
                    x1="-20"
                    y1="-20"
                    x2="98.782"
                    y2="99.9778"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.01875" sx={{ stopColor: gradientLight }} />
                    <stop offset="0.585417" sx={{ stopColor: gradientDark }} />
                </linearGradient>
                <linearGradient
                    id={generateGradientId(sectionName, 4)}
                    x1="-15"
                    y1="-15"
                    x2="120.7813"
                    y2="120.4003"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.011875" sx={{ stopColor: gradientLight }} />
                    <stop offset="0.30417" sx={{ stopColor: gradientDark }} />
                </linearGradient>
                <linearGradient
                    id={generateGradientId(sectionName, 5)}
                    x1="-10"
                    y1="-10"
                    x2="140.3906"
                    y2="140.7001"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.01875" sx={{ stopColor: gradientLight }} />
                    <stop offset="0.125417" sx={{ stopColor: gradientDark }} />
                </linearGradient>
                <linearGradient
                    id={generateGradientId(sectionName, 6)}
                    x1="-10"
                    y1="-0"
                    x2="140.4396"
                    y2="140.932"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.01875" sx={{ stopColor: gradientLight }} />
                    <stop offset="0.125417" sx={{ stopColor: gradientDark }} />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default TwoColumnVector;
