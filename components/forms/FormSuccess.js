/** @jsxImportSource theme-ui */
import { Grid } from 'theme-ui';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import * as checkmarkAnimationData from '../../lib/lottie/checkmark.json';

import {
    simpleFadeInitial,
    simpleFadeExit,
    simpleFadeAnimate,
} from '../../lib/animations';
import { useEffect, useState } from 'react';

const FormSuccess = ({ name, color }) => {
    const [pausedState, setPausedState] = useState(true);

    const loadingLottieOptions = {
        loop: false,
        autoplay: false,
        animationData: checkmarkAnimationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    useEffect(() => {
        setTimeout(() => setPausedState(false), 100);
    }, [setPausedState]);

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
                    isPaused={pausedState}
                />
                <h4 sx={{ color: color === 'dark' ? 'text' : '#fff' }}>
                    Success!
                </h4>
                <p sx={{ color: color === 'dark' ? 'text' : '#fff' }}>
                    We&apos;ll be in touch, {name}!
                </p>
            </Grid>
        </motion.div>
    );
};

export default FormSuccess;
