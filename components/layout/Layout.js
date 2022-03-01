import QuickSettingsToggle from '../ui-controls/QuickSettingsToggle';
import Navbar from '../navigation/Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
            <QuickSettingsToggle />
        </>
    );
};

export default Layout;
