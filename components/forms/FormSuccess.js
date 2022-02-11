/** @jsxImportSource theme-ui */
import { Grid, Button } from 'theme-ui';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import * as checkmarkAnimationData from '../../lib/lottie/checkmark.json';

import {
    simpleFadeInitial,
    simpleFadeExit,
    simpleFadeAnimate,
} from '../../lib/animations';

const FormSuccess = ({ setFormStatus, name }) => {
    const loadingLottieOptions = {
        loop: false,
        autoplay: true,
        animationData: checkmarkAnimationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <motion.div
            key="formSuccess"
            initial={{ ...simpleFadeInitial }}
            animate={{
                ...simpleFadeAnimate,
                transition: { duration: 0.7 },
            }}
            exit={{ ...simpleFadeExit, transition: { duration: 0.7 } }}>
            <Grid sx={{ justifyItems: 'center', padding: '30px' }}>
                <Lottie
                    options={loadingLottieOptions}
                    height={200}
                    width={200}
                />
                <h4>Success!</h4>
                <p>We&apos;ll be in touch, {name}!</p>
                <Button type="button" onClick={() => setFormStatus('initial')}>
                    Reset
                </Button>
            </Grid>
        </motion.div>
    );
};

export default FormSuccess;
