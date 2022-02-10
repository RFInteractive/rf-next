/** @jsxImportSource theme-ui */
import { Button, Label, Input, Textarea, Checkbox, Radio } from 'theme-ui';
import { Grid, Message } from 'theme-ui';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import {
    fadeGrowInitial,
    fadeGrowAnimate,
    fadeShrinkExit,
} from '../../lib/animations';

import { useForm } from 'react-hook-form';
import Step from './Step';

const GeneralMultiStep = () => {
    const {
        handleSubmit,
        watch,
        getFieldState,
        formState: { errors, isValid, touchedFields },
        setFocus,
        register,
        trigger,
        getValues,
    } = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: {
            Interest: [],
            WebsiteExistence: null,
            WebsiteUrl: '',
            WebsiteDetails: '',
        },
    });

    const [stepNumber, setStepNumber] = useState(1);

    const totalSteps = 3;

    const watchAllFields = watch();

    const submitForm = async (data, e) => {
        e.preventDefault();
        await trigger();
        if (isValid && stepNumber === totalSteps) {
            console.table(data);
            return;
        }

        changeStep('next');
    };

    const changeStep = (direction) => {
        if (direction === 'next' && stepNumber < totalSteps) {
            setStepNumber((currentStep) => currentStep + 1);
            return;
        } else if (direction === 'prev' && stepNumber > 1) {
            setStepNumber((currentStep) => currentStep - 1);
            return;
        }
        return;
    };

    return (
        <Grid columns={1} gap={20} sx={{ px: '25px' }}>
            <form
                onSubmit={handleSubmit(submitForm)}
                sx={{ maxWidth: '900px' }}>
                <AnimatePresence exitBeforeEnter>
                    {stepNumber === 1 && (
                        <Step key={1}>
                            <FirstStep
                                register={register}
                                getFieldState={getFieldState}
                                stepControl={changeStep}
                                trigger={trigger}
                                touchedFields={touchedFields}
                            />
                        </Step>
                    )}
                    {stepNumber === 2 && (
                        <Step key={2}>
                            <SecondStep
                                register={register}
                                stepControl={changeStep}
                                trigger={trigger}
                                getValues={getValues}
                            />
                        </Step>
                    )}
                    {stepNumber === 3 && (
                        <Step key={3}>
                            <ThirdStep
                                register={register}
                                getFieldState={getFieldState}
                                stepControl={changeStep}
                                setFocus={setFocus}
                                trigger={trigger}
                                getValues={getValues}
                            />
                        </Step>
                    )}
                </AnimatePresence>
            </form>
            <p>{JSON.stringify(watchAllFields)}</p>
            <p>Is entire form valid: {JSON.stringify(isValid)}</p>
        </Grid>
    );
};

export default GeneralMultiStep;

const FirstStep = ({
    register,
    getFieldState,
    stepControl,
    trigger,
    touchedFields,
}) => {
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
                                    type="button">
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

const SecondStep = ({ register, stepControl, trigger, getValues }) => {
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
                        name="websiteExistence"
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
                            <Label htmlFor="WebsiteUrl">
                                What&apos;s your website&apos;s URL?
                            </Label>
                            <Input {...register('websiteUrl')} />
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
            <Label htmlFor="WebsiteDetails">
                Briefly explain what your site/business does or needs to do:
            </Label>
            <Textarea
                {...register('WebsiteDetails', { maxLength: 200 })}
                placeholder="Website needs and wants"
                rows={8}
                sx={{
                    maxWidth: '900px',
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
