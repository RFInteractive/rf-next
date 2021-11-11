import ColorModeToggle from '../AppColorModeToggle';
import Navbar from '../navigation/Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
            <ColorModeToggle />
        </>
    );
};

export default Layout;
