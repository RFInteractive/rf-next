/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource theme-ui */
import { Flex } from 'theme-ui';

const CheckListItem = ({ children, color }) => {
    return (
        <Flex sx={{ alignItems: 'center', my: '15px' }}>
            <div
                sx={{
                    backgroundColor: color,
                    padding: '5px',
                    borderRadius: '50%',
                    width: '20px',
                    height: '20px',
                    display: 'flex',
                    justifyItems: 'center',
                    alignItems: 'center',
                }}
            >
                <img
                    src="/icons/icon-checkmark.svg"
                    sx={{ height: '7px' }}
                    alt="checkmark icon"
                />
            </div>
            <p sx={{ marginLeft: '8px' }}> {children} </p>
        </Flex>
    );
};

export default CheckListItem;
