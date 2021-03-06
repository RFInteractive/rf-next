/** @jsxImportSource theme-ui */

const ProcessCard = ({ heading, icon, number, children }) => {
    return (
        <div
            sx={{
                position: 'relative',
                padding: '35px 25px 50px',
                backgroundColor: 'muted',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                display: 'grid',
                justifyItems: 'center',
                alignContent: 'start',
                height: '100%',
            }}>
            <div
                sx={{
                    backgroundColor: 'text',
                    height: '50px',
                    width: '50px',
                    color: 'background',
                    position: 'absolute',
                    top: '0px',
                    left: '25px',
                    transform: 'translateY(-50%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '10px',
                }}>
                <p sx={{ fontSize: '22px' }}>{number}</p>
            </div>
            <ProcessIcon
                icon={icon}
                styles={{ marginBottom: '30px', width: '50px', height: '50px' }}
            />
            <h3 sx={{ marginBottom: '15px' }}>{heading}</h3>
            <p>{children}</p>
        </div>
    );
};

export default ProcessCard;

const ProcessIcon = ({ icon = 'chat', styles }) => {
    if (icon === 'chat') {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
                sx={{ ...styles }}>
                <path
                    d="M36.0167 31.7947C38.5599 29.5535 40 26.5662 40 23.4661C40 20.1716 38.4402 17.0904 35.6078 14.7897C32.8512 12.5513 29.2024 11.3184 25.3331 11.3184C21.4638 11.3184 17.815 12.5513 15.0588 14.7898C12.2264 17.0904 10.6666 20.1716 10.6666 23.4661C10.6666 26.7607 12.2264 29.8419 15.0588 32.1426C17.815 34.3812 21.4638 35.614 25.3331 35.614C25.8487 35.614 26.3674 35.5915 26.8818 35.5468L27.7606 36.3C30.7882 38.8941 34.6601 40.3221 38.6663 40.3223H39.9996V37.5161L39.6091 37.13C38.0686 35.6023 36.8479 33.7893 36.0167 31.7947V31.7947ZM29.5071 34.3073L27.7437 32.796L27.1557 32.8673C26.551 32.9404 25.9423 32.9771 25.3331 32.9771C18.7165 32.9771 13.3332 28.7105 13.3332 23.4661C13.3332 18.2218 18.7165 13.9551 25.3331 13.9551C31.9497 13.9551 37.3329 18.2217 37.3329 23.4661C37.3329 26.079 36.0146 28.5183 33.6208 30.3346L32.8529 30.9173L33.2072 31.9089C33.9334 33.9342 35.0007 35.8235 36.364 37.4969C33.8251 37.0778 31.4524 35.9741 29.5071 34.3073V34.3073Z"
                    sx={{ fill: 'iconTertiary' }}
                />
                <path
                    d="M3.68204 25.6123C4.93014 24.0502 5.91008 22.2958 6.58268 20.4194L6.93434 19.4327L6.1671 18.8505C3.90979 17.1378 2.66664 14.839 2.66664 12.3777C2.66664 7.43192 7.75067 3.4082 13.9999 3.4082C18.5971 3.4082 22.5637 5.58597 24.3395 8.70636C24.6692 8.69054 25.0004 8.68164 25.3331 8.68164C26.0012 8.68164 26.6633 8.71369 27.3192 8.7778C26.633 7.01985 25.4411 5.41508 23.8026 4.08436C21.1724 1.94804 17.6915 0.771484 13.9999 0.771484C10.3082 0.771484 6.82726 1.94804 4.19696 4.08436C1.49048 6.28264 0 9.22793 0 12.3777C0 15.3276 1.36265 18.1699 3.77079 20.3079C2.98492 22.1779 1.83661 23.8778 0.390579 25.3118L0 25.698V28.457H1.33332C3.79888 28.4567 6.23054 27.889 8.43583 26.7988C8.19401 25.8925 8.05232 24.963 8.01325 24.0265C6.67474 24.8022 5.20866 25.339 3.68204 25.6123Z"
                    sx={{ fill: 'text' }}
                />
            </svg>
        );
    }

    if (icon === 'research') {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="39"
                viewBox="0 0 33 39"
                fill="none"
                sx={{ ...styles }}>
                <path
                    d="M29.4167 30.272C30.2381 28.3481 30.4584 26.2302 30.0498 24.1845C29.6412 22.1388 28.6221 20.2567 27.1205 18.7746C27.5337 17.7585 27.612 16.642 27.3446 15.5804C27.0773 14.5188 26.4774 13.5649 25.6286 12.8515L29.4456 9.12643C29.9609 8.62274 30.2503 7.94008 30.2503 7.22832C30.2503 6.51657 29.9609 5.8339 29.4456 5.33021L25.5571 1.53534C25.041 1.03245 24.3415 0.75 23.6122 0.75C22.8829 0.75 22.1834 1.03245 21.6672 1.53534L3.55575 19.2108C3.04079 19.7146 2.75161 20.3972 2.75161 21.1089C2.75161 21.8205 3.04079 22.5031 3.55575 23.007L7.44425 26.8019C7.96036 27.3047 8.65987 27.5872 9.38919 27.5872C10.1185 27.5872 10.818 27.3047 11.3341 26.8019L17.8997 20.3943C18.8308 21.4451 20.1488 22.0953 21.5679 22.2038C22.987 22.3123 24.3927 21.8705 25.4801 20.974C26.6106 22.2361 27.3048 23.8138 27.4643 25.4829C27.6237 27.152 27.2403 28.8277 26.3684 30.272H16.5V35.6396H0V38.3234H33V30.272H29.4167ZM9.3885 24.9044L5.5 21.1082L8.08362 18.5881L11.9721 22.383L9.3885 24.9044ZM16.5 16.8531C16.502 17.1919 16.537 17.5298 16.6045 17.8622L13.9164 20.4856L10.0279 16.6907L23.6129 3.43278L27.5 7.22765L23.0326 11.5888C22.2372 11.4348 21.4167 11.4553 20.6304 11.6489C19.8441 11.8426 19.1118 12.2044 18.4865 12.7083C17.8612 13.2122 17.3586 13.8455 17.015 14.5624C16.6714 15.2792 16.4955 16.0617 16.5 16.8531ZM22 19.5368C21.4561 19.5368 20.9244 19.3794 20.4722 19.0845C20.0199 18.7896 19.6675 18.3705 19.4593 17.8801C19.2512 17.3897 19.1967 16.8501 19.3028 16.3295C19.4089 15.8089 19.6709 15.3307 20.0555 14.9553C20.4401 14.58 20.9301 14.3244 21.4635 14.2208C21.9969 14.1173 22.5499 14.1704 23.0524 14.3736C23.5549 14.5767 23.9844 14.9207 24.2865 15.362C24.5887 15.8034 24.75 16.3223 24.75 16.8531C24.7493 17.5646 24.4593 18.2468 23.9437 18.75C23.4282 19.2532 22.7291 19.5361 22 19.5368V19.5368ZM30.25 35.6396H19.25V32.9558H30.25V35.6396Z"
                    sx={{ fill: 'iconSecondary' }}
                />
                <rect
                    y="35.6504"
                    width="33"
                    height="2.65"
                    sx={{ fill: 'text' }}
                />
            </svg>
        );
    }

    if (icon === 'execute') {
        return (
            <svg
                width="38"
                height="39"
                viewBox="0 0 38 39"
                fill="none"
                sx={{ ...styles }}
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M24 6.00256L32 14.0026M1 37.0026H9L35 11.0026C36.0609 9.94169 36.6569 8.50285 36.6569 7.00256C36.6569 5.50227 36.0609 4.06342 35 3.00256C33.9391 1.94169 32.5003 1.3457 31 1.3457C29.4997 1.3457 28.0609 1.94169 27 3.00256L1 29.0026V37.0026Z"
                    sx={{ stroke: 'iconPrimary' }}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M27 29L24 32M19 11L9 1L1 9L11 19L19 11ZM9 11L6 14L9 11ZM27 19L37 29L29 37L19 27L27 19Z"
                    sx={{ stroke: 'text' }}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        );
    }

    if (icon === 'delivery') {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="37"
                viewBox="0 0 43 37"
                fill="none"
                sx={{ ...styles }}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.8638 0.75L40.85 5.7419L43 7.27536V29.2658L41.7762 30.8319L21.5 36.3458L1.19077 30.8319L0 29.2658V7.27536L2.01769 5.7419L20.9708 0.75H21.8638ZM21.5662 4.01268L8.33538 7.27536L10.1546 7.92789L21.5 10.8643L31.4231 8.22153L34.5654 7.27536L21.5662 4.01268V4.01268ZM3.30769 28.026L19.8462 32.4959V13.8007L3.30769 9.42873V28.026ZM23.1538 13.8007V32.4959L39.6923 28.026V9.33085L33.0108 11.1351V19.5104L29.7031 20.3587V12.0291L23.1538 13.8007Z"
                    sx={{ fill: 'text' }}
                />
                <path
                    d="M33.0001 19.5001L29.6801 20.35L29.6801 12L33.0001 11.0879V19.5001Z"
                    sx={{ fill: 'iconTertiary' }}
                />
            </svg>
        );
    }

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="41"
            viewBox="0 0 40 41"
            fill="none"
            sx={{ ...styles }}>
            <path
                d="M36.0167 31.7947C38.5599 29.5535 40 26.5662 40 23.4661C40 20.1716 38.4402 17.0904 35.6078 14.7897C32.8512 12.5513 29.2024 11.3184 25.3331 11.3184C21.4638 11.3184 17.815 12.5513 15.0588 14.7898C12.2264 17.0904 10.6666 20.1716 10.6666 23.4661C10.6666 26.7607 12.2264 29.8419 15.0588 32.1426C17.815 34.3812 21.4638 35.614 25.3331 35.614C25.8487 35.614 26.3674 35.5915 26.8818 35.5468L27.7606 36.3C30.7882 38.8941 34.6601 40.3221 38.6663 40.3223H39.9996V37.5161L39.6091 37.13C38.0686 35.6023 36.8479 33.7893 36.0167 31.7947V31.7947ZM29.5071 34.3073L27.7437 32.796L27.1557 32.8673C26.551 32.9404 25.9423 32.9771 25.3331 32.9771C18.7165 32.9771 13.3332 28.7105 13.3332 23.4661C13.3332 18.2218 18.7165 13.9551 25.3331 13.9551C31.9497 13.9551 37.3329 18.2217 37.3329 23.4661C37.3329 26.079 36.0146 28.5183 33.6208 30.3346L32.8529 30.9173L33.2072 31.9089C33.9334 33.9342 35.0007 35.8235 36.364 37.4969C33.8251 37.0778 31.4524 35.9741 29.5071 34.3073V34.3073Z"
                sx={{ fill: 'iconPrimary' }}
            />
            <path
                d="M3.68204 25.6123C4.93014 24.0502 5.91008 22.2958 6.58268 20.4194L6.93434 19.4327L6.1671 18.8505C3.90979 17.1378 2.66664 14.839 2.66664 12.3777C2.66664 7.43192 7.75067 3.4082 13.9999 3.4082C18.5971 3.4082 22.5637 5.58597 24.3395 8.70636C24.6692 8.69054 25.0004 8.68164 25.3331 8.68164C26.0012 8.68164 26.6633 8.71369 27.3192 8.7778C26.633 7.01985 25.4411 5.41508 23.8026 4.08436C21.1724 1.94804 17.6915 0.771484 13.9999 0.771484C10.3082 0.771484 6.82726 1.94804 4.19696 4.08436C1.49048 6.28264 0 9.22793 0 12.3777C0 15.3276 1.36265 18.1699 3.77079 20.3079C2.98492 22.1779 1.83661 23.8778 0.390579 25.3118L0 25.698V28.457H1.33332C3.79888 28.4567 6.23054 27.889 8.43583 26.7988C8.19401 25.8925 8.05232 24.963 8.01325 24.0265C6.67474 24.8022 5.20866 25.339 3.68204 25.6123Z"
                sx={{ fill: 'text' }}
            />
        </svg>
    );
};
