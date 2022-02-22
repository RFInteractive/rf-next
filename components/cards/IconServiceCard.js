/** @jsxImportSource theme-ui */
import Link from 'next/link';

const IconServiceCard = ({ icon, heading, link }) => {
    return (
        <Link href={link} scroll={false}>
            <a>
                <div
                    sx={{
                        padding: '35px 30px',
                        backgroundColor: 'muted',
                        borderRadius: '5px',
                        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.08)',
                        display: 'grid',
                        justifyItems: 'center',
                        transition: 'all 0.15s ease-out',
                        '&:hover': {
                            transform: 'scale(1.05)',
                        },
                    }}>
                    {getSVG(icon)}
                    <h3
                        sx={{
                            marginTop: '15px',
                            fontSize: '24px',
                        }}>
                        {heading}
                    </h3>
                </div>
            </a>
        </Link>
    );
};

const getSVG = (
    iconName = 'chat',
    color,
    maxWidth = '50px',
    maxHeight = '50px'
) => {
    if (iconName === 'content') {
        return (
            <svg
                viewBox="0 0 51 51"
                xmlns="http://www.w3.org/2000/svg"
                sx={{ width: '100%', maxWidth, fill: 'none' }}>
                <path
                    d="M50.5515 8.61151L42.3882 0.448248C42.2461 0.306136 42.0774 0.193407 41.8917 0.116496C41.7061 0.0395855 41.5071 0 41.3061 0C41.1051 0 40.9061 0.0395855 40.7204 0.116496C40.5348 0.193407 40.3661 0.306136 40.2239 0.448248L15.7342 24.938C15.592 25.0801 15.4792 25.2489 15.4022 25.4346C15.3253 25.6203 15.2857 25.8194 15.2857 26.0204V34.1837C15.2857 34.5896 15.447 34.9789 15.734 35.266C16.0211 35.553 16.4104 35.7143 16.8163 35.7143H24.9796C25.1805 35.7143 25.3795 35.6747 25.5652 35.5978C25.7509 35.5209 25.9196 35.4082 26.0617 35.2661L50.5515 10.7763C50.6937 10.6342 50.8065 10.4654 50.8834 10.2797C50.9604 10.094 51 9.89494 51 9.6939C51 9.49287 50.9604 9.29381 50.8834 9.10809C50.8065 8.92236 50.6937 8.75362 50.5515 8.61151ZM24.3456 32.6531H18.3469V26.6544L35.1837 9.81763L41.1824 15.8163L24.3456 32.6531ZM43.3469 13.6518L37.3482 7.65309L41.3061 3.69518L47.3048 9.6939L43.3469 13.6518ZM48.9591 23.9796V46.4286C48.9581 47.3754 48.5814 48.2832 47.9119 48.9528C47.2424 49.6223 46.3346 49.9989 45.3877 50H4.57143C3.62456 49.9989 2.71678 49.6223 2.04724 48.9528C1.3777 48.2832 1.00108 47.3754 1 46.4286V5.61228C1.00108 4.66541 1.3777 3.75763 2.04724 3.08809C2.71678 2.41855 3.62456 2.04193 4.57143 2.04085H27.0204C27.4263 2.04085 27.8157 2.20211 28.1027 2.48915C28.3897 2.7762 28.551 3.16552 28.551 3.57146C28.551 3.9774 28.3897 4.36672 28.1027 4.65377C27.8157 4.94081 27.4263 5.10207 27.0204 5.10207H4.57143C4.43615 5.10221 4.30646 5.156 4.21081 5.25166C4.11515 5.34731 4.06136 5.477 4.06122 5.61228V46.4286C4.06136 46.5638 4.11515 46.6935 4.21081 46.7892C4.30646 46.8848 4.43615 46.9386 4.57143 46.9388H45.3877C45.523 46.9386 45.6527 46.8848 45.7483 46.7892C45.844 46.6935 45.8978 46.5638 45.8979 46.4286V23.9796C45.8979 23.5737 46.0592 23.1843 46.3462 22.8973C46.6333 22.6103 47.0226 22.449 47.4285 22.449C47.8345 22.449 48.2238 22.6103 48.5108 22.8973C48.7979 23.1843 48.9591 23.5737 48.9591 23.9796Z"
                    sx={{ fill: 'iconSecondary' }}
                />
                <path
                    d="M28.5 3.5H2.5V48.5H47.5V22.5"
                    sx={{ stroke: 'text' }}
                    strokeWidth="3.25"
                    strokeLinejoin="round"
                />
            </svg>
        );
    }

    if (iconName === 'computer') {
        return (
            <svg
                viewBox="0 0 57 57"
                xmlns="http://www.w3.org/2000/svg"
                sx={{ width: '100%', maxWidth, fill: 'none' }}>
                <path
                    d="M46.3125 3.5625H53.4375V10.6875H46.3125V3.5625Z"
                    sx={{ fill: 'iconTertiary' }}
                />
                <path
                    d="M46.3125 14.25H53.4375V21.375H46.3125V14.25Z"
                    sx={{ fill: 'iconTertiary' }}
                />
                <path
                    d="M35.625 3.5625H42.75V10.6875H35.625V3.5625Z"
                    sx={{ fill: 'iconTertiary' }}
                />
                <path
                    d="M35.625 14.25H42.75V21.375H35.625V14.25Z"
                    sx={{ fill: 'iconTertiary' }}
                />
                <path
                    d="M49.875 28.5V39.1875H7.125V10.6875H28.5V7.125H7.125C6.18017 7.125 5.27403 7.50033 4.60593 8.16843C3.93783 8.83653 3.5625 9.74267 3.5625 10.6875V39.1875C3.5625 40.1323 3.93783 41.0385 4.60593 41.7066C5.27403 42.3747 6.18017 42.75 7.125 42.75H21.375V49.875H14.25V53.4375H42.75V49.875H35.625V42.75H49.875C50.8198 42.75 51.726 42.3747 52.3941 41.7066C53.0622 41.0385 53.4375 40.1323 53.4375 39.1875V28.5H49.875ZM32.0625 49.875H24.9375V42.75H32.0625V49.875Z"
                    sx={{ fill: 'text' }}
                />
            </svg>
        );
    }

    if (iconName === 'seo') {
        return (
            <svg
                viewBox="0 0 50 51"
                xmlns="http://www.w3.org/2000/svg"
                sx={{ width: '100%', maxWidth, fill: 'none' }}>
                <path
                    d="M19.6429 23.558C22.2946 23.558 24.2036 26.2312 26.225 29.0598C28.5679 32.3402 31.225 36.058 35.7143 36.058C45.8393 36.058 49.6071 16.7902 50 14.6295L46.4857 13.9902C45.625 18.7045 41.775 32.4866 35.7143 32.4866C33.0625 32.4866 31.1536 29.8134 29.1321 26.9848C26.7893 23.7045 24.1321 19.9866 19.6429 19.9866C12.1679 19.9866 6.34821 33.208 3.57143 40.9902V0.34375H0V46.7723C0.000945494 47.7192 0.377523 48.6271 1.04709 49.2967C1.71666 49.9662 2.62452 50.3428 3.57143 50.3437H50V46.7723H5.43571C8.13214 37.5884 14.2214 23.558 19.6429 23.558Z"
                    sx={{ width: '100%', maxWidth, fill: 'iconPrimary' }}
                />
                <path
                    d="M0 0.34375H3.61111V50.3437C1.61675 50.3437 0 48.727 0 46.7326V0.34375Z"
                    sx={{ width: '100%', maxWidth, fill: 'text' }}
                />
                <rect
                    x="3.33331"
                    y="46.7881"
                    width="46.6667"
                    height="3.55556"
                    sx={{ fill: 'text' }}
                />
            </svg>
        );
    }

    if (iconName === 'advertising') {
        return (
            <svg
                viewBox="0 0 27 52"
                xmlns="http://www.w3.org/2000/svg"
                sx={{ width: '100%', maxWidth, maxHeight, fill: 'none' }}>
                <path
                    d="M1 45.6429H26M22.4286 1H4.57143C2.78571 1 1 2.78571 1 4.57143V47.4286C1 49.2143 2.78571 51 4.57143 51H22.4286C24.2143 51 26 49.2143 26 47.4286V4.57143C26 2.78571 24.2143 1 22.4286 1ZM1 6.35714H26H1Z"
                    sx={{ stroke: 'text' }}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M13.18 31.1C11.12 31.1 10.31 30.18 10.2 29H8C8.12 31.19 9.76 32.42 11.68 32.83V35H14.68V32.85C16.63 32.48 18.18 31.35 18.18 29.3C18.18 26.46 15.75 25.49 13.48 24.9C11.21 24.31 10.48 23.7 10.48 22.75C10.48 21.66 11.49 20.9 13.18 20.9C14.96 20.9 15.62 21.75 15.68 23H17.89C17.82 21.28 16.77 19.7 14.68 19.19V17H11.68V19.16C9.74 19.58 8.18 20.84 8.18 22.77C8.18 25.08 10.09 26.23 12.88 26.9C15.38 27.5 15.88 28.38 15.88 29.31C15.88 30 15.39 31.1 13.18 31.1Z"
                    sx={{ fill: 'iconSecondary' }}
                />
            </svg>
        );
    }
};

export default IconServiceCard;
