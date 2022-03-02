/** @jsxImportSource theme-ui */
import { Grid, Button } from 'theme-ui';
import { motion } from 'framer-motion';

import {
    simpleFadeInitial,
    simpleFadeExit,
    simpleFadeAnimate,
} from '../../lib/animations';

const FormError = ({ name, color, setFormStatus }) => {
    return (
        <motion.div
            initial={{ ...simpleFadeInitial }}
            animate={{
                ...simpleFadeAnimate,
                transition: { duration: 0.4 },
            }}
            exit={{ ...simpleFadeExit, transition: { duration: 0.4 } }}>
            <Grid sx={{ justifyItems: 'center', padding: '30px' }}>
                <p sx={{ color: color === 'light' ? 'text' : '#fff' }}>
                    I&apos;m sorry {name}, but something seems to have gone
                    wrong...
                </p>
                <Button type="button" onClick={() => setFormStatus('initial')}>
                    Try Again?
                </Button>
            </Grid>
        </motion.div>
    );
};

export default FormError;
