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
            <form onSubmit={handleSubmit(submitForm)}>
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
                                touchedFields={touchedFields}
                            />
                        </Step>
                    )}
                </AnimatePresence>
            </form>
            <p>{JSON.stringify(watchAllFields)}</p>
            <p>Is entire form valid: {JSON.stringify(isValid)}</p>
            <p>
                Is firstName field INvalid:{' '}
                {JSON.stringify(getFieldState('firstName').invalid)}
            </p>
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
    touchedFields,
}) => {
    const triggerValidation = useCallback(
        async () => await trigger(),
        [trigger]
    );

    useEffect(() => {
        setFocus('lastName');
        triggerValidation();
    }, [setFocus, triggerValidation]);

    return (
        <>
            <Label htmlFor="lastName">Last Name *</Label>
            <Input {...register('lastName', { required: true })} />
            <AnimatePresence>
                {getFieldState('lastName').invalid && touchedFields.lastName ? (
                    <motion.div
                        key="lastNameMessage"
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
                            This input is required
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
                <Button
                    sx={{ justifySelf: 'end' }}
                    onClick={() => stepControl('next')}
                    type="button">
                    Next
                </Button>
            </Grid>
        </>
    );
};
