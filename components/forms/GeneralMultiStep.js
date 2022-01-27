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
import { useState } from 'react';

import { useForm, Controller } from 'react-hook-form';
import Step from './Step';
import { useEffect } from 'react/cjs/react.development';

const GeneralMultiStep = () => {
    const { handleSubmit, watch, control, getFieldState, formState, setFocus } =
        useForm({
            mode: 'onChange',
        });

    const [stepNumber, setStepNumber] = useState(1);

    const totalSteps = 2;

    const watchAllFields = watch();

    const submitForm = async (data, e) => {
        e.preventDefault();
        if (formState.isValid && stepNumber === totalSteps) {
            console.log('submitting form');
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
        <Grid columns={1} gap={20}>
            <form onSubmit={handleSubmit(submitForm)}>
                <AnimatePresence exitBeforeEnter>
                    {renderStep(
                        stepNumber,
                        control,
                        getFieldState,
                        changeStep,
                        setFocus
                    )}
                </AnimatePresence>
            </form>
            <p>{JSON.stringify(watchAllFields)}</p>
            <p>{JSON.stringify(formState.errors)}</p>
        </Grid>
    );
};

export default GeneralMultiStep;

const renderStep = (
    stepNumber,
    control,
    getFieldState,
    changeStep,
    setFocus
) => {
    switch (stepNumber) {
        case 1:
            return (
                <Step key={1}>
                    <FirstStep
                        control={control}
                        getFieldState={getFieldState}
                        stepControl={changeStep}
                        setFocus={setFocus}
                    />
                </Step>
            );
        case 2:
            return (
                <Step key={2}>
                    <SecondStep
                        control={control}
                        getFieldState={getFieldState}
                        stepControl={changeStep}
                        setFocus={setFocus}
                    />
                </Step>
            );
        default:
            return (
                <Step key={1}>
                    <FirstStep
                        control={control}
                        getFieldState={getFieldState}
                        stepControl={changeStep}
                    />
                </Step>
            );
    }
};

const FirstStep = ({ control, getFieldState, stepControl, setFocus }) => {
    useEffect(() => {
        setFocus('firstName');
    }, [setFocus]);

    return (
        <>
            <Label htmlFor="firstName">First Name*</Label>
            <Controller
                control={control}
                name="firstName"
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => <Input {...field} autocomplete="off" />}
            />
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
            <Grid sx={{ mt: '15px' }}>
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

const SecondStep = ({ control, getFieldState, stepControl, setFocus }) => {
    useEffect(() => {
        setFocus('lastName');
    }, [setFocus]);

    return (
        <>
            <Label htmlFor="lastName">Last Name*</Label>
            <Controller
                control={control}
                name="lastName"
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => <Input {...field} autocomplete="off" />}
            />
            <AnimatePresence>
                {getFieldState('lastName').invalid ? (
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
