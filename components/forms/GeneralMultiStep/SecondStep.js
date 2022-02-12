/** @jsxImportSource theme-ui */
import { Button, Label, Input, Radio, Grid } from 'theme-ui';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useCallback } from 'react';
import {
    fadeGrowInitial,
    fadeGrowAnimate,
    fadeShrinkExit,
} from '../../../lib/animations';

const SecondStep = ({ register, stepControl, trigger, getValues, color }) => {
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
                <p sx={{ mb: '15px' }}>Do you have a website already? *</p>

                <Label>
                    <Radio
                        name="WebsiteExistence"
                        value="true"
                        {...register('WebsiteExistence', { required: true })}
                    />
                    Yes
                </Label>
                <Label>
                    <Radio
                        name="WebsiteExistence"
                        value="false"
                        {...register('WebsiteExistence', { required: true })}
                    />
                    No
                </Label>

                <AnimatePresence>
                    {getValues('WebsiteExistence') === 'true' ? (
                        <motion.div
                            initial={fadeGrowInitial}
                            animate={fadeGrowAnimate}
                            exit={fadeShrinkExit}>
                            <Label htmlFor="WebsiteUrl" sx={{ mb: '15px' }}>
                                What&apos;s your website&apos;s URL?
                            </Label>
                            <Input {...register('WebsiteUrl')} />
                        </motion.div>
                    ) : null}
                </AnimatePresence>

                <Grid columns={2} sx={{ mt: '15px' }}>
                    <Button
                        sx={{ justifySelf: 'start' }}
                        onClick={() => stepControl('prev')}
                        type="button">
                        Previous
                    </Button>
                    <AnimatePresence>
                        {getValues('WebsiteExistence') !== null ? (
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
            </Grid>
        </>
    );
};

export default SecondStep;
