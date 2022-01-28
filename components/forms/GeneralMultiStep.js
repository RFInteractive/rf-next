/** @jsxImportSource theme-ui */
import { Button, Label, Input, Textarea, Checkbox } from 'theme-ui';
import { Grid, Message } from 'theme-ui';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';

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
        getValues,
        trigger,
    } = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: {
            Interest: [],
            firstName: '',
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
                                stepControl={changeStep}
                                getValues={getValues}
                            />
                        </Step>
                    )}
                    {stepNumber === 2 && (
                        <Step key={2}>
                            <SecondStep
                                register={register}
                                getFieldState={getFieldState}
                                stepControl={changeStep}
                                setFocus={setFocus}
                                trigger={trigger}
                                touchedFields={touchedFields}
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

const FirstStep = ({ register, stepControl, getValues }) => {
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
                        <Checkbox {...register('Interest')} value="Web Dev" />
                        Web Dev
                    </Grid>
                </Label>
                <Grid sx={{ mt: '15px' }}>
                    <Button
                        sx={{ justifySelf: 'end' }}
                        onClick={() => stepControl('next')}
                        type="button"
                    >
                        Next
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

const SecondStep = ({
    register,
    getFieldState,
    stepControl,
    setFocus,
    trigger,
    touchedFields,
}) => {
    useEffect(() => {
        setFocus('firstName');
        triggerValidation();
    }, [setFocus, triggerValidation]);

    const triggerValidation = useCallback(
        async () => await trigger(),
        [trigger]
    );

    return (
        <>
            <Label htmlFor="firstName">First Name *</Label>
            <Input {...register('firstName', { required: true })} />
            <AnimatePresence>
                {getFieldState('firstName').invalid &&
                touchedFields.firstName ? (
                    <motion.div
                        key="firstNameMessage"
                        initial={inputMessageInitial}
                        animate={inputMessageAnimate}
                        exit={inputMessageExit}
                    >
                        <Message
                            sx={{
                                backgroundColor: 'muted',
                                color: 'text',
                                fontSize: '16px',
                                padding: '5px 15px',
                            }}
                        >
                            This input is required
                        </Message>
                    </motion.div>
                ) : null}
            </AnimatePresence>
            <Grid columns={2} sx={{ mt: '15px' }}>
                <Button
                    sx={{ justifySelf: 'start' }}
                    onClick={() => stepControl('prev')}
                    type="button"
                >
                    Previous
                </Button>
                <Button
                    sx={{ justifySelf: 'end' }}
                    onClick={() => stepControl('next')}
                    type="button"
                >
                    Next
                </Button>
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
    useEffect(() => {
        setFocus('lastName');
        triggerValidation();
    }, [setFocus, triggerValidation]);

    const triggerValidation = useCallback(
        async () => await trigger(),
        [trigger]
    );

    return (
        <>
            <Label htmlFor="lastName">Last Name *</Label>
            <Input {...register('lastName', { required: true })} />
            <AnimatePresence>
                {getFieldState('lastName').invalid && touchedFields.lastName ? (
                    <motion.div
                        key="lastNameMessage"
                        initial={inputMessageInitial}
                        animate={inputMessageAnimate}
                        exit={inputMessageExit}
                    >
                        <Message
                            sx={{
                                backgroundColor: 'muted',
                                color: 'text',
                                fontSize: '16px',
                                padding: '5px 15px',
                            }}
                        >
                            This input is required
                        </Message>
                    </motion.div>
                ) : null}
            </AnimatePresence>
            <Grid columns={2} sx={{ mt: '15px' }}>
                <Button
                    sx={{ justifySelf: 'start' }}
                    onClick={() => stepControl('prev')}
                    type="button"
                >
                    Previous
                </Button>
                <Button
                    sx={{ justifySelf: 'end' }}
                    onClick={() => stepControl('next')}
                    type="button"
                >
                    Next
                </Button>
            </Grid>
        </>
    );
};

const inputMessageInitial = { opacity: 0, height: '0px' };

const inputMessageAnimate = {
    opacity: 1,
    height: 'auto',
    transition: {
        duration: 0.5,
    },
};

const inputMessageExit = {
    opacity: 0,
    height: '0px',
    transition: {
        duration: 0.5,
    },
};
