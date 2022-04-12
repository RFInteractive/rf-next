/** @jsxImportSource theme-ui */
import { Button } from 'theme-ui';
import { useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import GeneralMultiStepFormPortal from './GeneralMultiStepFormPortal';
import GeneralMultiStep from '../forms/GeneralMultiStep/GeneralMultiStep';

const MultiStepPortalButton = ({ buttonText, variant }) => {
    const [formModalOpen, setFormModalOpen] = useState(false);

    return (
        <>
            <Button
                variant={variant}
                onClick={() => setFormModalOpen(true)}
                sx={{ mt: '20px' }}>
                {buttonText}
            </Button>
            <AnimatePresence exitBeforeEnter>
                <GeneralMultiStepFormPortal
                    key="multiStepFormModal"
                    open={formModalOpen}
                    onClose={() => setFormModalOpen(false)}>
                    <GeneralMultiStep />
                </GeneralMultiStepFormPortal>
            </AnimatePresence>
        </>
    );
};

export default MultiStepPortalButton;
