/** @jsxImportSource theme-ui */
import { motion } from 'framer-motion';
import { useColorMode } from 'theme-ui';
import { useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import GeneralMultiStepFormPortal from '../portals/GeneralMultiStepFormPortal';
import GeneralMultiStep from '../../components/forms/GeneralMultiStep/GeneralMultiStep';

const FormModalToggle = () => {
    const [mode, setMode] = useColorMode();
    const [formModalOpen, setFormModalOpen] = useState(false);

    return (
        <motion.div
            initial={{
                opacity: 0,
                position: 'fixed',
                left: '20px',
                bottom: '20px',
            }}
            animate={{
                opacity: 1,
                position: 'fixed',
                left: '105px',
                bottom: '40px',
                zIndex: '99',
            }}
            exit={{
                opacity: 0,
                position: 'fixed',
                left: '20px',
                bottom: '20px',
            }}>
            <div
                sx={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: mode === 'deep' ? 'primary' : 'muted',
                    padding: '10px;',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
                    borderRadius: '50%',
                    transition: 'all 0.2s ease-out',
                    '&:hover': {
                        cursor: 'pointer',
                        transform: 'scale(1.06)',
                    },
                }}
                onClick={() => setFormModalOpen(true)}
                data-cy="formModalToggle">
                <svg
                    viewBox="0 0 29 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.04143 12.6579C9.04143 13.1375 8.85092 13.5974 8.5118 13.9365C8.17268 14.2757 7.71274 14.4662 7.23315 14.4662C6.75356 14.4662 6.29362 14.2757 5.9545 13.9365C5.61538 13.5974 5.42487 13.1375 5.42487 12.6579C5.42487 12.1783 5.61538 11.7184 5.9545 11.3792C6.29362 11.0401 6.75356 10.8496 7.23315 10.8496C7.71274 10.8496 8.17268 11.0401 8.5118 11.3792C8.85092 11.7184 9.04143 12.1783 9.04143 12.6579ZM16.2746 12.6579C16.2746 13.1375 16.0841 13.5974 15.7449 13.9365C15.4058 14.2757 14.9459 14.4662 14.4663 14.4662C13.9867 14.4662 13.5268 14.2757 13.1876 13.9365C12.8485 13.5974 12.658 13.1375 12.658 12.6579C12.658 12.1783 12.8485 11.7184 13.1876 11.3792C13.5268 11.0401 13.9867 10.8496 14.4663 10.8496C14.9459 10.8496 15.4058 11.0401 15.7449 11.3792C16.0841 11.7184 16.2746 12.1783 16.2746 12.6579ZM21.6994 14.4662C22.179 14.4662 22.639 14.2757 22.9781 13.9365C23.3172 13.5974 23.5077 13.1375 23.5077 12.6579C23.5077 12.1783 23.3172 11.7184 22.9781 11.3792C22.639 11.0401 22.179 10.8496 21.6994 10.8496C21.2198 10.8496 20.7599 11.0401 20.4208 11.3792C20.0817 11.7184 19.8911 12.1783 19.8911 12.6579C19.8911 13.1375 20.0817 13.5974 20.4208 13.9365C20.7599 14.2757 21.2198 14.4662 21.6994 14.4662Z"
                        sx={{
                            fill: mode === 'deep' ? 'alwaysLight' : 'secondary',
                        }}
                    />
                    <path
                        d="M3.91493 26.768L3.9511 26.7608C7.26026 26.1044 9.28192 25.2382 10.2222 24.7626C11.6066 25.1319 13.0335 25.3179 14.4663 25.316C22.4553 25.316 28.9325 19.6488 28.9325 12.658C28.9325 5.66716 22.4553 0 14.4663 0C6.47727 0 0 5.66716 0 12.658C0 15.8406 1.34356 18.7519 3.56232 20.9761C3.40709 22.4048 3.08918 23.8111 2.61478 25.1677L2.60935 25.1876C2.47453 25.5761 2.32739 25.9603 2.16813 26.3395C2.02528 26.6758 2.30195 27.0519 2.66179 26.9941C3.0807 26.9255 3.49847 26.8502 3.91493 26.768ZM5.36156 21.1479C5.38689 20.8831 5.35351 20.6161 5.26381 20.3657C5.1741 20.1154 5.03028 19.8879 4.84258 19.6994C2.9258 17.7754 1.80828 15.3125 1.80828 12.658C1.80828 6.88595 7.24037 1.80828 14.4663 1.80828C21.6922 1.80828 27.1243 6.88595 27.1243 12.658C27.1243 18.4318 21.6922 23.5077 14.4663 23.5077C13.1916 23.5096 11.9222 23.3442 10.6906 23.0158C10.2602 22.9005 9.80232 22.9482 9.40489 23.1497C8.70508 23.5041 7.16261 24.1804 4.64186 24.7645C4.99353 23.5839 5.23447 22.3731 5.36156 21.1479Z"
                        sx={{
                            fill: mode === 'deep' ? 'alwaysLight' : 'secondary',
                        }}
                    />
                </svg>
                <AnimatePresence exitBeforeEnter>
                    <GeneralMultiStepFormPortal
                        key="multiStepFormModal"
                        open={formModalOpen}
                        onClose={() => setFormModalOpen(false)}>
                        <GeneralMultiStep />
                    </GeneralMultiStepFormPortal>
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default FormModalToggle;
