/** @jsxImportSource theme-ui */
import { Button, Label, Textarea, Grid, Message } from 'theme-ui';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useCallback } from 'react';
import {
    fadeGrowInitial,
    fadeGrowAnimate,
    fadeShrinkExit,
} from '../../../lib/animations';

const ThirdStep = ({
    register,
    getFieldState,
    stepControl,
    setFocus,
    trigger,
    getValues,
}) => {
    const triggerValidation = useCallback(
        async () => await trigger(),
        [trigger]
    );

    useEffect(() => {
        setFocus('WebsiteDetails');
        triggerValidation();
    }, [setFocus, triggerValidation]);

    return (
        <>
            <Label htmlFor="WebsiteDetails" sx={{ mb: '15px' }}>
                Briefly explain what your site/business does or needs to do:
            </Label>
            <Textarea
                {...register('WebsiteDetails', { maxLength: 200 })}
                placeholder="Website needs and wants"
                rows={8}
                sx={{
                    padding: '5px 10px',
                    '&::placeholder': { color: 'text', opacity: '0.7' },
                }}
            />
            <p sx={{ fontSize: '16px', mt: '10px' }}>
                Please keep it brief - max characters 200. Characters left:
                {200 - getValues('WebsiteDetails').length}
            </p>
            <AnimatePresence>
                {getFieldState('WebsiteDetails').invalid ? (
                    <motion.div
                        key="WebsiteDetailsMessage"
                        initial={fadeGrowInitial}
                        animate={fadeGrowAnimate}
                        exit={fadeShrinkExit}>
                        <Message
                            sx={{
                                backgroundColor: 'muted',
                                color: 'text',
                                fontSize: '16px',
                                padding: '5px 15px',
                            }}>
                            You&apos;ve surpassed the character limit. Please
                            keep it under 200 characters.
                        </Message>
                    </motion.div>
                ) : null}
            </AnimatePresence>
            <Grid columns={2} sx={{ mt: '15px' }}>
                <Button
                    sx={{ justifySelf: 'start' }}
                    onClick={() => stepControl('prev')}
                    variant="light"
                    type="button">
                    Previous
                </Button>
                <AnimatePresence>
                    {!getFieldState('WebsiteDetails').invalid ? (
                        <motion.div
                            initial={fadeGrowInitial}
                            animate={fadeGrowAnimate}
                            exit={fadeShrinkExit}
                            sx={{ justifySelf: 'end' }}>
                            <Button
                                onClick={() => stepControl('next')}
                                type="button">
                                Next
                            </Button>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </Grid>
        </>
    );
};

export default ThirdStep;
