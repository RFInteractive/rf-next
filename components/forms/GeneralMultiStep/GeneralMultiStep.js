/** @jsxImportSource theme-ui */
import { Grid } from 'theme-ui';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
    simpleFadeInitial,
    simpleFadeExit,
    simpleFadeAnimate,
} from '../../../lib/animations';

import { useForm } from 'react-hook-form';
import Step from '../Step';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FourthStep from './FourthStep';
import FifthStep from './FifthStep';
import FormSubmitting from '../FormSubmitting';
import FormSuccess from '../FormSuccess';
import FormError from '../FormError';
import axios from 'axios';

const GeneralMultiStep = ({ formTextColor = 'dark' }) => {
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
            Name: '',
            ContactMethod: 'Email',
            ContactValue: '',
            AdditionalQuestions: '',
        },
    });

    const [stepNumber, setStepNumber] = useState(1);
    const [formStatus, setFormStatus] = useState('initial');

    const totalSteps = 5;

    useEffect(() => watch(), [watch]);

    const submitForm = async (data, e) => {
        e.preventDefault();
        await trigger();
        if (isValid && stepNumber === totalSteps) {
            setFormStatus('submitting');
            try {
                await axios.post('/api/email', data);
                setFormStatus('success');
            } catch (error) {
                setFormStatus('error');
                console.error(error);
            }
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
        <AnimatePresence exitBeforeEnter>
            {formStatus === 'submitting' ? (
                <FormSubmitting color={formTextColor} key="formSubmitting" />
            ) : null}

            {formStatus === 'success' ? (
                <FormSuccess
                    key="formSuccess"
                    name={getValues('Name')}
                    color={formTextColor}
                />
            ) : null}

            {formStatus === 'error' ? (
                <FormError
                    key="formSuccess"
                    setFormStatus={setFormStatus}
                    name={getValues('Name')}
                    color={formTextColor}
                />
            ) : null}

            {formStatus === 'initial' ? (
                <motion.div
                    key="formInitial"
                    initial={{ ...simpleFadeInitial }}
                    animate={{
                        ...simpleFadeAnimate,
                        transition: { duration: 0.7 },
                    }}
                    exit={{ ...simpleFadeExit, transition: { duration: 0.7 } }}>
                    <Grid columns={1} gap={20}>
                        <form
                            onSubmit={handleSubmit(submitForm)}
                            sx={{
                                variant:
                                    formTextColor === 'dark'
                                        ? null
                                        : 'wrappers.darkBgFormWrapper',
                            }}>
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
                                {stepNumber === 4 && (
                                    <Step key={4}>
                                        <FourthStep
                                            register={register}
                                            getFieldState={getFieldState}
                                            stepControl={changeStep}
                                            setFocus={setFocus}
                                            trigger={trigger}
                                            getValues={getValues}
                                            touchedFields={touchedFields}
                                        />
                                    </Step>
                                )}
                                {stepNumber === 5 && (
                                    <Step key={5}>
                                        <FifthStep
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
                    </Grid>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
};

export default GeneralMultiStep;
