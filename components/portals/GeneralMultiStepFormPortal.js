/** @jsxImportSource theme-ui */
import { createPortal } from 'react-dom';
import { motion, useAnimation } from 'framer-motion';
import { Close, Container } from 'theme-ui';
import { useEffect } from 'react';

const GeneralMultiStepFormPortal = ({ children, open, onClose }) => {
    const bgModalControls = useAnimation();
    const formCardControls = useAnimation();

    useEffect(() => {
        bgModalControls.set({
            opacity: 0,
            position: 'fixed',
            top: '0',
            bottom: '0',
            width: '100vw',
            zIndex: '100000',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        });

        formCardControls.set({
            opacity: 0,
            y: '500px',
        });

        bgModalControls.start({
            opacity: 1,
            transition: { duration: 0.5 },
        });

        formCardControls.start({
            opacity: 1,
            y: 0,
            width: '100%',
            transition: {
                type: 'spring',
                delay: 0.3,
                damping: 10,
            },
        });
    }, [bgModalControls, formCardControls, open]);

    const closePortal = () => {
        bgModalControls.start({
            opacity: 0,
            transition: { duration: 0.5, delay: 0.2 },
        });

        formCardControls.start({
            y: '500px',
            opacity: 0,
            transition: {
                type: 'spring',
                damping: 10,
            },
        });

        setTimeout(() => {
            onClose();
        }, 500);
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return open
        ? createPortal(
              <motion.div animate={bgModalControls} onClick={closePortal}>
                  <motion.div animate={formCardControls}>
                      <Container
                          sx={{
                              maxWidth: '1050px',
                              px: '25px',
                          }}>
                          <div
                              sx={{
                                  backgroundColor: 'muted',
                                  borderRadius: '15px',
                                  padding: ['15px', '25px', '50px', '50px'],
                                  minHeight: [
                                      '600px',
                                      '600px',
                                      '500px',
                                      '500px',
                                  ],
                                  position: 'relative',
                                  display: 'flex',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                              }}
                              data-cy="GeneralMultiStepFormPortal"
                              onClick={stopPropagation}>
                              <Close
                                  onClick={closePortal}
                                  size={60}
                                  sx={{
                                      position: 'absolute',
                                      right: '15px',
                                      top: '15px',
                                      '&:hover': {
                                          cursor: 'pointer',
                                      },
                                  }}
                              />
                              <div sx={{ width: '100%' }}>{children}</div>
                          </div>
                      </Container>
                  </motion.div>
              </motion.div>,
              document.getElementById('general-form-modal')
          )
        : null;
};

export default GeneralMultiStepFormPortal;
