/** @jsxImportSource theme-ui */
import { Button, Label, Textarea, Grid, Message } from 'theme-ui';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useCallback } from 'react';
import {
    fadeGrowInitial,
    fadeGrowAnimate,
    fadeShrinkExit,
} from '../../../lib/animations';

const FifthStep = ({
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
        setFocus('AdditionalQuestions');
        triggerValidation();
    }, [setFocus, triggerValidation]);

    return (
        <>
            <Label htmlFor="AdditionalQuestions" sx={{ mb: '15px' }}>
                Any additional questions we should come prepared to answer for
                you?
            </Label>
            <Textarea
                {...register('AdditionalQuestions', { maxLength: 200 })}
                placeholder="Anything else?"
                rows={6}
                sx={{
                    padding: '5px 10px',
                    '&::placeholder': { color: 'text', opacity: '0.7' },
                    resize: 'none',
                }}
            />
            <p sx={{ fontSize: '16px', mt: '10px' }}>
                Please keep it brief - max characters 200. Characters left:
                {200 - getValues('AdditionalQuestions').length}
            </p>
            <AnimatePresence>
                {getFieldState('AdditionalQuestions').invalid ? (
                    <motion.div
                        key="AdditionalQuestionsMessage"
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
                    {!getFieldState('AdditionalQuestions').invalid ? (
                        <motion.div
                            initial={fadeGrowInitial}
                            animate={fadeGrowAnimate}
                            exit={fadeShrinkExit}
                            sx={{ justifySelf: 'end' }}>
                            <Button type="submit">Let&apos;s Do This!</Button>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </Grid>
        </>
    );
};

export default FifthStep;
