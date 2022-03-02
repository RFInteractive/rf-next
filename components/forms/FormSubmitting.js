/** @jsxImportSource theme-ui */
import { Grid } from 'theme-ui';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import * as bikeAnimationData from '../../lib/lottie/bike.json';

import {
    simpleFadeInitial,
    simpleFadeExit,
    simpleFadeAnimate,
} from '../../lib/animations';

const FormSubmitting = ({ color }) => {
    const loadingLottieOptions = {
        loop: false,
        autoplay: true,
        animationData: bikeAnimationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    return (
        <motion.div
            initial={{ ...simpleFadeInitial }}
            animate={{
                ...simpleFadeAnimate,
                transition: { duration: 0.4 },
            }}
            exit={{ ...simpleFadeExit, transition: { duration: 0.4 } }}>
            <Grid sx={{ justifyItems: 'center', padding: '30px' }}>
                <Lottie
                    options={loadingLottieOptions}
                    height={200}
                    width={200}
                    speed={1.4}
                />
                <p sx={{ color: color === 'dark' ? 'text' : '#fff' }}>
                    One moment, please...
                </p>
            </Grid>
        </motion.div>
    );
};

export default FormSubmitting;
