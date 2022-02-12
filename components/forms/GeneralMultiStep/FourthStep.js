/** @jsxImportSource theme-ui */
import { Button, Label, Input, Select, Grid, Message } from 'theme-ui';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useCallback } from 'react';
import {
    fadeGrowInitial,
    fadeGrowAnimate,
    fadeShrinkExit,
} from '../../../lib/animations';

const FourthStep = ({
    register,
    getFieldState,
    stepControl,
    setFocus,
    trigger,
    getValues,
    touchedFields,
}) => {
    const triggerValidation = useCallback(
        async () => await trigger(),
        [trigger]
    );

    useEffect(() => {
        setFocus('Name');
        triggerValidation();
    }, [setFocus, triggerValidation]);

    return (
        <>
            <Label htmlFor="Name" sx={{ mb: '15px' }}>
                What&apos;s your name? *
            </Label>
            <Input
                {...register('Name', { required: true })}
                sx={{ mb: '20px' }}
            />

            <AnimatePresence>
                {getFieldState('Name').invalid && touchedFields.Name ? (
                    <motion.div
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
                            This field is required
                        </Message>
                    </motion.div>
                ) : null}
            </AnimatePresence>

            <Label htmlFor="ContactMethod" sx={{ mb: '15px' }}>
                What&apos;s your preferred method of contact,{' '}
                {getValues('Name')}?
            </Label>
            <Select {...register('ContactMethod')} sx={{ mb: '20px' }}>
                <option>Email</option>
                <option>Phone</option>
                <option>LinkedIn</option>
                <option>Instagram</option>
            </Select>

            <Label htmlFor="ContactValue" sx={{ mb: '15px' }}>
                What&apos;s your {getValues('ContactMethod')}? *
            </Label>
            <Input {...register('ContactValue', { required: true })} />

            <AnimatePresence>
                {getFieldState('ContactValue').invalid &&
                touchedFields.ContactValue ? (
                    <motion.div
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
                            This field is required
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
                    {!getFieldState('Name').invalid &&
                    !getFieldState('ContactValue').invalid ? (
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

export default FourthStep;
