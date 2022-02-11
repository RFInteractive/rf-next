/** @jsxImportSource theme-ui */
import {
    Button,
    Label,
    Input,
    Textarea,
    Checkbox,
    Radio,
    Select,
    Spinner,
    Grid,
    Message,
} from 'theme-ui';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import {
    fadeGrowInitial,
    fadeGrowAnimate,
    fadeShrinkExit,
    simpleFadeInitial,
    simpleFadeExit,
    simpleFadeAnimate,
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
            console.table(data);
            setFormStatus('submitting');
            setTimeout(() => setFormStatus('success'), 2000);
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
        <AnimatePresence exitBeforeEnter>
            {formStatus === 'submitting' ? <FormSubmitting /> : null}

            {formStatus === 'success' ? (
                <FormSuccess
                    setFormStatus={setFormStatus}
                    name={getValues('Name')}
                />
            ) : null}

            {formStatus === 'initial' ? (
                <motion.div
                    key="formInitial"
                    initial={{ ...simpleFadeInitial }}
                    animate={{
                        ...simpleFadeAnimate,
                        transition: { duration: 0.4 },
                    }}
                    exit={{ ...simpleFadeExit, transition: { duration: 0.4 } }}>
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
            <Label htmlFor="WebsiteDetails" sx={{ mb: '15px' }}>
                Briefly explain what your site/business does or needs to do:
            </Label>
            <Textarea
                {...register('WebsiteDetails', { maxLength: 200 })}
                placeholder="Website needs and wants"
                rows={8}
                sx={{
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
                rows={8}
                sx={{
                    padding: '5px 10px',
                    '&::placeholder': { color: 'text', opacity: '0.7' },
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

const FormSubmitting = () => {
    return (
        <motion.div
            key="formSubmitting"
            initial={{ ...simpleFadeInitial }}
            animate={{
                ...simpleFadeAnimate,
                transition: { duration: 0.4 },
            }}
            exit={{ ...simpleFadeExit, transition: { duration: 0.4 } }}>
            <Grid sx={{ justifyItems: 'center', padding: '30px' }}>
                <Spinner color={'text'} size={35} sx={{ marginLeft: '12px' }} />
                <p>Submitting</p>
            </Grid>
        </motion.div>
    );
};

const FormSuccess = ({ setFormStatus, name }) => {
    return (
        <motion.div
            key="formSuccess"
            initial={{ ...simpleFadeInitial }}
            animate={{
                ...simpleFadeAnimate,
                transition: { duration: 0.4 },
            }}
            exit={{ ...simpleFadeExit, transition: { duration: 0.4 } }}>
            <Grid sx={{ justifyItems: 'center', padding: '30px' }}>
                <h4>Success!</h4>
                <p>We&apos;ll be in touch, {name}</p>
                <Button type="button" onClick={() => setFormStatus('initial')}>
                    Reset
                </Button>
            </Grid>
        </motion.div>
    );
};
