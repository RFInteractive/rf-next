/** @jsxImportSource theme-ui */
import { Button, Label, Checkbox, Grid } from 'theme-ui';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useCallback } from 'react';
import {
    fadeGrowInitial,
    fadeGrowAnimate,
    fadeShrinkExit,
} from '../../../lib/animations';

const FirstStep = ({ register, getFieldState, stepControl, trigger }) => {
    const triggerValidation = useCallback(
        async () => await trigger(),
        [trigger]
    );

    useEffect(() => {
        triggerValidation();
    }, [triggerValidation]);

    return (
        <>
            <Grid gap={10}>
                <p>
                    <strong>What can we help you with? *</strong>
                </p>
                <Label>
                    <Grid columns={'auto 1fr'} sx={{ alignItems: 'center' }}>
                        <Checkbox
                            {...register('Interest', { required: true })}
                            value="SEO"
                        />
                        SEO
                    </Grid>
                </Label>
                <Label>
                    <Grid columns={'auto 1fr'} sx={{ alignItems: 'center' }}>
                        <Checkbox {...register('Interest')} value="Content" />
                        Content
                    </Grid>
                </Label>
                <Label>
                    <Grid columns={'auto 1fr'} sx={{ alignItems: 'center' }}>
                        <Checkbox
                            {...register('Interest')}
                            value="Web Design Dev"
                        />
                        Web Design/Development
                    </Grid>
                </Label>
                <Label>
                    <Grid columns={'auto 1fr'} sx={{ alignItems: 'center' }}>
                        <Checkbox
                            {...register('Interest')}
                            value="Advertising"
                        />
                        Advertising
                    </Grid>
                </Label>
                <Label>
                    <Grid columns={'auto 1fr'} sx={{ alignItems: 'center' }}>
                        <Checkbox {...register('Interest')} value="Unsure" />
                        Not Sure
                    </Grid>
                </Label>
                <AnimatePresence>
                    {!getFieldState('Interest').invalid ? (
                        <Grid sx={{ mt: '15px' }}>
                            <motion.div
                                initial={fadeGrowInitial}
                                animate={fadeGrowAnimate}
                                exit={fadeShrinkExit}
                                sx={{ justifySelf: 'end' }}>
                                <Button
                                    onClick={() => stepControl('next')}
                                    type="button"
                                    data-cy="GeneralMultiStepFirstStepNextBtn">
                                    Next
                                </Button>
                            </motion.div>
                        </Grid>
                    ) : null}
                </AnimatePresence>
            </Grid>
        </>
    );
};

export default FirstStep;
