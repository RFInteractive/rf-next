/** @jsxImportSource theme-ui */
import { Grid, Button, Label, Input, Textarea, Message } from 'theme-ui';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
    simpleFadeInitial,
    simpleFadeExit,
    simpleFadeAnimate,
    fadeGrowInitial,
    fadeGrowAnimate,
    fadeShrinkExit,
} from '../../lib/animations';

import { useForm } from 'react-hook-form';
import FormSubmitting from './FormSubmitting';
import FormSuccess from './FormSuccess';
import FormError from './FormError';
import axios from 'axios';

const ContactUsForm = ({ formTextColor = 'dark' }) => {
    const [formStatus, setFormStatus] = useState('nothingness');

    const {
        handleSubmit,
        getFieldState,
        formState: { errors, isValid },
        watch,
        register,
        getValues,
    } = useForm({
        defaultValues: {
            Name: '',
            Email: '',
            Message: '',
        },
    });

    // will this postponed render of form prevent spam?
    useEffect(
        () => setTimeout(() => setFormStatus('initial'), 1000),
        [setFormStatus]
    );

    // for textarea character count - watch() needs to be initiated on mount
    useEffect(() => watch(), [watch, formStatus]);

    const submitForm = async (data, e) => {
        e.preventDefault();
        if (isValid) {
            setFormStatus('submitting');
            try {
                await axios.post('/api/contact-us', data);
                setFormStatus('success');
            } catch (error) {
                setFormStatus('error');
                console.error(error);
            }
        }
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
                            <Label htmlFor="Name" sx={{ mb: '15px' }}>
                                Name *
                            </Label>
                            <Input {...register('Name', { required: true })} />
                            <AnimatePresence>
                                {getFieldState('Name').invalid ? (
                                    <motion.div
                                        key="NameMessage"
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

                            <Label htmlFor="Email" sx={{ mb: '15px' }}>
                                Email *
                            </Label>
                            <Input {...register('Email', { required: true })} />
                            <AnimatePresence>
                                {getFieldState('Email').invalid ? (
                                    <motion.div
                                        key="EmailMessage"
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

                            <Label htmlFor="Message" sx={{ mb: '15px' }}>
                                Message *
                            </Label>
                            <Textarea
                                {...register('Message', {
                                    maxLength: 200,
                                    required: true,
                                })}
                                placeholder="What can we do for you?"
                                rows={6}
                                sx={{
                                    padding: '5px 10px',
                                    '&::placeholder': {
                                        color: 'text',
                                        opacity: '0.7',
                                    },
                                    resize: 'none',
                                }}
                            />
                            <p sx={{ fontSize: '16px', mt: '10px' }}>
                                Please keep it brief - max characters 200.
                                Characters left:
                                {200 - getValues('Message').length}
                            </p>
                            <AnimatePresence>
                                {getFieldState('Message').invalid ? (
                                    <motion.div
                                        key="MessageFieldMessage"
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
                                            This field is required & the max
                                            length is 200 characters
                                        </Message>
                                    </motion.div>
                                ) : null}
                            </AnimatePresence>

                            <Button type="submit" sx={{ marginTop: '20px' }}>
                                Let&apos;s Do This!
                            </Button>
                        </form>
                    </Grid>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
};

export default ContactUsForm;
