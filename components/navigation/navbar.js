import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="appNav">
            <h1>Logo</h1>
            <div className="appNav__menu">
                <Link className="appNav__menuItem" href="/seo-services">
                    <a>SEO</a>
                </Link>
                <Link className="appNav__menuItem" href="/seo-content">
                    <a>Content</a>
                </Link>
                <Link
                    className="appNav__menuItem"
                    href="/web-design-and-development"
                >
                    <a>Design & Dev</a>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
