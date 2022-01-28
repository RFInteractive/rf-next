/** @jsxImportSource theme-ui */
import {
    Button,
    Label,
    Input,
    Select,
    Textarea,
    Radio,
    Checkbox,
} from 'theme-ui';
import { Grid, Message } from 'theme-ui';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import { useForm, Controller } from 'react-hook-form';
import Step from './Step';

const GeneralMultiStep = () => {
    const {
        handleSubmit,
        watch,
        getFieldState,
        formState,
        setFocus,
        register,
        getValues,
    } = useForm({
        mode: 'onSubmit',
        defaultValues: {
            Interest: [],
            firstName: '',
        },
    });

    const [stepNumber, setStepNumber] = useState(1);

    const totalSteps = 2;

    const watchAllFields = watch();

    const submitForm = async (data, e) => {
        e.preventDefault();
        if (formState.isValid && stepNumber === totalSteps) {
            console.table(data);
            return;
        }

        setStepNumber((currentStep) => currentStep + 1);
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
                    {renderStep(
                        stepNumber,
                        register,
                        getFieldState,
                        changeStep,
                        setFocus,
                        getValues
                    )}
                </AnimatePresence>
            </form>
            <p>{JSON.stringify(watchAllFields)}</p>
            <p>{JSON.stringify(formState.isValid)}</p>
        </Grid>
    );
};

export default GeneralMultiStep;

const renderStep = (
    stepNumber,
    register,
    getFieldState,
    changeStep,
    setFocus,
    getValues
) => {
    switch (stepNumber) {
        case 1:
            return (
                <Step key={1}>
                    <FirstStep
                        register={register}
                        stepControl={changeStep}
                        getValues={getValues}
                    />
                </Step>
            );
        case 2:
            return (
                <Step key={2}>
                    <SecondStep
                        register={register}
                        getFieldState={getFieldState}
                        stepControl={changeStep}
                        setFocus={setFocus}
                    />
                </Step>
            );
        default:
            return <h4>Misstep</h4>;
    }
};

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

const SecondStep = ({ register, getFieldState, stepControl, setFocus }) => {
    useEffect(() => {
        setFocus('firstName');
    }, [setFocus]);

    return (
        <>
            <Label htmlFor="firstName">First Name *</Label>
            <Input {...register('firstName', { required: true })} />
            <AnimatePresence>
                {getFieldState('firstName').invalid ? (
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
