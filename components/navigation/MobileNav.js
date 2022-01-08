/** @jsxImportSource theme-ui */
import { useState } from 'react';

import MobileMenuPortal from '../portals/mobileMenuPortal';

const MobileNav = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav
            sx={{
                display: ['block', 'block', 'none', 'none'],
                position: 'fixed',
            }}
        >
            <h1>Mobile Nav</h1>
            <button onClick={() => setOpen(true)}>open</button>
            <MobileMenuPortal open={open} onClose={() => setOpen(false)}>
                Mobile Portal
            </MobileMenuPortal>
        </nav>
    );
};

export default MobileNav;
