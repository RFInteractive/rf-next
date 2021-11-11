/** @jsxImportSource theme-ui */
import { useEffect } from 'react';
import { useColorMode, Button } from 'theme-ui';

const modes = ['light', 'black', 'deep'];

const ColorModeToggle = () => {
    const [mode, setMode] = useColorMode();

    useEffect(() => {
        if (mode === 'dark') {
            setMode('light');
        }
    }, [mode, setMode]);

    return (
        <Button
            onClick={(e) => {
                const index = modes.indexOf(mode);
                const next = modes[(index + 1) % modes.length];
                setMode(next);
            }}
            sx={{
                variant: 'buttons.primary',
                position: 'fixed',
                right: '30px',
                bottom: '30px',
                zIndex: '100',
            }}
        >
            {mode}
        </Button>
    );
};

export default ColorModeToggle;
