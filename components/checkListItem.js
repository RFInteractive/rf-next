/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource theme-ui */
import { Flex } from 'theme-ui';

const CheckListItem = ({
    children,
    bgColor = 'primary',
    checkmarkColor = '#fff',
}) => {
    return (
        <Flex sx={{ alignItems: 'center', my: '15px' }}>
            <div
                sx={{
                    backgroundColor: bgColor,
                    padding: '5px',
                    borderRadius: '50%',
                    width: '20px',
                    height: '20px',
                    display: 'flex',
                    justifyItems: 'center',
                    alignItems: 'center',
                }}
            >
                <svg
                    width="12"
                    height="9"
                    viewBox="0 0 12 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1 4.5L4.5 8L10.3333 1"
                        sx={{ stroke: checkmarkColor }}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <p sx={{ marginLeft: '10px' }}> {children} </p>
        </Flex>
    );
};

export default CheckListItem;
