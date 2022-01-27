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

import { useForm, Controller } from 'react-hook-form';

const GeneralMultiStep = () => {
    const { handleSubmit, watch, control, getFieldState, formState } =
        useForm();

    const watchAllFields = watch();

    const submitForm = (data, e) => {
        e.preventDefault();
        console.log(data);
    };

    return (
        <Grid columns={1} gap={20}>
            <form onSubmit={handleSubmit(submitForm)}>
                <Label htmlFor="firstName">First Name*</Label>
                <Controller
                    control={control}
                    name="firstName"
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ field }) => <Input {...field} />}
                />
                <AnimatePresence>
                    {getFieldState('firstName').invalid ? (
                        <motion.div
                            initial={{ opacity: 0, height: '0px' }}
                            animate={{
                                opacity: 1,
                                height: 'auto',
                                transition: {
                                    duration: 0.5,
                                },
                            }}
                            exit={{
                                opacity: 0,
                                height: '0px',
                                transition: {
                                    duration: 0.5,
                                },
                            }}
                        >
                            <Message
                                sx={{
                                    backgroundColor: 'muted',
                                    color: 'primary',
                                    fontSize: '16px',
                                    padding: '5px 15px',
                                }}
                            >
                                This input is required
                            </Message>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
                <Button
                    type="submit"
                    sx={{ padding: '8px 20px', fontSize: '16px' }}
                >
                    Submit form
                </Button>
            </form>
            <p>{JSON.stringify(watchAllFields)}</p>
            <p>{JSON.stringify(formState.errors)}</p>
        </Grid>
    );
};

export default GeneralMultiStep;
