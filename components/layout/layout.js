import ColorModeToggle from '../appColorModeToggle';
import Navbar from '../navigation/navbar';
import Footer from './footer';

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
